document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       ABOUT SECTION
    ======================================== */

    const aboutSection = document.getElementById("about");

    if (aboutSection) {

        aboutSection.innerHTML = `
            <div class="about-section">

                <div class="about-left">

                    <div class="experience">

                        <span>+</span>

                        <div>
                            <strong>Fresher</strong>
                            <p>Years Experience</p>
                            <small>Frontend Developer</small>
                        </div>

                    </div>

                    <div class="profile-image">
                        <img
                            src="ASSETS/IMAGES/about.jpeg"
                            alt="Aisha Haris">
                    </div>

                    <div class="profile-image">
                        <img
                            src="ASSETS/IMAGES/aboutmypic.avif"
                            alt="Profile">
                    </div>

                    <span class="tag tag-1">
                        AISHA HARIS
                    </span>

                    <span class="tag tag-2">
                        Website/App
                    </span>

                    <span class="tag tag-3">
                        UI/UX Designer
                    </span>

                </div>


                <div class="about-me">

                    <h2>About me</h2>

                    <h3>Hello, I'm Aisha Haris</h3>

                    <p>
                        As a passionate web developer, I create modern,
                        responsive and user-friendly websites with a strong
                        focus on clean design, performance and great user
                        experience.
                    </p>

                    <p>
                        I enjoy turning ideas into beautiful digital
                        experiences and continuously improving my skills
                        by working with modern web technologies.
                    </p>

                    <p>
                        I am always excited to learn new technologies,
                        improve my skills and create digital experiences
                        that are both creative and functional.
                    </p>

                </div>


                <div class="education">

                    <h2>Education</h2>

                    <div class="education-item">

                        <h4>Web Development</h4>

                        <span>2024 - 2025</span>

                        <p>
                            Frontend Web Development
                        </p>

                    </div>


                    <div class="education-item">

                        <h4>UI/UX Design</h4>

                        <span>2023 - 2024</span>

                        <p>
                            User Interface & User Experience
                        </p>

                    </div>


                    <div class="certificates">

                        <h2>Certificates</h2>

                        <div class="certificate-box">

                            <a
                                href="ASSETS/IMAGES/certificate1.jpeg"
                                target="_blank">

                                <img
                                    src="ASSETS/IMAGES/certificate1.jpeg"
                                    alt="Certificate 1">

                            </a>


                            <a
                                href="ASSETS/IMAGES/certificate2.jpeg"
                                target="_blank">

                                <img
                                    src="ASSETS/IMAGES/certificate2.jpeg"
                                    alt="Certificate 2">

                            </a>


                            <a
                                href="ASSETS/IMAGES/certificate3.jpeg"
                                target="_blank">

                                <img
                                    src="ASSETS/IMAGES/certificate3.jpeg"
                                    alt="Certificate 3">

                            </a>


                            <a
                                href="ASSETS/IMAGES/certificate4.jpeg"
                                target="_blank">

                                <img
                                    src="ASSETS/IMAGES/certificate4.jpeg"
                                    alt="Certificate 4">

                            </a>


                            <a
                                href="ASSETS/IMAGES/certificate5.jpeg"
                                target="_blank">

                                <img
                                    src="ASSETS/IMAGES/certificate5.jpeg"
                                    alt="Certificate 5">

                            </a>


                            <a
                                href="ASSETS/IMAGES/certificate6.jpeg"
                                target="_blank">

                                <img
                                    src="ASSETS/IMAGES/certificate6.jpeg"
                                    alt="Certificate 6">

                            </a>

                        </div>

                    </div>

                </div>

            </div>
        `;
    }


    /* ========================================
       SKILLS SECTION
    ======================================== */

    const skillsSection = document.getElementById("skills");

    if (skillsSection) {

        skillsSection.innerHTML = `

            <section class="skills-section">

                <div class="container">

                    <div class="text-center mb-5">

                        <span class="badge-soft mb-2 d-inline-block">
                            My Skills
                        </span>

                        <h2 class="section-title">
                            Technologies I Use
                        </h2>

                        <p class="section-subtitle">
                            Tools and technologies I use to create modern websites
                        </p>

                    </div>


                    <div class="row g-4">

                        ${portfolioData.skills.map(skill => `

                            <div class="col-md-6">

                                <div class="skill-card skill-${skill.percentage}">

                                    <div class="skill-header">

                                        <span class="skill-name">
                                            ${skill.name}
                                        </span>

                                        <span class="skill-percentage">
                                            ${skill.percentage}%
                                        </span>

                                    </div>


                                    <div class="progress">

                                        <div
                                            class="progress-bar"
                                            style="width: ${skill.percentage}%"
                                            role="progressbar"
                                            aria-valuenow="${skill.percentage}"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>

                                    </div>

                                </div>

                            </div>

                        `).join("")}

                    </div>

                </div>

            </section>
        `;
    }


    /* ========================================
       EDUCATION & EXPERIENCE
    ======================================== */

    const educationSection = document.getElementById("education");
    const experienceSection = document.getElementById("experience");

    if (educationSection && experienceSection) {

        /* ========================================
           EDUCATION
        ======================================== */

        educationSection.innerHTML = `

            <div class="work-education-heading text-center">

                <span class="badge-soft mb-2 d-inline-block">
                    Work & Education
                </span>

                <h2 class="section-title">

                    <span class="black-text">
                        My
                    </span>

                    <span class="orange-text">
                        Academic and Professional
                    </span>

                    <span class="black-text">
                        Journey
                    </span>

                </h2>

            </div>


            <section class="education-section">

                <div class="container">

                    <div class="row g-4">

                        ${portfolioData.education.map(item => `

                            <div class="col-lg-6">

                                <div class="education-card">

                                    <h3>
                                        ${item.degree}
                                    </h3>

                                    <h5>
                                        ${item.institute}
                                    </h5>

                                    <span>
                                        ${item.duration}
                                    </span>

                                    <p>
                                        ${item.description}
                                    </p>

                                </div>

                            </div>

                        `).join("")}

                    </div>

                </div>

            </section>
        `;


        /* ========================================
           EXPERIENCE
        ======================================== */

        experienceSection.innerHTML = `

            <section class="experience-section">

                <div class="container">

                    <div class="row g-4">

                        ${portfolioData.experience.map(item => `

                            <div class="col-lg-6">

                                <div class="experience-card">

                                    <h3>
                                        ${item.jobTitle}
                                    </h3>

                                    <h5>
                                        ${item.company}
                                    </h5>

                                    <span>
                                        ${item.duration}
                                    </span>

                                    <p>
                                        ${item.description}
                                    </p>

                                </div>

                            </div>

                        `).join("")}

                    </div>

                </div>

            </section>
        `;
    }

});