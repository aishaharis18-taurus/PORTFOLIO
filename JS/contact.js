document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) return;

    contactSection.innerHTML = `
        <section class="contact-section">
            <div class="container">

                <div class="contact-heading text-center">
                    <span class="contact-badge">Contact</span>
                    <h2>Let's Work Together</h2>
                    <p>Have a project in mind? Feel free to get in touch with me.</p>
                </div>

                <div class="contact-container">

                    <div class="contact-info-card">

                        <div class="contact-icon">
                            <i class="bi bi-chat-dots-fill"></i>
                        </div>

                        <h3>Let's Talk</h3>

                        <p>
                            I'm always open to discussing new projects,
                            creative ideas and opportunities.
                        </p>

                        <div class="contact-item">
                            <i class="bi bi-envelope-fill"></i>
                            <div>
                                <strong>Email</strong>
                                <span>aishaharis18@gmail.com</span>
                            </div>
                        </div>

                        <div class="contact-item">
                            <i class="bi bi-telephone-fill"></i>
                            <div>
                                <strong>Phone</strong>
                                <span>+92321 3573089</span>
                            </div>
                        </div>

                        <div class="contact-item">
                            <i class="bi bi-geo-alt-fill"></i>
                            <div>
                                <strong>Location</strong>
                                <span>Karachi, Pakistan</span>
                            </div>
                        </div>

                        <div class="contact-item">
                            <i class="bi bi-briefcase-fill"></i>
                            <div>
                                <strong>Work</strong>
                                <span>12pm till 5am </span>
                            </div>
                        </div>

                    </div>

                    <div class="contact-form-card">

                        <h3>Send Me a Message</h3>

                        <form id="contactForm" novalidate>

                            <div class="form-row">

                                <div class="form-group">
                                    <label for="contactName">Your Name</label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        placeholder="Enter your name"
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="contactEmail">Email Address</label>
                                    <input
                                        type="email"
                                        id="contactEmail"
                                        placeholder="Enter your email"
                                    >
                                </div>

                            </div>

                            <div class="form-group">
                                <label for="contactSubject">Subject</label>
                                <input
                                    type="text"
                                    id="contactSubject"
                                    placeholder="Enter subject"
                                >
                            </div>

                            <div class="form-group">
                                <label for="contactMessage">Message</label>
                                <textarea
                                    id="contactMessage"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>

                            <button type="submit" class="send-btn">
                                <i class="bi bi-send-fill"></i>
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

                <div class="social-card">

                    <h3>Follow Me</h3>

                    <div class="social-icons">

                        <a
                            href="https://github.com/aishaharis18-taurus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-github"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aisha-haris-372047421/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-linkedin"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-instagram"></i>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    `;

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("contactName");
        const email = document.getElementById("contactEmail");
        const subject = document.getElementById("contactSubject");
        const message = document.getElementById("contactMessage");

        let isValid = true;

        if (name.value.trim() === "") {
            name.classList.add("is-invalid");
            isValid = false;
        } else {
            name.classList.remove("is-invalid");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            email.value.trim() === "" ||
            !emailPattern.test(email.value.trim())
        ) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
        }

        if (subject.value.trim() === "") {
            subject.classList.add("is-invalid");
            isValid = false;
        } else {
            subject.classList.remove("is-invalid");
        }

        if (message.value.trim() === "") {
            message.classList.add("is-invalid");
            isValid = false;
        } else {
            message.classList.remove("is-invalid");
        }

        if (isValid) {
            alert("Thank you! Your message has been submitted.");
            contactForm.reset();
        }
    });

    const inputs = contactForm.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                input.classList.remove("is-invalid");
            }
        });
    });
});