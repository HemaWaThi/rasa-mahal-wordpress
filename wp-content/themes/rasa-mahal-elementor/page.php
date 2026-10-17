<?php
get_header();
?>
<main class="rasa-page-content">
<?php
if ( have_posts() ) :
    while ( have_posts() ) :
        the_post();
        if ( class_exists( 'Elementor\\Plugin' ) && \Elementor\Plugin::$instance->db->is_built_with_elementor( get_the_ID() ) ) {
            the_content();
        } else {
            echo '<div class="rasa-standard-content"><div class="rasa-container">';
            the_title( '<h1>', '</h1>' );
            the_content();
            echo '</div></div>';
        }
    endwhile;
endif;
?>
</main>
<?php get_footer(); ?>
