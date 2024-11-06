// Function to apply saved theme on page load
function applyTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.remove("day-theme");
        document.body.classList.add("night-theme");
    } else {
        document.body.classList.remove("night-theme");
        document.body.classList.add("day-theme");
    }
}

// Toggle theme and save preference
document.getElementById("theme-toggle").addEventListener("click", function() {
    if (document.body.classList.contains("night-theme")){
        document.body.classList.remove("night-theme");
        document.body.classList.add("day-theme");
    } else {
        document.body.classList.add("night-theme");
        document.body.classList.remove("day-theme");
    }
    const newTheme = document.body.classList.contains("night-theme") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
});

// Apply theme on page load
applyTheme();
