<?php
/**
 * Title: Latest Posts
 * Slug: blockskit-restaurant/home-latest-posts
 * Categories: theme
 * Keywords: latest-posts
 */
?>
<!-- wp:group {"metadata":{"name":"blog"},"align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small","top":"100px","bottom":"100px"},"blockGap":"var:preset|spacing|large"}},"backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="padding-top:100px;padding-right:var(--wp--preset--spacing--x-small);padding-bottom:100px;padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small","margin":{"bottom":"var:preset|spacing|small"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center","verticalAlignment":"bottom"}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--small)"><!-- wp:image {"id":294,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/images/img1.png' ) ); ?>" alt="" class="wp-image-294"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":6,"style":{"typography":{"lineHeight":"1"},"elements":{"link":{"color":{"text":"var:preset|color|highlight"}}}},"textColor":"highlight","fontSize":"small"} -->
<h6 class="wp-block-heading has-highlight-color has-text-color has-link-color has-small-font-size" style="line-height:1"><?php esc_html_e( 'LATEST BLOG', 'blockskit-restaurant' ); ?></h6>
<!-- /wp:heading -->

<!-- wp:image {"id":294,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/images/img1.png' ) ); ?>" alt="" class="wp-image-294"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->

<!-- wp:heading {"textAlign":"center","fontSize":"xxx-large"} -->
<h2 class="wp-block-heading has-text-align-center has-xxx-large-font-size"><?php esc_html_e( 'Recent Insights &amp; Blogs', 'blockskit-restaurant' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php esc_html_e( 'Quisque ligula nostra, lectus eiusmod massa parturient maecenas.', 'blockskit-restaurant' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:query {"queryId":0,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"},"blockGap":"var:preset|spacing|small"},"border":{"width":"1px","color":"#E5E7EB"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-border-color" style="border-color:#E5E7EB;border-width:1px;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:post-featured-image {"style":{"spacing":{"margin":{"bottom":"0"},"padding":{"top":"0","bottom":"0","left":"0","right":"0"}}}} /--></div>
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-default","style":{"spacing":{"blockGap":"var:preset|spacing|xx-small","padding":{"right":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small","top":"var:preset|spacing|small"}}},"layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group is-style-default" style="padding-top:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|x-small"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--x-small)"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"},"layout":{"selfStretch":"fixed","flexSize":"150px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
<div class="wp-block-group"><!-- wp:separator {"className":"is-style-wide","style":{"layout":{"selfStretch":"fixed","flexSize":"50px"}},"backgroundColor":"highlight"} -->
<hr class="wp-block-separator has-text-color has-highlight-color has-alpha-channel-opacity has-highlight-background-color has-background is-style-wide"/>
<!-- /wp:separator -->

<!-- wp:post-date {"format":"M j, Y","style":{"typography":{"fontStyle":"normal","fontWeight":"500","lineHeight":"1"},"layout":{"selfStretch":"fit","flexSize":null}},"fontSize":"x-small"} /--></div>
<!-- /wp:group -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|outline"}}}},"textColor":"outline"} -->
<p class="has-outline-color has-text-color has-link-color">|</p>
<!-- /wp:paragraph -->

<!-- wp:post-author-name {"style":{"typography":{"fontStyle":"normal","fontWeight":"500"}},"fontSize":"x-small"} /--></div>
<!-- /wp:group -->

<!-- wp:post-title {"level":5,"isLink":true,"style":{"spacing":{"padding":{"top":"0","bottom":"0"},"margin":{"bottom":"var:preset|spacing|x-small"}},"typography":{"fontStyle":"normal","fontWeight":"600","lineHeight":"1.3","letterSpacing":"0px","fontSize":"26px"}},"fontFamily":"source-sans-3"} /-->

<!-- wp:post-excerpt {"excerptLength":10} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->