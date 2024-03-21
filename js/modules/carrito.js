const productsCart= JSON.parse(localStorage.getItem("productsInCart"));

const cartEmpty = document.querySelector(".empty__cart");
const cartList = document.querySelector("#cart__list");
const actions = document.querySelector("#actions");
const buyCart = document.querySelector("#buy__cart");

console.log(productsCart)
if(productsCart){
    cartEmpty.classList.add("disabled");
    buyCart.classList.add("disabled");
    cartList.classList.remove("disabled");
    actions.classList.remove("disabled");

    productsCart.innerHTML="";

    productsCart.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("cart__product");
        div.innerHTML=`
            <img class="cart__product__img" src="${product.imagen}" alt="">
            <div class="cart__product__tittle">
                <small>Nombre</small>
                <h3>${product.nombre}</h3>
            </div>
            <div class="cart__product__cant">
                <small>Cantidad</small>
                <p>${product.cantidad}</p>
            </div>
            <div class="cart__product__price">
                <small>Precio</small>
                <p>$${product.precio}</p>
            </div>
            <div class="cart__product__subtotal">
                <small>subtotal</small>
                <p>$${product.precio * product.cantidad}</p>
            </div>
            <button class="cart__product__delete" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
        `;

        productsCart.appe(div);
    })
}
else{

}