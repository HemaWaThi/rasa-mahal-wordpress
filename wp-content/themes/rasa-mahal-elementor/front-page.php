<?php
get_header();
?>
<main class="rasa-page-content">
<?php
if ( have_posts() ) :
    while ( have_posts() ) :
        the_post();
        the_content();
    endwhile;
endif;
?>
</main>
<?php get_footer(); ?>
