<?php
if ( ! defined( 'ABSPATH' ) ) exit;

function nip_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array('search-form','comment-form','comment-list','gallery','caption','style','script') );
    register_nav_menus( array('primary' => __('Primary Menu','north-indian-palace')) );
}
add_action( 'after_setup_theme', 'nip_setup' );

function nip_assets() {
    wp_enqueue_style( 'nip-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'nip_assets' );

function nip_asset( $file ) {
    return esc_url( get_template_directory_uri() . '/assets/images/' . rawurlencode( $file ) );
}
