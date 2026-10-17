<?php
/**
 * Plugin Name: North Indian Reservations
 * Description: Restaurant reservation form with a custom WordPress MySQL table and admin management screen.
 * Version: 1.0.0
 */
if ( ! defined('ABSPATH') ) exit;

function nir_table(){ global $wpdb; return $wpdb->prefix . 'nir_reservations'; }

register_activation_hook(__FILE__, 'nir_activate');
function nir_activate(){
    global $wpdb;
    $table = nir_table();
    $charset = $wpdb->get_charset_collate();
    $sql = "CREATE TABLE $table (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      customer_name VARCHAR(120) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(190) NOT NULL DEFAULT '',
      reservation_date DATE NOT NULL,
      reservation_time TIME NOT NULL,
      guests SMALLINT UNSIGNED NOT NULL DEFAULT 2,
      notes TEXT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'pending',
      created_at DATETIME NOT NULL,
      PRIMARY KEY (id),
      KEY reservation_date (reservation_date),
      KEY status (status)
    ) $charset;";
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);
}

add_action('init','nir_process_frontend');
function nir_process_frontend(){
    if ( empty($_POST['nir_action']) || $_POST['nir_action'] !== 'reserve' ) return;
    if ( empty($_POST['nir_nonce']) || ! wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nir_nonce'])),'nir_reserve') ) return;

    global $wpdb;
    $name = sanitize_text_field(wp_unslash($_POST['nir_name'] ?? ''));
    $phone = sanitize_text_field(wp_unslash($_POST['nir_phone'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['nir_email'] ?? ''));
    $date = sanitize_text_field(wp_unslash($_POST['nir_date'] ?? ''));
    $time = sanitize_text_field(wp_unslash($_POST['nir_time'] ?? ''));
    $guests = absint($_POST['nir_guests'] ?? 2);
    $notes = sanitize_textarea_field(wp_unslash($_POST['nir_notes'] ?? ''));

    $status = 'error';
    if ($name && $phone && preg_match('/^\\d{4}-\\d{2}-\\d{2}$/',$date) && preg_match('/^\\d{2}:\\d{2}$/',$time) && $guests >= 1 && $guests <= 30 && $date >= current_time('Y-m-d')) {
        $ok = $wpdb->insert(nir_table(), array(
          'customer_name'=>$name,'phone'=>$phone,'email'=>$email,
          'reservation_date'=>$date,'reservation_time'=>$time.':00','guests'=>$guests,
          'notes'=>$notes,'status'=>'pending','created_at'=>current_time('mysql')
        ), array('%s','%s','%s','%s','%s','%d','%s','%s','%s'));
        if ($ok) {
            $status='success';
            $subject = sprintf('New table reservation: %s - %s',$date,$name);
            $body = "Name: $name\nPhone: $phone\nEmail: $email\nDate: $date\nTime: $time\nGuests: $guests\nNotes: $notes";
            wp_mail(get_option('admin_email'),$subject,$body);
        }
    }
    $url = wp_get_referer() ?: home_url('/');
    $url = remove_query_arg('nir_status',$url);
    wp_safe_redirect(add_query_arg('nir_status',$status,$url) . '#reservation');
    exit;
}

add_shortcode('nir_reservation_form','nir_form');
function nir_form(){
    $status = sanitize_key($_GET['nir_status'] ?? '');
    ob_start(); ?>
    <div class="nir-card">
      <?php if($status==='success'): ?><div class="nir-alert success">Thank you. Your reservation request has been received.</div><?php elseif($status==='error'): ?><div class="nir-alert error">Please check the required fields and try again.</div><?php endif; ?>
      <form method="post" class="nir-form">
        <input type="hidden" name="nir_action" value="reserve">
        <?php wp_nonce_field('nir_reserve','nir_nonce'); ?>
        <div class="nir-grid">
          <label>Full Name *<input type="text" name="nir_name" required maxlength="120"></label>
          <label>Phone *<input type="tel" name="nir_phone" required maxlength="50"></label>
          <label>Email<input type="email" name="nir_email" maxlength="190"></label>
          <label>Guests *<input type="number" name="nir_guests" value="2" min="1" max="30" required></label>
          <label>Date *<input type="date" name="nir_date" min="<?php echo esc_attr(current_time('Y-m-d')); ?>" required></label>
          <label>Time *<input type="time" name="nir_time" required></label>
        </div>
        <label>Special Request<textarea name="nir_notes" rows="4" maxlength="1000" placeholder="Birthday, seating preference, allergies, etc."></textarea></label>
        <button type="submit">Request Reservation</button>
      </form>
    </div>
    <?php return ob_get_clean();
}

add_action('wp_enqueue_scripts','nir_styles');
function nir_styles(){
    wp_register_style('nir-inline',false,array(),'1.0.0'); wp_enqueue_style('nir-inline');
    wp_add_inline_style('nir-inline','.nir-card{background:#fff;border:1px solid #eadfce;border-radius:20px;padding:28px;box-shadow:0 12px 36px rgba(0,0,0,.07)}.nir-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.nir-form label{display:block;font-weight:700;margin-bottom:14px;color:#3a2424}.nir-form input,.nir-form textarea,.nir-form select{width:100%;margin-top:7px;padding:13px 14px;border:1px solid #dacfc0;border-radius:9px;font:inherit;background:#fff}.nir-form button{border:0;background:#651019;color:#fff;padding:14px 20px;border-radius:9px;font-weight:800;cursor:pointer}.nir-alert{padding:12px 14px;border-radius:9px;margin-bottom:18px}.nir-alert.success{background:#edf8ee;color:#24632c}.nir-alert.error{background:#fff0f0;color:#8b2020}@media(max-width:650px){.nir-grid{grid-template-columns:1fr}}');
}

add_action('admin_menu','nir_menu');
function nir_menu(){ add_menu_page('Reservations','Reservations','manage_options','nir-reservations','nir_admin','dashicons-calendar-alt',26); }

function nir_admin(){
    if(!current_user_can('manage_options')) return;
    global $wpdb; $table=nir_table();
    if(isset($_POST['nir_update'],$_POST['reservation_id'],$_POST['nir_admin_nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nir_admin_nonce'])),'nir_admin_update')){
        $allowed=array('pending','confirmed','cancelled','completed');
        $st=sanitize_key(wp_unslash($_POST['status'] ?? 'pending'));
        if(in_array($st,$allowed,true)) $wpdb->update($table,array('status'=>$st),array('id'=>absint($_POST['reservation_id'])),array('%s'),array('%d'));
    }
    $rows=$wpdb->get_results("SELECT * FROM {$table} ORDER BY reservation_date DESC,reservation_time DESC LIMIT 500"); ?>
    <div class="wrap"><h1>Restaurant Reservations</h1><p>Table: <code><?php echo esc_html($table); ?></code></p>
    <table class="widefat striped"><thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Date</th><th>Time</th><th>Guests</th><th>Notes</th><th>Status</th></tr></thead><tbody>
    <?php if($rows): foreach($rows as $r): ?><tr><td><?php echo esc_html($r->customer_name); ?></td><td><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$r->phone)); ?>"><?php echo esc_html($r->phone); ?></a></td><td><?php echo esc_html($r->email); ?></td><td><?php echo esc_html($r->reservation_date); ?></td><td><?php echo esc_html(substr($r->reservation_time,0,5)); ?></td><td><?php echo esc_html($r->guests); ?></td><td><?php echo esc_html($r->notes); ?></td><td><form method="post" style="display:flex;gap:6px"><?php wp_nonce_field('nir_admin_update','nir_admin_nonce'); ?><input type="hidden" name="reservation_id" value="<?php echo esc_attr($r->id); ?>"><select name="status"><?php foreach(array('pending','confirmed','cancelled','completed') as $s): ?><option value="<?php echo esc_attr($s); ?>" <?php selected($r->status,$s); ?>><?php echo esc_html(ucfirst($s)); ?></option><?php endforeach; ?></select><button class="button" name="nir_update" value="1">Save</button></form></td></tr><?php endforeach; else: ?><tr><td colspan="8">No reservations yet.</td></tr><?php endif; ?>
    </tbody></table></div><?php
}
