<?php include('header.html'); ?>

<section class="hero">
    <div class="container hero-container">
        <picture class="hero-img">
            <source media="(max-width: 375px)"
                    srcset="assets/images/home/mobile/image-homepage-hero.jpg, assets/images/home/mobile/image-homepage-hero@2x.jpg 2x">
            <source media="(max-width: 768px)"
                    srcset="assets/images/home/tablet/image-homepage-hero.jpg, assets/images/home/tablet/image-homepage-hero@2x.jpg 2x">
            <img src="assets/images/home/desktop/image-homepage-hero.jpg"
                 srcset="assets/images/home/desktop/image-homepage-hero@2x.jpg 2x" alt="">
        </picture>
        <div class="hero-content">
            <h1 class="hero-title">Hey, I’m Alex Spencer and I love building beautiful websites</h1>
            <a class="hero-content-link btn" href="#about">About me</a>
        </div>
    </div>
</section>

<section class="about">
    <div class="container about-container" id="about">
        <div class="about-content">
            <h2 class="about-title">About me</h2>
            <p class="about-text">I’m a junior front-end developer looking for a new role in an exciting company. I
                focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing
                JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in
                London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding,
                you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d
                love you to check out my work.</p>
            <a class="about-link btn-secondary" href="portfolio.php">Go to portfolio</a>
        </div>
        <picture class="about-image">
            <source media="(max-width: 375px)"
                    srcset="assets/images/home/mobile/image-homepage-profile.jpg, assets/images/home/mobile/image-homepage-profile@2x.jpg 2x">
            <source media="(max-width: 768px)"
                    srcset="assets/images/home/tablet/image-homepage-profile.jpg, assets/images/home/tablet/image-homepage-profile@2x.jpg 2x">
            <img src="assets/images/home/desktop/image-homepage-profile.jpg"
                 srcset="assets/images/home/desktop/image-homepage-profile@2x.jpg 2x" alt="">
        </picture>
    </div>
</section>

<?php include('contact-footer.html')?>

<?php include('footer.html') ?>


