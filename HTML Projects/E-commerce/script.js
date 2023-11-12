let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productTitle = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.slice(7));

        const cartItem = document.createElement('li');
        cartItem.textContent = `${productTitle} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);

        total += productPrice;
        cartTotal.textContent = total.toFixed(2);
    });
});
