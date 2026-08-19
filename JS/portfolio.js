document.addEventListener("DOMContentLoaded", () => {

    const projectsSection = document.getElementById("projects");

    if (!projectsSection) return;

    projectsSection.innerHTML = `
        <div class="container">

            <div class="text-center mb-5">

                <span class="badge-soft mb-2 d-inline-block">
                    My Projects
                </span>

                <h2 class="section-title">
                    Recent Work
                </h2>

                <p class="section-subtitle">
                    Some of my recent projects and work
                </p>

            </div>

            <div class="row g-4">

                ${portfolioData.projects.map(project => `

                    <div class="col-md-6 col-lg-4">

                        <div class="project-card">

                            <div class="project-image-wrapper">

                                <img
                                    src="${project.image}"
                                    alt="${project.title}"
                                    class="project-image project-lightbox-trigger"
                                    data-image="${project.image}"
                                    data-title="${project.title}"
                                >

                            </div>

                            <div class="project-content">

                                <span class="project-category">
                                    ${project.category}
                                </span>

                                <h3>
                                    ${project.title}
                                </h3>

                                <p>
                                    ${project.description}
                                </p>

                                <div class="project-technologies">

                                    ${project.technologies.map(technology => `
                                        <span>${technology}</span>
                                    `).join("")}

                                </div>

                                <button
                                    type="button"
                                    class="btn btn-primary view-project-btn"
                                    data-project-id="${project.id}"
                                    data-bs-toggle="modal"
                                    data-bs-target="#projectModal">

                                    View Details

                                </button>

                            </div>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>


        <div
            class="modal fade"
            id="projectModal"
            tabindex="-1"
            aria-hidden="true">

            <div class="modal-dialog modal-lg modal-dialog-centered">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5
                            class="modal-title"
                            id="projectModalTitle">
                            Project Details
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal">
                        </button>

                    </div>

                    <div
                        class="modal-body"
                        id="projectModalBody">
                    </div>

                </div>

            </div>

        </div>


        <div
            class="project-lightbox"
            id="projectLightbox">

            <button
                type="button"
                class="lightbox-close"
                id="lightboxClose">
                &times;
            </button>

            <img
                src=""
                alt=""
                id="lightboxImage"
                class="lightbox-image">

            <div
                class="lightbox-title"
                id="lightboxTitle">
            </div>

        </div>
    `;


    const projectButtons =
        document.querySelectorAll(".view-project-btn");

    projectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const projectId =
                Number(button.dataset.projectId);

            const project =
                portfolioData.projects.find(
                    item => item.id === projectId
                );

            if (!project) return;

            document.getElementById(
                "projectModalTitle"
            ).textContent = project.title;

            document.getElementById(
                "projectModalBody"
            ).innerHTML = `

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="img-fluid rounded mb-4">

                <p>
                    ${project.description}
                </p>

                <h5>
                    Features
                </h5>

                <ul>
                    ${project.features.map(feature => `
                        <li>${feature}</li>
                    `).join("")}
                </ul>

                <h5>
                    Technologies
                </h5>

                <div class="project-technologies mb-4">

                    ${project.technologies.map(technology => `
                        <span>${technology}</span>
                    `).join("")}

                </div>

                <div class="d-flex gap-2">

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-dark">

                        <i class="bi bi-github"></i>
                        GitHub

                    </a>

                    <a
                        href="${project.live}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary">

                        <i class="bi bi-box-arrow-up-right"></i>
                        Live Demo

                    </a>

                </div>

            `;

        });

    });


    const lightbox =
        document.getElementById("projectLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxClose =
        document.getElementById("lightboxClose");


    document
        .querySelectorAll(".project-lightbox-trigger")
        .forEach(image => {

            image.addEventListener("click", () => {

                lightboxImage.src =
                    image.dataset.image;

                lightboxImage.alt =
                    image.dataset.title;

                lightboxTitle.textContent =
                    image.dataset.title;

                lightbox.classList.add("active");

                document.body.style.overflow =
                    "hidden";

            });

        });


    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {
                closeLightbox();
            }

        }
    );

});
// service 
function loadServices() {

    const section = document.getElementById("services");

    if (!section) return;

    section.innerHTML = `
        <section class="services-section">

            <div class="container">

                <div class="text-center mb-5">

                    <span class="badge-soft mb-2 d-inline-block">
                        My Services
                    </span>

                    <h2 class="section-title">
                        What I Can Do
                    </h2>

                    <p class="section-subtitle">
                        Services I provide to create modern and user-friendly digital experiences
                    </p>

                </div>

                <div class="row g-4">

                    <div class="col-md-6 col-lg-4">

                        <div class="service-card">

                            <div class="service-icon">
                                <i class="bi bi-code-slash"></i>
                            </div>

                            <h3>
                                Web Development
                            </h3>

                            <p>
                                I create responsive and modern websites
                                using clean and efficient code.
                            </p>

                            <span class="service-number">
                                01
                            </span>

                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4">

                        <div class="service-card">

                            <div class="service-icon">
                                <i class="bi bi-palette"></i>
                            </div>

                            <h3>
                                UI/UX Design
                            </h3>

                            <p>
                                I design clean, attractive and user-friendly
                                interfaces with a strong focus on user experience.
                            </p>

                            <span class="service-number">
                                02
                            </span>

                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4">

                        <div class="service-card">

                            <div class="service-icon">
                                <i class="bi bi-phone"></i>
                            </div>

                            <h3>
                                Responsive Design
                            </h3>

                            <p>
                                I build websites that work smoothly across
                                desktops, tablets and mobile devices.
                            </p>

                            <span class="service-number">
                                03
                            </span>

                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4">

                        <div class="service-card">

                            <div class="service-icon">
                                <i class="bi bi-bootstrap"></i>
                            </div>

                            <h3>
                                Bootstrap Development
                            </h3>

                            <p>
                                I use Bootstrap to create responsive layouts
                                and modern website components quickly.
                            </p>

                            <span class="service-number">
                                04
                            </span>

                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4">

                        <div class="service-card">

                            <div class="service-icon">
                                <i class="bi bi-lightning-charge"></i>
                            </div>

                            <h3>
                                Website Optimization
                            </h3>

                            <p>
                                I improve website structure, performance
                                and overall user experience.
                            </p>

                            <span class="service-number">
                                05
                            </span>

                        </div>

                    </div>

                    <div class="col-md-6 col-lg-4">

                        <div class="service-card">

                            <div class="service-icon">
                                <i class="bi bi-tools"></i>
                            </div>

                            <h3>
                                Website Maintenance
                            </h3>

                            <p>
                                I update, improve and maintain websites
                                according to changing requirements.
                            </p>

                            <span class="service-number">
                                06
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}

loadServices();
/* ========================================
   DARK / LIGHT THEME
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (!themeToggle) {
        console.log("Theme button nahi mila");
        return;
    }

    themeToggle.addEventListener("click", function () {

        const html = document.documentElement;

        if (html.getAttribute("data-theme") === "dark") {

            html.removeAttribute("data-theme");

            if (themeIcon) {
                themeIcon.textContent = "☾";
            }

            localStorage.setItem("portfolioTheme", "light");

        } else {

            html.setAttribute("data-theme", "dark");

            if (themeIcon) {
                themeIcon.textContent = "☀";
            }

            localStorage.setItem("portfolioTheme", "dark");
        }

    });

    /* Saved theme */

    const savedTheme = localStorage.getItem("portfolioTheme");

    if (savedTheme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        if (themeIcon) {
            themeIcon.textContent = "☀";
        }

    } else {

        document.documentElement.removeAttribute(
            "data-theme"
        );

        if (themeIcon) {
            themeIcon.textContent = "☾";
        }

    }

});
/* ========================================
   NAVBAR ACTIVE LINK ON SCROLL
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(
        ".portfolio-navbar .nav-link"
    );

    const sections = document.querySelectorAll(
        "section[id]"
    );

    function updateActiveNav() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >=
                sectionTop - 180
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === `#${currentSection}`) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();

});