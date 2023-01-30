projects = [
    {
        id: 1,
        titre: 'Manage',
        image: [
            {
                mobile: 'assets/images/portfolio/mobile/image-portfolio-manage.jpg',
                tablet: 'assets/images/portfolio/tablet/image-portfolio-manage.jpg',
                desktop: 'assets/images/portfolio/desktop/image-portfolio-manage.jpg'
            }
        ],
        desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
    },
    {
        id: 2,
        titre: 'Bookmark',
        image: [
            {
                mobile: 'assets/images/portfolio/mobile/image-portfolio-bookmark.jpg',
                tablet: 'assets/images/portfolio/tablet/image-portfolio-bookmark.jpg',
                desktop: 'assets/images/portfolio/desktop/image-portfolio-bookmark.jpg'
            }
        ],
        desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    },
    {
        id: 3,
        titre: 'Insure',
        image: [
            {
                mobile: 'assets/images/portfolio/mobile/image-portfolio-insure.jpg',
                tablet: 'assets/images/portfolio/tablet/image-portfolio-insure.jpg',
                desktop: 'assets/images/portfolio/desktop/image-portfolio-insure.jpg'
            }
        ],
        desc: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    },
    {
        id: 4,
        titre: 'Fylo',
        image: [
            {
                mobile: 'assets/images/portfolio/mobile/image-portfolio-fylo.jpg',
                tablet: 'assets/images/portfolio/tablet/image-portfolio-fylo.jpg',
                desktop: 'assets/images/portfolio/desktop/image-portfolio-fylo.jpg'
            }
        ],
        desc: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
    },
]
document.addEventListener("DOMContentLoaded", function () {

    // --------------- Liste les données ---------------------
    listProjects();
});

function listProjects() {
    element = document.getElementsByClassName("portfolio");

    for (i = 0; i < projects.length; i++) {

        //Création de la div principale
        projectCard = document.createElement("article");
        projectCard.className = "portfolio-item";

        // On récupère le titre du projet
        projectTitle = document.createElement("h2");
        projectTitle.className = "portfolio-title";
        projectTitle.textContent = projects[i].titre;

        // On récupère le lien vers le projet
        projectLink = document.createElement("a");
        projectLink.className = "btn-secondary";
        projectLink.innerText = "View project";
        projectLink.setAttribute('href', 'http://cefim.tld/html-css/portfolio/project.php?q=' +projects[i].titre);
        projectLink.setAttribute('alt', "");

        // On affiche la description du projet
        projectDesc = document.createElement("p");
        projectDesc.textContent = projects[i].desc;

        // On récupère les images en picture
        projectImg = document.createElement("img");
        projectImg.className = "portfolio-img";
        projectImg.setAttribute('src', 'http://cefim.tld/html-css/portfolio/' + projects[i]['image'][0]['desktop']);
        projectImg.setAttribute('alt', '');

        // On créé une div pour y mettre les différents textes / liens
        projectDiv = document.createElement("div");
        projectDiv.className = "portfolio-content";

        // On charge le tout
        projectCard.prepend(projectImg);
        projectCard.appendChild(projectDiv);
        projectDiv.appendChild(projectTitle)
        projectDiv.appendChild(projectDesc);
        projectDiv.appendChild(projectLink);
        projectCard.appendChild(projectImg);
        element[0].appendChild(projectCard);
    }
}