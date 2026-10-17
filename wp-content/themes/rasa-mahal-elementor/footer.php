<?php
if ( function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'footer' ) ) {
    // Elementor Pro Theme Builder footer.
} else {
    $phone = get_theme_mod('rasa_phone','+65 65321110');
    $phone2 = get_theme_mod('rasa_phone_2','+65 83894221');
    $email = get_theme_mod('rasa_email','reservations@example.com');
?>
<footer class="rasa-footer">
    <div class="rasa-container">
        <div class="rasa-footer-grid rasa-footer-grid-v4">
            <div class="rasa-footer-brand-col">
                <img class="rasa-footer-logo" src="<?php echo rasa_asset('images/logo/rasa-mahal-banner.jpg'); ?>" alt="Rasa Mahal">
                <p>North Indian comfort food, fragrant biryani, tandoor favourites and warm hospitality.</p>
                <a class="rasa-footer-button" href="<?php echo esc_url(home_url('/reservation/')); ?>">Reserve a Table</a>
            </div>
            <div>
                <h4>Explore</h4>
                <?php wp_nav_menu(array('theme_location'=>'footer','container'=>false,'fallback_cb'=>'rasa_menu_fallback')); ?>
            </div>
            <div>
                <h4>Visit Us</h4>
                <ul>
                    <li><?php echo esc_html(get_theme_mod('rasa_address','1 W West Coast Drive, #01-83 NEWest, Singapore 128020')); ?></li>
                    <li><?php echo esc_html(get_theme_mod('rasa_hours','Daily: 11:30 AM – 10:30 PM')); ?></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$phone)); ?>"><?php echo esc_html($phone); ?></a></li>
                    <li><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','',$phone2)); ?>"><?php echo esc_html($phone2); ?></a></li>
                    <li><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></li>
                </ul>
            </div>
        </div>
        <div class="rasa-copyright"><span>&copy; <?php echo esc_html(wp_date('Y')); ?> Rasa Mahal. All rights reserved.</span><span>Authentic North Indian Cuisine</span></div>
    </div>
</footer>
<?php } ?>
<?php wp_footer(); ?>
</body>
</html>
