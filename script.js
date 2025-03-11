// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Animation Trigger on Scroll
const fadeIns = document.querySelectorAll(".fade-in");
const slideIns = document.querySelectorAll(".slide-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, { threshold: 0.5 });

fadeIns.forEach(element => observer.observe(element));
slideIns.forEach(element => observer.observe(element));