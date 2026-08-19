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


        <!-- PROJECT DETAILS MODAL -->

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


        <!-- PROJECT LIGHTBOX -->

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


    /* PROJECT DETAILS */

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



    lightboxClose.addEventListener(
        "click",
        () => {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }
    );


    lightbox.addEventListener(
        "click",
        event => {

            if (event.target === lightbox) {

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

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

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

            }

        }
    );

});