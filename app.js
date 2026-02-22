document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal-section, .reveal-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

});

// ================= CURSOR GLOW =================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

const mirrorInput = document.querySelector(".mirror-input");
const mirrorResponse = document.querySelector(".mirror-response");

if (mirrorInput) {
    mirrorInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && mirrorInput.value.trim() !== "") {

            mirrorInput.style.opacity = "0";
            mirrorInput.style.pointerEvents = "none";

            setTimeout(() => {
                mirrorResponse.textContent = "Watch the one who answered.";
                mirrorResponse.style.opacity = "1";
            }, 700);
        }
    });
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", () => {

    // Reveal Animation
    const elements = document.querySelectorAll(".reveal-section, .reveal-card");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    // Mobile Menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

});
