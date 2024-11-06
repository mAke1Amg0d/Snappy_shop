/*function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("day-theme")) {
        body.classList.remove("day-theme");
        body.classList.add("night-theme");
    } else {
        body.classList.remove("night-theme");
        body.classList.add("day-theme");
    }
}*/

document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;
    

    if (activeElement.classList.contains('product')) {

        const products = document.querySelectorAll('.product');
        const currentIndex = Array.prototype.indexOf.call(products, activeElement);

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {

            const nextIndex = (currentIndex + 1) % products.length;
            products[nextIndex].focus();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {

            const prevIndex = (currentIndex - 1 + products.length) % products.length;
            products[prevIndex].focus();
        }
    }
});
