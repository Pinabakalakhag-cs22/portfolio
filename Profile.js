// =====================================================
// PINABAKALA KHAGESWARA RAO - PORTFOLIO JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Khageswara Rao Portfolio Loaded Successfully!");


    // =================================================
    // 1. NAVIGATION LINKS
    // =================================================

    const navLinks = document.querySelectorAll("nav a");


    // =================================================
    // 2. SMOOTH SCROLLING
    // =================================================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            // Only apply smooth scrolling to internal links
            if (targetId && targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // =================================================
    // 3. ACTIVE NAVIGATION LINK WHILE SCROLLING
    // =================================================

    const sections =
        document.querySelectorAll("section");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();



    // =================================================
    // 4. RESUME LINK CHECK
    // =================================================

    const resumeLinks =
        document.querySelectorAll(
            'a[href="./resume.pdf"]'
        );


    resumeLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Resume PDF opened/download requested."
            );

        });

    });



    // =================================================
    // 5. PROJECT LINKS
    // =================================================

    const projectLinks =
        document.querySelectorAll(
            '.project-link, .case-buttons a'
        );


    projectLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "GitHub project link clicked."
            );

        });

    });



    // =================================================
    // 6. CONTACT LINKS
    // =================================================

    const contactLinks =
        document.querySelectorAll(".contact-link");


    contactLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Contact link clicked."
            );

        });

    });



    // =================================================
    // 7. SCROLL REVEAL ANIMATION
    // =================================================

    const animatedElements =
        document.querySelectorAll(
            ".skill-card, " +
            ".experience-card, " +
            ".case-card, " +
            ".project-card, " +
            ".education-card, " +
            ".achievement-card, " +
            ".resume-card"
        );


    const observerOptions = {

        threshold: 0.15

    };


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            observerOptions
        );


    animatedElements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });



    // =================================================
    // 8. BACK TO TOP BUTTON
    // =================================================

    const backToTop =
        document.createElement("button");


    backToTop.innerHTML = "↑";


    backToTop.className =
        "back-to-top";


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(backToTop);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



    // =================================================
    // 9. UPDATE FOOTER YEAR AUTOMATICALLY
    // =================================================

    const footer =
        document.querySelector("footer");


    if (footer) {

        const currentYear =
            new Date().getFullYear();


        const footerParagraph =
            footer.querySelector("p");


        if (footerParagraph) {

            footerParagraph.textContent =
                "© " +
                currentYear +
                " Pinabakala Khageswara Rao";

        }

    }



    // =================================================
    // 10. PROFILE IMAGE ERROR HANDLING
    // =================================================

    const profileImage =
        document.querySelector(".profile-image");


    if (profileImage) {

        profileImage.addEventListener(
            "error",
            function () {

                console.warn(
                    "Profile image could not be loaded."
                );

                this.style.display = "none";

            }
        );

    }



    // =================================================
    // 11. KEYBOARD ACCESSIBILITY
    // =================================================

    document.addEventListener(
        "keydown",
        function (event) {

            // Press Home key to go to top
            if (
                event.key === "Home" &&
                !event.target.matches(
                    "input, textarea"
                )
            ) {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }

        }
    );



    // =================================================
    // FINISHED
    // =================================================

    console.log(
        "All portfolio JavaScript features initialized."
    );

});