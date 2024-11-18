document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar input");
    const categoryButtons = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".product");
    
    // Retrieve last search term or category filter from localStorage
    const savedSearchTerm = localStorage.getItem("searchTerm") || "";
    const savedCategory = localStorage.getItem("category") || "";

    // Apply saved filters on page load
    if (savedSearchTerm) {
        searchBar.value = savedSearchTerm;
        filterProducts(savedSearchTerm);
    }
    if (savedCategory) {
        filterProductsByCategory(savedCategory);
    }

    // Search functionality
    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        localStorage.setItem("searchTerm", searchTerm);
        filterProducts(searchTerm);
    });

    // Category filtering functionality
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.textContent.trim().toLowerCase();
            localStorage.setItem("category", category);
            filterProductsByCategory(category);
        });
    });

    function filterProducts(searchTerm) {
        products.forEach(product => {
            const name = product.querySelector(".name").textContent.toLowerCase();
            const uploader = product.querySelector(".uploader").textContent.toLowerCase();
            if (name.includes(searchTerm) || uploader.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    function filterProductsByCategory(category) {
        if (category === "") {
            products.forEach(product => product.style.display = "block");
            return;
        }
        products.forEach(product => {
            const uploader = product.querySelector(".hide").textContent.toLowerCase();
            if (uploader.includes(category)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});
