<?php
/**
 * Plugin Name: Rasa Mahal Restaurant Core
 * Description: Native Elementor restaurant widgets + reservation management for a responsive, multi-page Rasa Mahal website. No shortcode-based page sections.
 * Version: 4.0.0
 * Author: OpenAI
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'RASA_CORE_VERSION', '4.0.0' );
define( 'RASA_THEME_SLUG', 'rasa-mahal-elementor' );

function rasa_res_table() {
    global $wpdb;
    return $wpdb->prefix . 'rasa_reservations';
}

function rasa_asset_url( $path = '' ) {
    return content_url( 'themes/' . RASA_THEME_SLUG . '/assets/' . ltrim( $path, '/' ) );
}

function rasa_default_dishes() {
    return array(
        array( 'title'=>'Butter Chicken', 'desc'=>'Creamy tomato gravy with tender spiced chicken.', 'price'=>'$16.90', 'image'=>rasa_asset_url('images/dishes/butter-chicken.jpg') ),
        array( 'title'=>'Kadai Chicken', 'desc'=>'Chicken cooked with peppers, onions and aromatic spices.', 'price'=>'$15.90', 'image'=>rasa_asset_url('images/dishes/kadai-chicken.jpg') ),
        array( 'title'=>'Palak Paneer', 'desc'=>'Paneer in a smooth spinach gravy.', 'price'=>'$14.90', 'image'=>rasa_asset_url('images/dishes/palak-paneer.jpg') ),
        array( 'title'=>'Chicken Biryani', 'desc'=>'Fragrant basmati rice layered with chicken, herbs and spices.', 'price'=>'$16.90', 'image'=>rasa_asset_url('images/dishes/chicken-biryani.jpg') ),
        array( 'title'=>'Paneer Biryani', 'desc'=>'Aromatic basmati rice with spiced paneer and fried onions.', 'price'=>'$14.90', 'image'=>rasa_asset_url('images/dishes/paneer-biryani.jpg') ),
        array( 'title'=>'Mutton Biryani', 'desc'=>'Long-grain basmati rice layered with tender spiced mutton.', 'price'=>'$16.90', 'image'=>rasa_asset_url('images/dishes/mutton-biryani.jpg') ),
    );
}

function rasa_default_gallery_images() {
    $files = array(
        'biryani-bowl.jpg','butter-chicken.jpg','kadai-chicken.jpg','chicken-biryani.jpg',
        'vegetable-biryani.jpg','paneer-biryani.jpg','chicken-curry.jpg','palak-paneer.jpg',
        'mutton-biryani.jpg','creamy-chicken.jpg','chicken-biryani-steel.jpg','biryani-steel.jpg'
    );
    $out=array(); foreach($files as $f){ $out[]=array('url'=>rasa_asset_url('images/gallery/'.$f),'id'=>''); } return $out;
}

function rasa_default_menu_images() {
    $files = array(
        '01-soup-salad.jpg','02-appetizers.jpg','03-vegetarian-kebab.jpg','04-non-veg-kebab.jpg',
        '05-main-course-chicken.jpg','06-main-course-mutton.jpg','07-main-course-vegetarian-a.jpg',
        '08-main-course-vegetarian-b.jpg','09-naan-bread.jpg','10-rice-pulao.jpg','11-biryani.jpg',
        '12-roll-chaat-dessert.jpg','13-lunch-promotion.jpg','14-beverages.jpg'
    );
    $out=array(); foreach($files as $f){ $out[]=array('url'=>rasa_asset_url('images/menu/'.$f),'id'=>''); } return $out;
}

register_activation_hook( __FILE__, 'rasa_core_activate' );
function rasa_core_activate() {
    rasa_create_reservation_table();
    rasa_seed_elementor_pages( false );
    flush_rewrite_rules();
}

function rasa_create_reservation_table() {
    global $wpdb;
    $table = rasa_res_table();
    $charset = $wpdb->get_charset_collate();
    $sql = "CREATE TABLE {$table} (
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
    ) {$charset};";
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta( $sql );
}

function rasa_element_id( $seed ) {
    return substr( md5( 'rasa-mahal-' . $seed ), 0, 8 );
}

function rasa_widget_container( $widget_type, $seed, $settings = array() ) {
    return array(
        'id' => rasa_element_id( 'container-' . $seed ),
        'elType' => 'container',
        'isInner' => false,
        'settings' => array(
            'content_width' => 'full',
            'width' => array( 'unit'=>'%', 'size'=>100, 'sizes'=>array() ),
            'padding' => array( 'unit'=>'px', 'top'=>'0', 'right'=>'0', 'bottom'=>'0', 'left'=>'0', 'isLinked'=>true ),
            'gap' => array( 'unit'=>'px', 'size'=>0, 'column'=>'0', 'row'=>'0', 'isLinked'=>true ),
        ),
        'elements' => array(
            array(
                'id' => rasa_element_id( 'widget-' . $seed ),
                'elType' => 'widget',
                'widgetType' => $widget_type,
                'settings' => $settings,
                'elements' => array(),
            )
        ),
    );
}

function rasa_page_blueprints() {
    return array(
        'home' => array(
            'title'=>'Home',
            'widgets'=>array(
                array('rasa_home_hero','home-hero',array()),
                array('rasa_special_categories','home-categories',array()),
                array('rasa_popular_dishes','home-popular',array()),
                array('rasa_intro','home-intro',array()),
                array('rasa_signature_menu','home-signature-menu',array()),
                array('rasa_gallery','home-gallery',array('heading'=>'A feast for the eyes','limit'=>8)),
                array('rasa_reviews','home-reviews',array()),
                array('rasa_cta','home-cta',array()),
            )
        ),
        'about-us' => array(
            'title'=>'About Us',
            'widgets'=>array(
                array('rasa_page_hero','about-hero',array('title'=>'About Rasa Mahal','subtitle'=>'Authentic North Indian cuisine, warm hospitality and a palace of flavours.')),
                array('rasa_about','about-main',array()),
                array('rasa_cta','about-cta',array('title'=>'Taste the tradition','text'=>'Reserve a table and experience the flavours of Rasa Mahal.')),
            )
        ),
        'menu' => array(
            'title'=>'Food Menu',
            'widgets'=>array(
                array('rasa_page_hero','menu-hero',array('title'=>'Food Menu','subtitle'=>'Explore our full selection of North Indian favourites.')),
                array('rasa_menu_gallery','menu-gallery',array()),
            )
        ),
        'gallery' => array(
            'title'=>'Gallery',
            'widgets'=>array(
                array('rasa_page_hero','gallery-hero',array('title'=>'Food Gallery','subtitle'=>'A closer look at the dishes and flavours of Rasa Mahal.')),
                array('rasa_gallery','gallery-main',array('heading'=>'Made to be remembered','limit'=>0)),
            )
        ),
        'reservation' => array(
            'title'=>'Reservation',
            'widgets'=>array(
                array('rasa_page_hero','reservation-hero',array('title'=>'Reserve Your Table','subtitle'=>'Plan your next meal with us.')),
                array('rasa_reservation','reservation-form',array()),
            )
        ),
        'contact' => array(
            'title'=>'Contact',
            'widgets'=>array(
                array('rasa_page_hero','contact-hero',array('title'=>'Contact Rasa Mahal','subtitle'=>'Visit, call or send us a reservation request.')),
                array('rasa_contact','contact-main',array()),
            )
        ),
    );
}

/**
 * Creates Elementor-native starter pages. No shortcode content is used.
 * With $force=true, only pages previously marked as Rasa-managed are overwritten.
 */
function rasa_seed_elementor_pages( $force = false ) {
    $pages = rasa_page_blueprints();
    $ids = array();

    foreach ( $pages as $slug => $page ) {
        $existing = get_page_by_path( $slug, OBJECT, 'page' );
        $id = 0;

        if ( $existing ) {
            $id = (int) $existing->ID;
            $managed = get_post_meta( $id, '_rasa_managed_page', true );
            if ( ! $force && ! $managed ) {
                $ids[$slug] = $id;
                continue;
            }
        } else {
            $id = wp_insert_post( array(
                'post_title'=>$page['title'],
                'post_name'=>$slug,
                'post_type'=>'page',
                'post_status'=>'publish',
                'post_content'=>'',
            ) );
        }

        if ( ! $id || is_wp_error( $id ) ) continue;

        wp_update_post( array(
            'ID'=>$id,
            'post_title'=>$page['title'],
            'post_name'=>$slug,
            'post_status'=>'publish',
            'post_content'=>'',
        ) );

        $data = array();
        foreach ( $page['widgets'] as $widget ) {
            $data[] = rasa_widget_container( $widget[0], $widget[1], $widget[2] );
        }

        update_post_meta( $id, '_rasa_managed_page', '1' );
        update_post_meta( $id, '_wp_page_template', 'template-elementor-fullwidth.php' );
        update_post_meta( $id, '_elementor_edit_mode', 'builder' );
        update_post_meta( $id, '_elementor_template_type', 'wp-page' );
        update_post_meta( $id, '_elementor_data', wp_slash( wp_json_encode( $data ) ) );
        update_post_meta( $id, '_elementor_page_settings', array( 'hide_title'=>'yes' ) );
        delete_post_meta( $id, '_elementor_css' );
        $ids[$slug] = $id;
    }

    if ( ! empty( $ids['home'] ) ) {
        update_option( 'show_on_front', 'page' );
        update_option( 'page_on_front', $ids['home'] );
    }

    update_option( 'rasa_page_ids', $ids );
    return $ids;
}

/* Elementor dependency notice */
add_action( 'admin_notices', function() {
    if ( current_user_can('activate_plugins') && ! did_action('elementor/loaded') && ! class_exists('Elementor\\Plugin') ) {
        echo '<div class="notice notice-warning"><p><strong>Rasa Mahal:</strong> Install and activate Elementor to edit the restaurant pages with native widgets.</p></div>';
    }
} );

add_action( 'elementor/elements/categories_registered', function( $manager ) {
    $manager->add_category( 'rasa-mahal', array( 'title'=>'Rasa Mahal Restaurant', 'icon'=>'fa fa-utensils' ) );
} );

function rasa_register_widget_classes( $widgets_manager ) {
    if ( ! class_exists('\Elementor\Widget_Base') ) return;

    abstract class Rasa_Widget_Base extends \Elementor\Widget_Base {
        public function get_categories(){ return array('rasa-mahal'); }
        public function get_keywords(){ return array('rasa','mahal','restaurant','north indian','food'); }
        protected function image_url( $setting, $fallback ) {
            return ! empty($setting['url']) ? $setting['url'] : rasa_asset_url($fallback);
        }
        protected function render_lightbox_shell(){
            static $done=false; if($done) return; $done=true;
            echo '<div class="rasa-lightbox" aria-hidden="true"><button class="rasa-lightbox-close" type="button" aria-label="Close">×</button><button class="rasa-lightbox-prev" type="button" aria-label="Previous">‹</button><img src="" alt=""><button class="rasa-lightbox-next" type="button" aria-label="Next">›</button></div>';
        }
    }

    class Rasa_Home_Hero_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_home_hero'; }
        public function get_title(){ return 'Rasa — Home Hero'; }
        public function get_icon(){ return 'eicon-banner'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('brand_image',array('label'=>'Brand / Banner Image','type'=>\Elementor\Controls_Manager::MEDIA,'default'=>array('url'=>rasa_asset_url('images/logo/rasa-mahal-banner.jpg'))));
            $this->add_control('background_image',array('label'=>'Background Image','type'=>\Elementor\Controls_Manager::MEDIA,'default'=>array('url'=>rasa_asset_url('images/dishes/chicken-biryani.jpg'))));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Authentic North Indian Cuisine'));
            $this->add_control('title',array('label'=>'Title','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'A Palace of Flavours'));
            $this->add_control('text',array('label'=>'Description','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Smoky tandoor favourites, rich curries, aromatic biryani and traditional North Indian hospitality.'));
            $this->add_control('primary_text',array('label'=>'Primary Button','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Reserve a Table'));
            $this->add_control('primary_url',array('label'=>'Primary Link','type'=>\Elementor\Controls_Manager::URL,'default'=>array('url'=>home_url('/reservation/'))));
            $this->add_control('secondary_text',array('label'=>'Secondary Button','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Explore Food Menu'));
            $this->add_control('secondary_url',array('label'=>'Secondary Link','type'=>\Elementor\Controls_Manager::URL,'default'=>array('url'=>home_url('/menu/'))));
            $this->end_controls_section();
            $this->start_controls_section('style',array('label'=>'Style','tab'=>\Elementor\Controls_Manager::TAB_STYLE));
            $this->add_control('min_height',array('label'=>'Minimum Height','type'=>\Elementor\Controls_Manager::SLIDER,'size_units'=>array('px','vh'),'range'=>array('px'=>array('min'=>420,'max'=>1000),'vh'=>array('min'=>50,'max'=>100)),'default'=>array('unit'=>'px','size'=>670),'selectors'=>array('{{WRAPPER}} .rasa-hero'=>'min-height: {{SIZE}}{{UNIT}};')));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); $bg=$this->image_url($s['background_image'],'images/dishes/chicken-biryani.jpg'); ?>
            <section class="rasa-hero" style="background-image:linear-gradient(90deg,rgba(35,1,5,.90),rgba(35,1,5,.55) 52%,rgba(35,1,5,.18)),url('<?php echo esc_url($bg); ?>')"><div class="rasa-container rasa-hero-content">
                <img class="rasa-hero-brand" src="<?php echo esc_url($this->image_url($s['brand_image'],'images/logo/rasa-mahal-banner.jpg')); ?>" alt="Rasa Mahal">
                <span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h1><?php echo esc_html($s['title']); ?></h1><p><?php echo esc_html($s['text']); ?></p>
                <div class="rasa-actions"><a class="rasa-btn rasa-btn-primary" href="<?php echo esc_url($s['primary_url']['url']); ?>"><?php echo esc_html($s['primary_text']); ?></a><a class="rasa-btn rasa-btn-outline" href="<?php echo esc_url($s['secondary_url']['url']); ?>"><?php echo esc_html($s['secondary_text']); ?></a></div>
            </div></section>
        <?php }
    }

    class Rasa_Intro_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_intro'; }
        public function get_title(){ return 'Rasa — Story / Intro'; }
        public function get_icon(){ return 'eicon-image-box'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Our Story'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'North Indian tradition, served with care'));
            $this->add_control('text',array('label'=>'Description','type'=>\Elementor\Controls_Manager::WYSIWYG,'default'=>'Rasa Mahal celebrates comforting curries, tandoor cooking, fragrant rice, fresh breads and the warm hospitality of a classic North Indian dining experience.'));
            $this->add_control('image',array('label'=>'Image','type'=>\Elementor\Controls_Manager::MEDIA,'default'=>array('url'=>rasa_asset_url('images/dishes/biryani-bowl.jpg'))));
            $rep=new \Elementor\Repeater();
            $rep->add_control('title',array('label'=>'Title','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Tandoor Fresh'));
            $rep->add_control('text',array('label'=>'Text','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Smoky grilled favourites prepared with aromatic marinades.'));
            $this->add_control('features',array('label'=>'Features','type'=>\Elementor\Controls_Manager::REPEATER,'fields'=>$rep->get_controls(),'title_field'=>'{{{ title }}}','default'=>array(
                array('title'=>'Tandoor Fresh','text'=>'Smoky grilled favourites prepared with aromatic marinades.'),array('title'=>'Rich Curries','text'=>'Slow-cooked gravies layered with traditional spices.'),array('title'=>'Fragrant Biryani','text'=>'Long-grain basmati rice, herbs and bold flavours.'),array('title'=>'Family Dining','text'=>'Comfortable meals for families, friends and celebrations.')
            )));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?>
            <section class="rasa-section"><div class="rasa-container rasa-intro-grid"><div><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><div class="rasa-lead"><?php echo wp_kses_post($s['text']); ?></div><div class="rasa-feature-grid"><?php foreach($s['features'] as $f): ?><div class="rasa-feature"><strong><?php echo esc_html($f['title']); ?></strong><?php echo esc_html($f['text']); ?></div><?php endforeach; ?></div></div><div class="rasa-intro-photo"><img src="<?php echo esc_url($this->image_url($s['image'],'images/dishes/biryani-bowl.jpg')); ?>" alt="Rasa Mahal cuisine"></div></div></section>
        <?php }
    }

    class Rasa_Popular_Dishes_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_popular_dishes'; }
        public function get_title(){ return 'Rasa — Popular Dishes Slider'; }
        public function get_icon(){ return 'eicon-slider-push'; }
        public function get_script_depends(){ return array('rasa-site'); }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Chef Favourites'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Popular Dishes'));
            $this->add_control('intro',array('label'=>'Intro','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Discover some of our favourite North Indian dishes.'));
            $rep=new \Elementor\Repeater();
            $rep->add_control('image',array('label'=>'Image','type'=>\Elementor\Controls_Manager::MEDIA));
            $rep->add_control('title',array('label'=>'Dish Name','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Butter Chicken'));
            $rep->add_control('desc',array('label'=>'Description','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Creamy tomato gravy with tender spiced chicken.'));
            $rep->add_control('price',array('label'=>'Price','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'$16.90'));
            $defaults=array(); foreach(rasa_default_dishes() as $d){$defaults[]=array('image'=>array('url'=>$d['image']),'title'=>$d['title'],'desc'=>$d['desc'],'price'=>$d['price']);}
            $this->add_control('dishes',array('label'=>'Dishes','type'=>\Elementor\Controls_Manager::REPEATER,'fields'=>$rep->get_controls(),'title_field'=>'{{{ title }}}','default'=>$defaults));
            $this->add_control('autoplay',array('label'=>'Autoplay','type'=>\Elementor\Controls_Manager::SWITCHER,'label_on'=>'Yes','label_off'=>'No','return_value'=>'yes','default'=>'yes'));
            $this->add_control('delay',array('label'=>'Autoplay Delay (ms)','type'=>\Elementor\Controls_Manager::NUMBER,'default'=>4200,'min'=>1500,'max'=>15000,'condition'=>array('autoplay'=>'yes')));
            $this->add_responsive_control('slides',array('label'=>'Cards Per View','type'=>\Elementor\Controls_Manager::NUMBER,'default'=>3,'tablet_default'=>2,'mobile_default'=>1,'min'=>1,'max'=>5));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); $desktop=$s['slides']?:3; $tablet=$s['slides_tablet']?:2; $mobile=$s['slides_mobile']?:1; ?>
            <section class="rasa-section rasa-section-alt"><div class="rasa-container"><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><p class="rasa-lead"><?php echo esc_html($s['intro']); ?></p>
            <div class="rasa-slider-wrap" data-rasa-slider data-autoplay="<?php echo esc_attr($s['autoplay']); ?>" data-delay="<?php echo esc_attr($s['delay']); ?>" style="--rasa-slides-desktop:<?php echo (int)$desktop; ?>;--rasa-slides-tablet:<?php echo (int)$tablet; ?>;--rasa-slides-mobile:<?php echo (int)$mobile; ?>;"><div class="rasa-slider-controls"><button class="rasa-slider-btn" data-prev type="button" aria-label="Previous">‹</button><button class="rasa-slider-btn" data-next type="button" aria-label="Next">›</button></div><div class="rasa-dish-track">
                <?php foreach($s['dishes'] as $d): ?><article class="rasa-dish-card"><img src="<?php echo esc_url($this->image_url($d['image'],'images/dishes/butter-chicken.jpg')); ?>" alt="<?php echo esc_attr($d['title']); ?>"><div class="rasa-dish-body"><h3><?php echo esc_html($d['title']); ?></h3><p><?php echo esc_html($d['desc']); ?></p><span class="rasa-price"><?php echo esc_html($d['price']); ?></span></div></article><?php endforeach; ?>
            </div></div></div></section>
        <?php }
    }

    class Rasa_Home_Links_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_home_links'; }
        public function get_title(){ return 'Rasa — Explore Cards'; }
        public function get_icon(){ return 'eicon-gallery-grid'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Cards'));
            $rep=new \Elementor\Repeater();
            $rep->add_control('title',array('label'=>'Title','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Food Menu'));
            $rep->add_control('label',array('label'=>'Small Text','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Explore'));
            $rep->add_control('url',array('label'=>'Link','type'=>\Elementor\Controls_Manager::URL,'default'=>array('url'=>home_url('/menu/'))));
            $rep->add_control('image',array('label'=>'Image','type'=>\Elementor\Controls_Manager::MEDIA));
            $this->add_control('cards',array('type'=>\Elementor\Controls_Manager::REPEATER,'fields'=>$rep->get_controls(),'title_field'=>'{{{ title }}}','default'=>array(
                array('title'=>'Food Menu','label'=>'Explore dishes','url'=>array('url'=>home_url('/menu/')),'image'=>array('url'=>rasa_asset_url('images/dishes/chicken-curry.jpg'))),
                array('title'=>'Gallery','label'=>'See the flavours','url'=>array('url'=>home_url('/gallery/')),'image'=>array('url'=>rasa_asset_url('images/dishes/vegetable-biryani.jpg'))),
                array('title'=>'Reservations','label'=>'Book your table','url'=>array('url'=>home_url('/reservation/')),'image'=>array('url'=>rasa_asset_url('images/dishes/paneer-biryani.jpg'))),
            )));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?><section class="rasa-section"><div class="rasa-container"><div class="rasa-link-cards"><?php foreach($s['cards'] as $c): ?><a class="rasa-link-card" href="<?php echo esc_url($c['url']['url']); ?>"><img src="<?php echo esc_url($this->image_url($c['image'],'images/dishes/chicken-curry.jpg')); ?>" alt="<?php echo esc_attr($c['title']); ?>"><div class="rasa-link-card-content"><span><?php echo esc_html($c['label']); ?></span><h3><?php echo esc_html($c['title']); ?></h3></div></a><?php endforeach; ?></div></div></section><?php }
    }

    class Rasa_Page_Hero_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_page_hero'; }
        public function get_title(){ return 'Rasa — Page Hero'; }
        public function get_icon(){ return 'eicon-call-to-action'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('title',array('label'=>'Title','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Rasa Mahal'));
            $this->add_control('subtitle',array('label'=>'Subtitle','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Authentic North Indian cuisine.'));
            $this->add_control('background_image',array('label'=>'Background','type'=>\Elementor\Controls_Manager::MEDIA,'default'=>array('url'=>rasa_asset_url('images/dishes/biryani-bowl.jpg'))));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?><section class="rasa-page-hero" style="background-image:linear-gradient(90deg,rgba(43,2,7,.90),rgba(43,2,7,.56)),url('<?php echo esc_url($this->image_url($s['background_image'],'images/dishes/biryani-bowl.jpg')); ?>')"><div class="rasa-container"><h1><?php echo esc_html($s['title']); ?></h1><p><?php echo esc_html($s['subtitle']); ?></p></div></section><?php }
    }

    class Rasa_About_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_about'; }
        public function get_title(){ return 'Rasa — About Content'; }
        public function get_icon(){ return 'eicon-info-box'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Our Story'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'A dining experience rooted in North Indian flavour'));
            $this->add_control('content_text',array('label'=>'Content','type'=>\Elementor\Controls_Manager::WYSIWYG,'default'=>'<p>Rasa Mahal brings together aromatic spices, tandoor cooking, rich gravies, fragrant basmati rice and fresh breads in a warm restaurant setting.</p><p>Our menu is designed for sharing with family, friends and guests — from comforting classics to celebratory dishes.</p>'));
            $this->add_control('image',array('label'=>'Image','type'=>\Elementor\Controls_Manager::MEDIA,'default'=>array('url'=>rasa_asset_url('images/dishes/chicken-curry.jpg'))));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?><section class="rasa-section"><div class="rasa-container rasa-intro-grid"><div><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><div class="rasa-lead"><?php echo wp_kses_post($s['content_text']); ?></div></div><div class="rasa-intro-photo"><img src="<?php echo esc_url($this->image_url($s['image'],'images/dishes/chicken-curry.jpg')); ?>" alt="Rasa Mahal"></div></div></section><?php }
    }

    class Rasa_Gallery_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_gallery'; }
        public function get_title(){ return 'Rasa — Editorial Food Gallery'; }
        public function get_icon(){ return 'eicon-gallery-masonry'; }
        public function get_script_depends(){ return array('rasa-site'); }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Gallery'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Gallery'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Made to be remembered'));
            $this->add_control('description',array('label'=>'Description','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'A closer look at our North Indian favourites.'));
            $this->add_control('images',array('label'=>'Images','type'=>\Elementor\Controls_Manager::GALLERY,'default'=>rasa_default_gallery_images()));
            $this->add_control('limit',array('label'=>'Maximum Images (0 = all)','type'=>\Elementor\Controls_Manager::NUMBER,'default'=>0,'min'=>0,'max'=>50));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); $images=!empty($s['images'])?$s['images']:rasa_default_gallery_images(); if(!empty($s['limit']))$images=array_slice($images,0,(int)$s['limit']); ?><section class="rasa-section rasa-section-alt"><div class="rasa-container"><div class="rasa-gallery-head"><div><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><p class="rasa-lead"><?php echo esc_html($s['description']); ?></p></div><div class="rasa-gallery-count"><?php echo count($images); ?><small>Photos</small></div></div><div class="rasa-gallery-grid"><?php foreach($images as $i=>$img): $url=!empty($img['url'])?$img['url']:''; if(!$url)continue; ?><figure class="rasa-gallery-item" data-rasa-lightbox data-rasa-full="<?php echo esc_url($url); ?>"><img src="<?php echo esc_url($url); ?>" alt="Rasa Mahal dish <?php echo (int)$i+1; ?>" loading="lazy"><div class="rasa-gallery-overlay"><strong>Rasa Mahal</strong><span class="rasa-gallery-open">↗</span></div></figure><?php endforeach; ?></div></div></section><?php $this->render_lightbox_shell(); }
    }

    class Rasa_Menu_Gallery_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_menu_gallery'; }
        public function get_title(){ return 'Rasa — Full Menu Gallery'; }
        public function get_icon(){ return 'eicon-menu-card'; }
        public function get_script_depends(){ return array('rasa-site'); }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Menu'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Our Menu'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Explore the full menu'));
            $this->add_control('description',array('label'=>'Description','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Click any menu page to view it larger.'));
            $this->add_control('images',array('label'=>'Menu Poster Images','type'=>\Elementor\Controls_Manager::GALLERY,'default'=>rasa_default_menu_images()));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); $images=!empty($s['images'])?$s['images']:rasa_default_menu_images(); ?><section class="rasa-section"><div class="rasa-container"><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><p class="rasa-lead"><?php echo esc_html($s['description']); ?></p><div class="rasa-menu-grid"><?php foreach($images as $i=>$img): $url=!empty($img['url'])?$img['url']:''; if(!$url)continue; ?><article class="rasa-menu-card" data-rasa-lightbox data-rasa-full="<?php echo esc_url($url); ?>"><img src="<?php echo esc_url($url); ?>" alt="Menu page <?php echo (int)$i+1; ?>" loading="lazy"><div class="rasa-menu-card-body"><h3>Menu Page <?php echo (int)$i+1; ?></h3><small>Click to enlarge</small></div></article><?php endforeach; ?></div></div></section><?php $this->render_lightbox_shell(); }
    }

    class Rasa_Reservation_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_reservation'; }
        public function get_title(){ return 'Rasa — Reservation Form'; }
        public function get_icon(){ return 'eicon-form-horizontal'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Reservations'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Book Your Table'));
            $this->add_control('text',array('label'=>'Description','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Choose your preferred date, time and party size. Our team will review your reservation request.'));
            $this->add_control('button_text',array('label'=>'Button Text','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Request Reservation'));
            $this->add_control('max_guests',array('label'=>'Maximum Guests','type'=>\Elementor\Controls_Manager::NUMBER,'default'=>30,'min'=>1,'max'=>200));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); $msg=isset($_GET['rasa_reservation'])?sanitize_key(wp_unslash($_GET['rasa_reservation'])):''; ?><section class="rasa-section" id="reservation-form"><div class="rasa-container rasa-reservation-layout"><aside class="rasa-reservation-copy"><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2><?php echo esc_html($s['heading']); ?></h2><p><?php echo esc_html($s['text']); ?></p><ul><li>Date and time</li><li>Guest count</li><li>Phone and email</li><li>Special requests</li></ul></aside><div><form class="rasa-reservation-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post"><input type="hidden" name="action" value="rasa_reservation_submit"><?php wp_nonce_field('rasa_reservation_submit','rasa_reservation_nonce'); ?><?php if($msg==='success'): ?><div class="rasa-notice rasa-notice-success">Thank you. Your reservation request has been received.</div><?php elseif($msg==='error'): ?><div class="rasa-notice rasa-notice-error">Please check the required fields and try again.</div><?php endif; ?><div class="rasa-form-grid"><label>Full Name *<input type="text" name="name" required maxlength="120"></label><label>Phone *<input type="tel" name="phone" required maxlength="50"></label><label>Email<input type="email" name="email" maxlength="190"></label><label>Guests *<input type="number" name="guests" min="1" max="<?php echo (int)$s['max_guests']; ?>" value="2" required></label><label>Date *<input type="date" name="date" min="<?php echo esc_attr(current_time('Y-m-d')); ?>" required></label><label>Time *<input type="time" name="time" required></label><label class="rasa-form-full">Special Request<textarea name="notes" maxlength="1000"></textarea></label><div class="rasa-form-full"><button class="rasa-btn rasa-btn-primary" type="submit"><?php echo esc_html($s['button_text']); ?></button></div></div></form></div></div></section><?php }
    }

    class Rasa_Contact_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_contact'; }
        public function get_title(){ return 'Rasa — Contact Details'; }
        public function get_icon(){ return 'eicon-map-pin'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Contact Details'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Visit & Contact'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'We would love to welcome you'));
            $this->add_control('address',array('label'=>'Address','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'1 W West Coast Drive, #01-83 NEWest, Singapore 128020'));
            $this->add_control('phone',array('label'=>'Phone 1','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'+65 65321110'));
            $this->add_control('phone2',array('label'=>'Phone 2','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'+65 83894221'));
            $this->add_control('email',array('label'=>'Email','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'reservations@example.com'));
            $this->add_control('hours',array('label'=>'Opening Hours','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Daily: 11:30 AM – 10:30 PM'));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?><section class="rasa-section rasa-section-alt"><div class="rasa-container"><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><div class="rasa-contact-grid"><div class="rasa-contact-card"><h3>Address</h3><p><?php echo nl2br(esc_html($s['address'])); ?></p></div><div class="rasa-contact-card"><h3>Contact</h3><p><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$s['phone'])); ?>"><?php echo esc_html($s['phone']); ?></a><br><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$s['phone2'])); ?>"><?php echo esc_html($s['phone2']); ?></a><br><a href="mailto:<?php echo esc_attr($s['email']); ?>"><?php echo esc_html($s['email']); ?></a></p></div><div class="rasa-contact-card"><h3>Opening Hours</h3><p><?php echo nl2br(esc_html($s['hours'])); ?></p></div></div></div></section><?php }
    }

    class Rasa_CTA_Widget extends Rasa_Widget_Base {
        public function get_name(){ return 'rasa_cta'; }
        public function get_title(){ return 'Rasa — Reservation CTA'; }
        public function get_icon(){ return 'eicon-button'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('title',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Your table is waiting'));
            $this->add_control('text',array('label'=>'Text','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Join us for authentic North Indian flavours and warm hospitality.'));
            $this->add_control('button_text',array('label'=>'Button Text','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Reserve a Table'));
            $this->add_control('button_url',array('label'=>'Button Link','type'=>\Elementor\Controls_Manager::URL,'default'=>array('url'=>home_url('/reservation/'))));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?><section class="rasa-cta"><div class="rasa-container"><h2><?php echo esc_html($s['title']); ?></h2><p><?php echo esc_html($s['text']); ?></p><a class="rasa-btn rasa-btn-primary" href="<?php echo esc_url($s['button_url']['url']); ?>"><?php echo esc_html($s['button_text']); ?></a></div></section><?php }
    }

    foreach ( array(
        new Rasa_Home_Hero_Widget(), new Rasa_Intro_Widget(), new Rasa_Popular_Dishes_Widget(), new Rasa_Home_Links_Widget(),
        new Rasa_Page_Hero_Widget(), new Rasa_About_Widget(), new Rasa_Gallery_Widget(), new Rasa_Menu_Gallery_Widget(),
        new Rasa_Reservation_Widget(), new Rasa_Contact_Widget(), new Rasa_CTA_Widget()
    ) as $widget ) { $widgets_manager->register( $widget ); }
}
add_action( 'elementor/widgets/register', 'rasa_register_widget_classes' );

require_once __DIR__ . '/includes/v4-widgets.php';

/* Reservation submit */
add_action( 'admin_post_nopriv_rasa_reservation_submit', 'rasa_handle_reservation' );
add_action( 'admin_post_rasa_reservation_submit', 'rasa_handle_reservation' );
function rasa_handle_reservation() {
    $status='error';
    if ( isset($_POST['rasa_reservation_nonce']) && wp_verify_nonce( sanitize_text_field(wp_unslash($_POST['rasa_reservation_nonce'])), 'rasa_reservation_submit' ) ) {
        global $wpdb;
        $name=sanitize_text_field(wp_unslash($_POST['name']??''));
        $phone=sanitize_text_field(wp_unslash($_POST['phone']??''));
        $email=sanitize_email(wp_unslash($_POST['email']??''));
        $date=sanitize_text_field(wp_unslash($_POST['date']??''));
        $time=sanitize_text_field(wp_unslash($_POST['time']??''));
        $guests=max(1,absint($_POST['guests']??2));
        $notes=sanitize_textarea_field(wp_unslash($_POST['notes']??''));
        $valid_date=DateTime::createFromFormat('Y-m-d',$date);
        $valid_time=DateTime::createFromFormat('H:i',$time);
        if($name && $phone && $valid_date && $valid_date->format('Y-m-d')===$date && $valid_time && $valid_time->format('H:i')===$time && $date>=current_time('Y-m-d')){
            $ok=$wpdb->insert(rasa_res_table(),array('customer_name'=>$name,'phone'=>$phone,'email'=>$email,'reservation_date'=>$date,'reservation_time'=>$time.':00','guests'=>$guests,'notes'=>$notes,'status'=>'pending','created_at'=>current_time('mysql')),array('%s','%s','%s','%s','%s','%d','%s','%s','%s'));
            if($ok){$status='success';wp_mail(get_option('admin_email'),'New Rasa Mahal reservation',"Name: $name\nPhone: $phone\nEmail: $email\nDate: $date\nTime: $time\nGuests: $guests\nNotes: $notes");}
        }
    }
    $url=wp_get_referer()?:home_url('/reservation/');
    wp_safe_redirect(add_query_arg('rasa_reservation',$status,$url).'#reservation-form'); exit;
}

/* Admin */
add_action('admin_menu',function(){
    add_menu_page('Rasa Reservations','Rasa Reservations','manage_options','rasa-reservations','rasa_admin_reservations','dashicons-calendar-alt',26);
    add_submenu_page('rasa-reservations','Elementor Setup','Elementor Setup','manage_options','rasa-setup','rasa_admin_setup');
});

function rasa_admin_reservations(){
    if(!current_user_can('manage_options'))return; global $wpdb; $table=rasa_res_table();
    if(isset($_POST['rasa_update_status'])&&check_admin_referer('rasa_admin_update','rasa_admin_nonce')){$id=absint($_POST['reservation_id']??0);$status=sanitize_key($_POST['status']??'pending');if(in_array($status,array('pending','confirmed','cancelled','completed'),true))$wpdb->update($table,array('status'=>$status),array('id'=>$id),array('%s'),array('%d'));}
    $rows=$wpdb->get_results("SELECT * FROM {$table} ORDER BY reservation_date DESC,reservation_time DESC LIMIT 500"); ?>
    <div class="wrap"><h1>Rasa Mahal Reservations</h1><table class="widefat striped"><thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Date</th><th>Time</th><th>Guests</th><th>Notes</th><th>Status</th></tr></thead><tbody>
    <?php if($rows):foreach($rows as $r): ?><tr><td><?php echo esc_html($r->customer_name);?></td><td><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$r->phone));?>"><?php echo esc_html($r->phone);?></a></td><td><?php echo esc_html($r->email);?></td><td><?php echo esc_html($r->reservation_date);?></td><td><?php echo esc_html(substr($r->reservation_time,0,5));?></td><td><?php echo esc_html($r->guests);?></td><td><?php echo esc_html($r->notes);?></td><td><form method="post" style="display:flex;gap:6px"><?php wp_nonce_field('rasa_admin_update','rasa_admin_nonce');?><input type="hidden" name="reservation_id" value="<?php echo esc_attr($r->id);?>"><select name="status"><?php foreach(array('pending','confirmed','cancelled','completed') as $st):?><option value="<?php echo esc_attr($st);?>" <?php selected($r->status,$st);?>><?php echo esc_html(ucfirst($st));?></option><?php endforeach;?></select><button class="button" name="rasa_update_status" value="1">Save</button></form></td></tr><?php endforeach;else:?><tr><td colspan="8">No reservations yet.</td></tr><?php endif;?></tbody></table></div><?php
}

function rasa_admin_setup(){
    if(!current_user_can('manage_options'))return;
    if(isset($_POST['rasa_seed_pages'])&&check_admin_referer('rasa_seed_pages_action')){rasa_seed_elementor_pages(false);flush_rewrite_rules();echo '<div class="notice notice-success"><p>Missing Rasa Mahal Elementor pages were created. Existing non-managed pages were preserved.</p></div>';}
    if(isset($_POST['rasa_rebuild_pages'])&&check_admin_referer('rasa_rebuild_pages_action')){rasa_seed_elementor_pages(true);flush_rewrite_rules();echo '<div class="notice notice-success"><p>Rasa-managed pages were rebuilt with native Elementor widgets.</p></div>';}
    ?>
    <div class="wrap"><h1>Rasa Mahal — Elementor Setup</h1>
    <p><strong>Version 4 uses native Elementor widgets only.</strong> There are no shortcode sections in the starter pages.</p>
    <p>Elementor widgets appear under the category <strong>Rasa Mahal Restaurant</strong>.</p>
    <h2>Create missing pages</h2><form method="post"><?php wp_nonce_field('rasa_seed_pages_action');?><button class="button button-primary" name="rasa_seed_pages" value="1">Create Missing Elementor Pages</button></form>
    <hr style="margin:28px 0"><h2>Rebuild Rasa-managed pages</h2><p>This overwrites only pages marked as Rasa-managed. Reservation records are not deleted.</p><form method="post"><?php wp_nonce_field('rasa_rebuild_pages_action');?><button class="button" name="rasa_rebuild_pages" value="1">Rebuild Native Elementor Pages</button></form>
    <h2 style="margin-top:30px">Available Widgets</h2><p>Home Hero, Special Categories, Popular Dishes Slider, Story / Intro, Signature Menu Filter, Reviews, Explore Cards, Page Hero, About Content, Editorial Food Gallery, Full Menu Gallery, Reservation Form, Contact Details and Reservation CTA.</p>
    </div><?php
}
