projects = [
    {
        id: 1,
        titre: 'Manage',
        image: [
            {
                mobile: 'assets/images/detail/mobile/image-manage-hero.jpg',
                tablet: 'assets/images/detail/tablet/image-manage-hero.jpg',
                desktop: 'assets/images/detail/desktop/image-manage-hero.jpg'
            }
        ],
        desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
        cat: [
            'Interaction Design', 'Front End Development', 'HTML / CSS / JS'
        ],
        url: '#',
        background: "This project was a front-end challenge from CEFIM BootCamp. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        preview: [
            {
                mobile: 'assets/images/detail/mobile/image-manage-preview-1.jpg',
                tablet: 'assets/images/detail/tablet/image-manage-preview-1.jpg',
                desktop: 'assets/images/detail/desktop/image-manage-preview-1.jpg'
            }
        ]
    },
    {
        id: 2,
        titre: 'Bookmark',
        image: [
            {
                mobile: 'assets/images/detail/mobile/image-bookmark-hero.jpg',
                tablet: 'assets/images/detail/tablet/image-bookmark-hero.jpg',
                desktop: 'assets/images/detail/desktop/image-bookmark-hero.jpg'
            }
        ],
        desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
        cat: [
            'Interaction Design', 'Front End Development', 'HTML / CSS / JS'
        ],
        url:'#',
        background: "This project was a front-end challenge from CEFIM BootCamp. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        preview: [
            {
                mobile: 'assets/images/detail/mobile/image-bookmark-preview-1.jpg',
                tablet: 'assets/images/detail/tablet/image-bookmark-preview-1.jpg',
                desktop: 'assets/images/detail/desktop/image-bookmark-preview-1.jpg'
            }
        ]
    },
    {
        id: 3,
        titre: 'Insure',
        image: [
            {
                mobile: 'assets/images/detail/mobile/image-insure-hero.jpg',
                tablet: 'assets/images/detail/tablet/image-insure-hero.jpg',
                desktop: 'assets/images/detail/desktop/image-insure-hero.jpg'
            }
        ],
        desc: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
        cat: [
            'Interaction Design', 'Front End Development', 'HTML / CSS / JS'
        ],
        url: '#',
        background: "This project was a front-end challenge from CEFIM BootCamp. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        preview: [
            {
                mobile: 'assets/images/detail/mobile/image-insure-preview-1.jpg',
                tablet: 'assets/images/detail/tablet/image-insure-preview-1.jpg',
                desktop: 'assets/images/detail/desktop/image-insure-preview-1.jpg'
            }
        ]
    },
    {
        id: 4,
        titre: 'Fylo',
        image: [
            {
                mobile: 'assets/images/detail/mobile/image-fylo-hero.jpg',
                tablet: 'assets/images/detail/tablet/image-fylo-hero.jpg',
                desktop: 'assets/images/detail/desktop/image-fylo-hero.jpg'
            }
        ],
        desc: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
        cat: [
            'Interaction Design', 'Front End Development', 'HTML / CSS / JS'
        ],
        url:'#',
        background: "This project was a front-end challenge from CEFIM BootCamp. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        preview: [
            {
                mobile: 'assets/images/detail/mobile/image-fylo-preview-1.jpg',
                tablet: 'assets/images/detail/tablet/image-fylo-preview-1.jpg',
                desktop: 'assets/images/detail/desktop/image-fylo-preview-1.jpg'
            }
        ]
    },
]

document.addEventListener("DOMContentLoaded", function () {

    // --------------- Liste les données ---------------------
    detailProject();

});

function detailProject() {

    element = document.getElementsByClassName("project");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    projet = urlParams.get('q');

    for (i = 0; i < projects.length; i++) {
        if (projects[i].titre === projet) {
            projectCard = document.createElement("div");
            projectCard.className = "container item-container";

            // On récupère l'image du projet à mettre dans le hero
            projectHero = document.createElement("img");
            projectHero.className = "item-hero-img";
            projectHero.setAttribute('src', 'http://cefim.tld/html-css/portfolio/' + projects[i]['image'][0]['desktop']);
            projectHero.setAttribute('alt', '');

            // On créé une div pour le contenu partie gauche
            projectSummary = document.createElement("div");
            projectSummary.className = "item-summary";

            projectTitle = document.createElement("h1");
            projectTitle.className = "item-title";
            projectTitle.textContent = projects[i].titre;

            projectDesc = document.createElement("p");
            projectDesc.className = "item-summary-text";
            projectDesc.textContent = projects[i].desc;

            projectCatList = document.createElement("ul");
            projectCatList.className = "project-cat-list";

            projectCatItem = document.createElement("li");
            projectCatItem.className = "project-cat-item";
            projectCatItem.textContent = projects[i].cat;

            projectWebsite = document.createElement("a");
            projectWebsite.className = "btn-secondary";
            projectWebsite.setAttribute('src', '#');
            projectWebsite.setAttribute('alt', '');
            projectWebsite.innerText = "visit Website";

            // On passe à la partie pour le background du projet
            projectBackground = document.createElement("div");
            projectBackground.className = "item-background";

            projectBackgroundTitle = document.createElement("h2");
            projectBackgroundTitle.className = "item-background-title";
            projectBackgroundTitle.innerText = "Project Background";

            projectBackgroundContent = document.createElement("p");
            projectBackgroundContent.className = "item-background-text";
            projectBackgroundContent.textContent = projects[i].background;

            // On s'occupe de la partie preview
            projectPreview = document.createElement("div");
            projectPreview.className = "item-preview";

            projectPreviewTitle = document.createElement("h2");
            projectPreviewTitle.className = "item-preview-title";
            projectPreviewTitle.innerText = "Static Previews";

            projectPreviewImg = document.createElement("img");
            projectPreviewImg.className = "item-preview-img";
            projectPreviewImg.setAttribute('alt', '');
            projectPreviewImg.setAttribute('src', 'http://cefim.tld/html-css/portfolio/' + projects[i]['preview'][0]['desktop']);

            // On charge le tout
            projectCard.prepend(projectHero);
            projectCard.appendChild(projectSummary);
            projectSummary.appendChild(projectTitle);
            projectSummary.appendChild(projectDesc);
            projectSummary.appendChild(projectCatList);
            projectCatList.appendChild(projectCatItem);
            projectSummary.appendChild(projectWebsite);
            projectCard.appendChild(projectBackground);
            projectBackground.appendChild(projectBackgroundTitle);
            projectBackground.appendChild(projectBackgroundContent);
            projectCard.appendChild(projectPreview);
            projectPreview.appendChild(projectPreviewTitle);
            projectPreview.appendChild(projectPreviewImg);
            element[0].appendChild(projectCard);
        }
    }
}