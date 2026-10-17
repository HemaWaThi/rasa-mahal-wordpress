<?php get_header(); ?>
<main>
<section class="hero">
  <div class="container hero-content">
    <div class="eyebrow">Authentic North Indian Cuisine</div>
    <h1>A Palace of Flavours</h1>
    <p>Experience smoky tandoor favourites, rich curries, fragrant biryani and traditional North Indian hospitality.</p>
    <div class="actions"><a class="btn btn-primary" href="#reservation">Reserve a Table</a><a class="btn btn-secondary" href="#menu">View Food Menu</a></div>
  </div>
</section>

<section class="section" id="about"><div class="container about-grid">
  <div><div class="eyebrow">Our Story</div><div class="section-head"><h2>Traditional recipes, prepared with care</h2><p>Our menu celebrates the spices, cooking traditions and comforting flavours of North India—from slow-simmered curries to tandoor-grilled specialities and aromatic basmati rice.</p></div>
    <div class="feature-list"><div class="feature"><strong>Tandoor Fresh</strong>Grilled with aromatic marinades and spices.</div><div class="feature"><strong>Fresh Ingredients</strong>Vegetables, herbs and spices prepared daily.</div><div class="feature"><strong>Classic Curries</strong>Rich gravies inspired by North Indian kitchens.</div><div class="feature"><strong>Warm Hospitality</strong>Comfortable dining for families and groups.</div></div>
  </div>
  <div class="about-photo"><img src="<?php echo nip_asset('appetizing_chicken_biryani_bowl.png'); ?>" alt="North Indian biryani"></div>
</div></section>

<section class="section alt" id="dishes"><div class="container"><div class="section-head"><div class="eyebrow">Chef Favourites</div><h2>Popular Dishes</h2><p>Use these included restaurant images as your featured menu photography.</p></div>
<div class="dishes">
<?php
$dishes = array(
  array('Butter Chicken','Creamy tomato gravy with tender spiced chicken.','golden_creamy_curry_bowl.png','$16.90'),
  array('Kadai Chicken','Chicken cooked with peppers, onions and aromatic spices.','vibrant_indian_curry_bowl.png','$15.90'),
  array('Palak Paneer','Paneer in a smooth spinach gravy.','glossy_spinach_curry_with_paneer.png','$15.90'),
  array('Chicken Biryani','Fragrant basmati rice layered with spiced chicken.','rustic_chicken_biryani_bowl.png','$16.90'),
  array('Vegetable Dum Biryani','Long-grain rice with vegetables, herbs and saffron.','rustic_vegetable_biryani_bowl.png','$12.90'),
  array('Paneer Tikka Biryani','Basmati rice with grilled paneer and aromatic spices.','steaming_copper_handi_paneer_biryani.png','$14.90')
);
foreach($dishes as $d): ?>
<article class="dish"><img src="<?php echo nip_asset($d[2]); ?>" alt="<?php echo esc_attr($d[0]); ?>"><div class="dish-body"><h3><?php echo esc_html($d[0]); ?></h3><p><?php echo esc_html($d[1]); ?></p><span class="price"><?php echo esc_html($d[3]); ?></span></div></article>
<?php endforeach; ?>
</div></div></section>

<section class="section" id="menu"><div class="container"><div class="section-head"><div class="eyebrow">Full Selection</div><h2>Food Menu</h2><p>The supplied menu artwork is included below. Click or open the images to inspect the dishes and prices.</p></div>
<div class="menu-posters">
<?php foreach(array('bombay-grill-003.png','bombay-grill-005.png','tandoor_kebab_menu_in_spice_tones.png','spiced_indian_chicken_menu.png','bombay-grill-007.png','bombay-grill-006.png') as $img): ?>
<a class="menu-poster" href="<?php echo nip_asset($img); ?>" target="_blank" rel="noopener"><img src="<?php echo nip_asset($img); ?>" alt="Restaurant menu page"></a>
<?php endforeach; ?>
</div></div></section>

<section class="section alt" id="gallery"><div class="container"><div class="section-head"><div class="eyebrow">Gallery</div><h2>Made to be remembered</h2></div>
<div class="gallery">
<?php foreach(array('rustic_copper_bowl_chicken_biryani.png','creamy_chicken_curry_with_cilantro.png','rustic_chicken_curry_close_up.png','appetizing_chicken_biryani_bowl.png','rustic_vegetable_biryani_bowl.png','steaming_copper_handi_paneer_biryani.png','vibrant_indian_curry_bowl.png','glossy_spinach_curry_with_paneer.png') as $img): ?><img src="<?php echo nip_asset($img); ?>" alt="North Indian food"><?php endforeach; ?>
</div></div></section>

<section class="section" id="reservation"><div class="container reservation-shell">
  <aside class="reservation-copy"><div class="eyebrow">Reservations</div><h2>Book Your Table</h2><p>Send a reservation request directly from the website. Requests are saved in your WordPress MySQL database and can be managed from the WordPress dashboard.</p><ul><li>Date and time selection</li><li>Guest count</li><li>Phone and email</li><li>Special requests</li><li>Pending / confirmed / cancelled status</li></ul></aside>
  <div><?php if ( shortcode_exists('nir_reservation_form') ) { echo do_shortcode('[nir_reservation_form]'); } else { echo '<div style="padding:24px;border:1px solid #ddd;border-radius:14px">Activate the <strong>North Indian Reservations</strong> plugin to enable table booking.</div>'; } ?></div>
</div></section>

<section class="section alt"><div class="container"><div class="section-head"><div class="eyebrow">Visit Us</div><h2>Contact & Opening Hours</h2></div><div class="contact-grid"><div class="contact-card"><h3>Address</h3><p>Replace with your restaurant address in <code>Address</code>.</p></div><div class="contact-card"><h3>Opening Hours</h3><p>Daily: 11:30 AM – 10:30 PM</p></div><div class="contact-card"><h3>Reservations</h3><p>Phone: +65 0000 0000<br>Email: rasamahal.info@gmail.com</p></div></div></div></section>
</main>
<?php get_footer(); ?>
