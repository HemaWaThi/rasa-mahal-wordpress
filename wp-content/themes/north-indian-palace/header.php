<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>">
      <img src="<?php echo nip_asset('luxurious_golden_r_crest_emblem.png'); ?>" alt="Restaurant logo">
      <span>RASA MAHAL<br /> Authentic North Indian Cuisine</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="<?php echo esc_url(home_url('/#about')); ?>">About</a>
      <a href="<?php echo esc_url(home_url('/#dishes')); ?>">Dishes</a>
      <a href="<?php echo esc_url(home_url('/#menu')); ?>">Menu</a>
      <a href="<?php echo esc_url(home_url('/#gallery')); ?>">Gallery</a>
      <a class="reserve-nav" href="<?php echo esc_url(home_url('/#reservation')); ?>">Reserve</a>
    </nav>
  </div>
</header>
