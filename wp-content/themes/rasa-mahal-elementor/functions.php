<?php
if ( ! defined( 'ABSPATH' ) ) exit;
define('RASA_THEME_VERSION','4.0.0');
function rasa_theme_setup(){
 add_theme_support('title-tag'); add_theme_support('post-thumbnails'); add_theme_support('custom-logo',array('height'=>100,'width'=>650,'flex-height'=>true,'flex-width'=>true));
 add_theme_support('html5',array('search-form','comment-form','comment-list','gallery','caption','style','script'));
 register_nav_menus(array('primary'=>__('Primary Menu','rasa-mahal'),'footer'=>__('Footer Menu','rasa-mahal')));
}
add_action('after_setup_theme','rasa_theme_setup');
function rasa_assets(){wp_enqueue_style('rasa-style',get_stylesheet_uri(),array(),RASA_THEME_VERSION);wp_enqueue_style('rasa-site',get_template_directory_uri().'/assets/css/site.css',array('rasa-style'),RASA_THEME_VERSION);wp_enqueue_script('rasa-site',get_template_directory_uri().'/assets/js/site.js',array(),RASA_THEME_VERSION,true);}add_action('wp_enqueue_scripts','rasa_assets');
function rasa_asset($path){return esc_url(get_template_directory_uri().'/assets/'.ltrim($path,'/'));}
function rasa_brand_logo(){echo '<img class="rasa-header-logo" src="'.rasa_asset('images/logo/rasa-mahal-banner.jpg').'" alt="Rasa Mahal">';}
function rasa_menu_fallback(){echo '<ul><li><a href="'.esc_url(home_url('/')).'">Home</a></li><li><a href="'.esc_url(home_url('/about-us/')).'">About</a></li><li><a href="'.esc_url(home_url('/menu/')).'">Food Menu</a></li><li><a href="'.esc_url(home_url('/gallery/')).'">Gallery</a></li><li><a href="'.esc_url(home_url('/contact/')).'">Contact</a></li><li><a class="rasa-reserve-link" href="'.esc_url(home_url('/reservation/')).'">Reservation</a></li></ul>';}
add_action('elementor/theme/register_locations',function($manager){$manager->register_all_core_location();});
function rasa_assign_menu(){if(!function_exists('wp_get_nav_menu_object'))return;$menu=wp_get_nav_menu_object('Rasa Mahal Main Menu');if(!$menu){$id=wp_create_nav_menu('Rasa Mahal Main Menu');$pages=array('Home'=>'','About Us'=>'about-us','Food Menu'=>'menu','Gallery'=>'gallery','Contact'=>'contact','Reservation'=>'reservation');foreach($pages as $label=>$slug){$p=$slug?get_page_by_path($slug):get_page_by_path('home');if($p)wp_update_nav_menu_item($id,0,array('menu-item-title'=>$label,'menu-item-object'=>'page','menu-item-object-id'=>$p->ID,'menu-item-type'=>'post_type','menu-item-status'=>'publish'));}$menu=wp_get_nav_menu_object($id);}if($menu){$loc=get_theme_mod('nav_menu_locations',array());$loc['primary']=$menu->term_id;set_theme_mod('nav_menu_locations',$loc);}}
add_action('after_switch_theme','rasa_assign_menu');
function rasa_customize($wp_customize){$wp_customize->add_section('rasa_contact',array('title'=>'Rasa Mahal Contact','priority'=>35));$fields=array('rasa_address'=>'1 W West Coast Drive, #01-83 NEWest, Singapore 128020','rasa_phone'=>'+65 65321110','rasa_phone_2'=>'+65 83894221','rasa_email'=>'reservations@example.com','rasa_hours'=>'Daily: 11:30 AM – 10:30 PM');foreach($fields as $id=>$default){$wp_customize->add_setting($id,array('default'=>$default,'sanitize_callback'=>'sanitize_text_field'));$wp_customize->add_control($id,array('section'=>'rasa_contact','label'=>ucwords(str_replace(array('rasa_','_'),' ',$id)),'type'=>'text'));}}
add_action('customize_register','rasa_customize');
