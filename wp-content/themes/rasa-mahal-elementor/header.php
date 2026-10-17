<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php
if ( function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'header' ) ) {
    // Elementor Pro Theme Builder header.
} else {
    $phone = get_theme_mod('rasa_phone','+65 65321110');
?>
<div class="rasa-topbar">
    <div class="rasa-container rasa-topbar-inner">
        <span>Authentic North Indian Cuisine · A Palace of Flavours</span>
        <div class="rasa-topbar-actions">
            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$phone)); ?>">Call <?php echo esc_html($phone); ?></a>
            <a class="rasa-topbar-reserve" href="<?php echo esc_url(home_url('/reservation/')); ?>">Reserve a Table</a>
        </div>
    </div>
</div>
<header class="rasa-site-header">
    <div class="rasa-container rasa-header-inner">
        <a class="rasa-brand" href="<?php echo esc_url(home_url('/')); ?>">
            <?php if ( has_custom_logo() ) { the_custom_logo(); } else { rasa_brand_logo(); } ?>
        </a>
        <button class="rasa-menu-toggle" aria-expanded="false" aria-label="Open menu">☰</button>
        <nav class="rasa-nav" aria-label="Primary navigation">
            <?php wp_nav_menu(array('theme_location'=>'primary','container'=>false,'fallback_cb'=>'rasa_menu_fallback')); ?>
        </nav>
    </div>
</header>
<?php } ?>
