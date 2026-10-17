<?php
/**
 * Rasa Mahal v4 — additional native Elementor widgets.
 * Inspired by modern restaurant ecommerce/menu layouts, while keeping an original Rasa Mahal identity.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

function rasa_v4_signature_items() {
    return array(
        array('title'=>'Butter Chicken','category'=>'Non-Vegetarian','desc'=>'Tandoori chicken in a velvety tomato and butter gravy.','price'=>'$16.90','image'=>rasa_asset_url('images/dishes/butter-chicken.jpg')),
        array('title'=>'Kadai Chicken','category'=>'Non-Vegetarian','desc'=>'Chicken, peppers and onions tossed with fragrant kadai spices.','price'=>'$15.90','image'=>rasa_asset_url('images/dishes/kadai-chicken.jpg')),
        array('title'=>'Palak Paneer','category'=>'Vegetarian','desc'=>'Paneer finished in a smooth, vibrant spinach gravy.','price'=>'$14.90','image'=>rasa_asset_url('images/dishes/palak-paneer.jpg')),
        array('title'=>'Paneer Biryani','category'=>'Vegetarian','desc'=>'Aromatic basmati rice layered with paneer, herbs and fried onion.','price'=>'$14.90','image'=>rasa_asset_url('images/dishes/paneer-biryani.jpg')),
        array('title'=>'Chicken Biryani','category'=>'Biryani','desc'=>'Fragrant basmati rice layered with tender chicken and whole spices.','price'=>'$16.90','image'=>rasa_asset_url('images/dishes/chicken-biryani.jpg')),
        array('title'=>'Mutton Biryani','category'=>'Biryani','desc'=>'Long-grain basmati rice with tender spiced mutton and herbs.','price'=>'$16.90','image'=>rasa_asset_url('images/dishes/mutton-biryani.jpg')),
        array('title'=>'Creamy Chicken Curry','category'=>'Curries','desc'=>'Rich North Indian chicken curry with a creamy aromatic finish.','price'=>'$16.90','image'=>rasa_asset_url('images/dishes/creamy-chicken.jpg')),
        array('title'=>'Chicken Curry','category'=>'Curries','desc'=>'Comforting spiced chicken curry finished with fresh coriander.','price'=>'$15.90','image'=>rasa_asset_url('images/dishes/chicken-curry.jpg')),
    );
}

add_action( 'elementor/widgets/register', function( $widgets_manager ) {
    if ( ! class_exists( '\Elementor\Widget_Base' ) ) return;

    abstract class Rasa_V4_Widget_Base extends \Elementor\Widget_Base {
        public function get_categories(){ return array('rasa-mahal'); }
        public function get_keywords(){ return array('rasa','restaurant','north indian','menu','food'); }
        protected function image_url( $setting, $fallback ) {
            return ! empty($setting['url']) ? $setting['url'] : rasa_asset_url($fallback);
        }
    }

    class Rasa_Special_Categories_Widget extends Rasa_V4_Widget_Base {
        public function get_name(){ return 'rasa_special_categories'; }
        public function get_title(){ return 'Rasa — Special Categories'; }
        public function get_icon(){ return 'eicon-gallery-grid'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Discover Our Kitchen'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Explore by flavour'));
            $this->add_control('intro',array('label'=>'Intro','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'From the tandoor to slow-cooked curries, find the style of North Indian food you are craving.'));
            $rep=new \Elementor\Repeater();
            $rep->add_control('image',array('label'=>'Image','type'=>\Elementor\Controls_Manager::MEDIA));
            $rep->add_control('eyebrow',array('label'=>'Small Label','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Our Special'));
            $rep->add_control('title',array('label'=>'Title','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Tandoor & Kebabs'));
            $rep->add_control('url',array('label'=>'Link','type'=>\Elementor\Controls_Manager::URL,'default'=>array('url'=>home_url('/menu/'))));
            $defaults=array(
                array('image'=>array('url'=>rasa_asset_url('images/dishes/kadai-chicken.jpg')),'eyebrow'=>'Fire & Spice','title'=>'Tandoor & Kebabs','url'=>array('url'=>home_url('/menu/'))),
                array('image'=>array('url'=>rasa_asset_url('images/dishes/palak-paneer.jpg')),'eyebrow'=>'Fresh & Comforting','title'=>'Vegetarian Classics','url'=>array('url'=>home_url('/menu/'))),
                array('image'=>array('url'=>rasa_asset_url('images/dishes/butter-chicken.jpg')),'eyebrow'=>'Slow Cooked','title'=>'Signature Curries','url'=>array('url'=>home_url('/menu/'))),
                array('image'=>array('url'=>rasa_asset_url('images/dishes/chicken-biryani.jpg')),'eyebrow'=>'Fragrant & Layered','title'=>'Biryani & Rice','url'=>array('url'=>home_url('/menu/'))),
            );
            $this->add_control('cards',array('label'=>'Categories','type'=>\Elementor\Controls_Manager::REPEATER,'fields'=>$rep->get_controls(),'title_field'=>'{{{ title }}}','default'=>$defaults));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?>
            <section class="rasa-v4-categories rasa-section">
                <div class="rasa-container">
                    <div class="rasa-v4-heading-row">
                        <div><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2></div>
                        <p class="rasa-v4-heading-copy"><?php echo esc_html($s['intro']); ?></p>
                    </div>
                    <div class="rasa-v4-category-grid">
                        <?php foreach($s['cards'] as $c): ?>
                        <a class="rasa-v4-category-card" href="<?php echo esc_url($c['url']['url']); ?>">
                            <img src="<?php echo esc_url($this->image_url($c['image'],'images/dishes/kadai-chicken.jpg')); ?>" alt="<?php echo esc_attr($c['title']); ?>">
                            <span class="rasa-v4-category-shade"></span>
                            <div class="rasa-v4-category-copy"><small><?php echo esc_html($c['eyebrow']); ?></small><h3><?php echo esc_html($c['title']); ?></h3><span class="rasa-v4-arrow">↗</span></div>
                        </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>
        <?php }
    }

    class Rasa_Signature_Menu_Widget extends Rasa_V4_Widget_Base {
        public function get_name(){ return 'rasa_signature_menu'; }
        public function get_title(){ return 'Rasa — Signature Menu Filter'; }
        public function get_icon(){ return 'eicon-posts-grid'; }
        public function get_script_depends(){ return array('rasa-site'); }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Rasa Mahal Favourites'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'A menu made for sharing'));
            $this->add_control('intro',array('label'=>'Intro','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Browse a selection of favourites. Use the category buttons to explore different styles of dishes.'));
            $rep=new \Elementor\Repeater();
            $rep->add_control('image',array('label'=>'Image','type'=>\Elementor\Controls_Manager::MEDIA));
            $rep->add_control('category',array('label'=>'Category','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Vegetarian'));
            $rep->add_control('title',array('label'=>'Dish Name','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Palak Paneer'));
            $rep->add_control('desc',array('label'=>'Description','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Paneer in a smooth spinach gravy.'));
            $rep->add_control('price',array('label'=>'Price','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'$14.90'));
            $defaults=array(); foreach(rasa_v4_signature_items() as $d){$defaults[]=array('image'=>array('url'=>$d['image']),'category'=>$d['category'],'title'=>$d['title'],'desc'=>$d['desc'],'price'=>$d['price']);}
            $this->add_control('items',array('label'=>'Menu Items','type'=>\Elementor\Controls_Manager::REPEATER,'fields'=>$rep->get_controls(),'title_field'=>'{{{ title }}}','default'=>$defaults));
            $this->add_control('button_text',array('label'=>'Button Text','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'View Full Food Menu'));
            $this->add_control('button_url',array('label'=>'Button Link','type'=>\Elementor\Controls_Manager::URL,'default'=>array('url'=>home_url('/menu/'))));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); $cats=array(); foreach($s['items'] as $d){$c=trim($d['category']);if($c && !in_array($c,$cats,true))$cats[]=$c;} ?>
            <section class="rasa-v4-menu rasa-section rasa-section-alt" data-rasa-filter-menu>
                <div class="rasa-container">
                    <div class="rasa-v4-menu-head"><div><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2><p class="rasa-lead"><?php echo esc_html($s['intro']); ?></p></div>
                    <div class="rasa-v4-filter-buttons"><button class="active" type="button" data-rasa-filter="all">All</button><?php foreach($cats as $c): ?><button type="button" data-rasa-filter="<?php echo esc_attr(sanitize_title($c)); ?>"><?php echo esc_html($c); ?></button><?php endforeach; ?></div></div>
                    <div class="rasa-v4-menu-grid">
                        <?php foreach($s['items'] as $d): $cat=sanitize_title($d['category']); ?>
                        <article class="rasa-v4-menu-card" data-rasa-menu-item="<?php echo esc_attr($cat); ?>">
                            <div class="rasa-v4-menu-image"><img src="<?php echo esc_url($this->image_url($d['image'],'images/dishes/butter-chicken.jpg')); ?>" alt="<?php echo esc_attr($d['title']); ?>"><span><?php echo esc_html($d['category']); ?></span></div>
                            <div class="rasa-v4-menu-body"><div class="rasa-v4-menu-title"><h3><?php echo esc_html($d['title']); ?></h3><strong><?php echo esc_html($d['price']); ?></strong></div><p><?php echo esc_html($d['desc']); ?></p></div>
                        </article>
                        <?php endforeach; ?>
                    </div>
                    <div class="rasa-v4-menu-footer"><a class="rasa-btn rasa-btn-dark" href="<?php echo esc_url($s['button_url']['url']); ?>"><?php echo esc_html($s['button_text']); ?></a></div>
                </div>
            </section>
        <?php }
    }

    class Rasa_Reviews_Widget extends Rasa_V4_Widget_Base {
        public function get_name(){ return 'rasa_reviews'; }
        public function get_title(){ return 'Rasa — Guest Experience'; }
        public function get_icon(){ return 'eicon-info-box'; }
        protected function register_controls(){
            $this->start_controls_section('content',array('label'=>'Content'));
            $this->add_control('kicker',array('label'=>'Kicker','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'The Rasa Mahal Experience'));
            $this->add_control('heading',array('label'=>'Heading','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'More than a meal'));
            $rep=new \Elementor\Repeater();
            $rep->add_control('number',array('label'=>'Number / Icon','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'01'));
            $rep->add_control('title',array('label'=>'Title','type'=>\Elementor\Controls_Manager::TEXT,'default'=>'Authentic Flavours'));
            $rep->add_control('text',array('label'=>'Text','type'=>\Elementor\Controls_Manager::TEXTAREA,'default'=>'Classic North Indian favourites prepared with aromatic spices and familiar techniques.'));
            $this->add_control('items',array('label'=>'Highlights','type'=>\Elementor\Controls_Manager::REPEATER,'fields'=>$rep->get_controls(),'title_field'=>'{{{ title }}}','default'=>array(
                array('number'=>'01','title'=>'Authentic Flavours','text'=>'Classic North Indian favourites prepared with aromatic spices and familiar techniques.'),
                array('number'=>'02','title'=>'Warm Hospitality','text'=>'A welcoming setting for family meals, celebrations and relaxed dinners.'),
                array('number'=>'03','title'=>'Easy Reservations','text'=>'Choose your date, time and party size online and send your request in seconds.'),
            )));
            $this->end_controls_section();
        }
        protected function render(){ $s=$this->get_settings_for_display(); ?>
            <section class="rasa-v4-experience rasa-section"><div class="rasa-container"><div class="rasa-v4-experience-head"><span class="rasa-kicker"><?php echo esc_html($s['kicker']); ?></span><h2 class="rasa-section-title"><?php echo esc_html($s['heading']); ?></h2></div><div class="rasa-v4-experience-grid"><?php foreach($s['items'] as $it): ?><article><span><?php echo esc_html($it['number']); ?></span><h3><?php echo esc_html($it['title']); ?></h3><p><?php echo esc_html($it['text']); ?></p></article><?php endforeach; ?></div></div></section>
        <?php }
    }

    $widgets_manager->register(new Rasa_Special_Categories_Widget());
    $widgets_manager->register(new Rasa_Signature_Menu_Widget());
    $widgets_manager->register(new Rasa_Reviews_Widget());
}, 20 );
