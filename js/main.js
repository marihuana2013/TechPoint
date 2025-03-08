document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart");
    const cartClose = document.getElementById("cart-close");
    const addToCartButtons = document.querySelectorAll("#button-cart-add");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product-info");
            const title = product.querySelector(".product-title").textContent;
            const priceText = product.querySelector(".product-price").textContent;
            const price = parseInt(priceText.replace(/\D/g, ""));

            total += price;
            cartTotalElement.textContent = total.toLocaleString();

            const imgSrc = product.querySelector("img").src;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${imgSrc}" alt="${title}">
                <div>
                    <p>${title}</p>
                    <p><strong>${priceText}</strong></p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);

            cart.classList.add("active");
        });
    });

    cartClose.addEventListener("click", function () {
        cart.classList.remove("active");
    });
});
