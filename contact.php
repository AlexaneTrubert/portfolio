<?php include "header.html" ?>

<section class="touch">
    <h1 class="screen-reader-text">Contact</h1>
    <div class="container contactpage-container">
        <h2 class="contact-touch-title h1-like">Get in Touch</h2>
        <p>
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and
            am open to a wide range of opportunities. My preference would be to find a position in a company in London.
            But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and
            positive person who will always approach each task with a sense of purpose and attention to detail. Please
            do feel free to check out my online profiles below and get in touch using the form.
        </p>
        <ul class="contactRS-list">
            <li class="contactRS-item">
                <a href="#" class="contactRS-link"><img src="assets/images/icons/github.svg" alt=""
                                                        class="contactRS"></a>
            </li>
            <li class="contactRS-item">
                <a href="#" class="contactRS-link"><img src="assets/images/icons/twitter.svg" alt="" class="contactRS"></a>
            </li>
            <li class="contactRS-item">
                <a href="#" class="contactRS-link"><img src="assets/images/icons/linkedin.svg" alt="" class="contactRS"></a>
            </li>
        </ul>
    </div>
</section>

<section class="contact">
    <div class="container contactpage-container">
        <h2 class="contact-touch-title h1-like">Contact Me</h2>
        <form action="/" class="contact-form">
            <div class="name field">
                <label for="name">Name</label>
                <input type="text" placeholder="Jane Appleseed" id="name" name="name" required>
            </div>
            <div class="email field">
                <label for="email">Email address</label>
                <input type="email" placeholder="email@example.com" id="email" name="email" required>
            </div>
            <div class="message field">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="How can i help you?" required></textarea>
            </div>
            <div class="button">
                <button type="submit" class="btn-contact">Send message</button>
            </div>
        </form>
    </div>
</section>


<?php include "footer.html" ?>
