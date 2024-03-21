// PRODUCTOS
const products = [
    // Abrigos
    {
        "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Azul'",
        "imagen": "/storage/img/abrigos/01.webp",
        "precio": 93900,
        "id": "abrigo-01",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Negro'",
        "imagen": "/storage/img/abrigos/02.webp",
        "precio": 93900,
        "id": "abrigo-02",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Blanco'",
        "imagen": "/storage/img/abrigos/03.webp",
        "precio": 93900,
        "id": "abrigo-03",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Chaqueta Hombre Cuero Sintético",
        "imagen": "/storage/img/abrigos/04.webp",
        "precio": 102000,
        "id": "abrigo-04",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    {
        "nombre": "Calidad Chaqueta Hombre Algodon Colombiano Buso Ropa Buzos",
        "imagen": "/storage/img/abrigos/05.webp",
        "precio": 77900,
        "id": "abrigo-05",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
    },
    // Camisetas
    {
        "nombre": "Camiseta De Compresión En Licra Uv Slim.",
        "imagen": "/storage/img/camisetas/01.webp",
        "precio": 38000,
        "id": "Camiseta 01",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camiseta Tipo Polo Color Dama Mujer.",
        "imagen": "/storage/img/camisetas/02.webp",
        "precio": 26255,
        "id": "Camiseta 02",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre.",
        "imagen": "/storage/img/camisetas/03.webp",
        "precio": 29900,
        "id": "Camiseta 03",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camisetas Bandas De Rock Metal Heavy Riffs.",
        "imagen": "/storage/img/camisetas/04.webp",
        "precio": 32850,
        "id": "Camiseta 04",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    {
        "nombre": "Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer",
        "imagen": "/storage/img/camisetas/05.webp",
        "precio": 29900,
        "id": "Camiseta 05",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        }
    },
    // Pantalones
    {
        "nombre": "Pantalon En Dril Licrado Para Hombre.",
        "imagen": "/storage/img/pantalones/01.webp",
        "precio": 58900,
        "id": "Pantalón 01",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalón Camuflado Hermoso.",
        "imagen": "/storage/img/pantalones/02.webp",
        "precio": 104405,
        "id": "Pantalón 02",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalón Jogger Cargo, Táctico, Militar.",
        "imagen": "/storage/img/pantalones/03.webp",
        "precio": 104500,
        "id": "Pantalón 03",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalón Jeans De Colores Entubado Para Hombre.",
        "imagen": "/storage/img/pantalones/04.webp",
        "precio": 61750,
        "id": "Pantalón 04",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        }
    },
    {
        "nombre": "Pantalon Camuflado, De Bolsillos 100% Dreal",
        "imagen": "/storage/img/pantalones/05.webp",
        "precio": 89990,
        "id": "Pantalón 05",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        }
    }
];

const productGallery = document.querySelector("#product__gallery");
const buttonsMenu = document.querySelectorAll(".category__button");
const mainTitlle = document.querySelector("#main__tittle");
let addButtons = document.querySelectorAll(".product__add");
const countingCart = document.querySelector("#counting__cart")



function uploadProducts(chooseProduct){

    productGallery.innerHTML="";
    
    chooseProduct.forEach(product=>{
        const div = document.createElement("div");
        div.classList.add("product")
        div.innerHTML = `
            <img class="product__img" src="${product.imagen}" alt="">
            <div class="product__description">
                <h3 class="product__tittle">${product.nombre}</h3>
                <p class="product__cost">$${product.precio}</p>
                <button class="product__add" id="${product.id}">Agregar</button>
            </div>
        `;
        productGallery.append(div);
    })
    updateButtonsAdd();
}

uploadProducts(products);

buttonsMenu.forEach(button => {
    button.addEventListener("click",(e) =>{
        buttonsMenu.forEach(button => button.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "all") {
            const category = products.find(product => product.categoria.id === e.currentTarget.id)
            mainTitlle.innerText = category.categoria.nombre;
            const chooseProduct = products.filter(product => product.categoria.id === e.currentTarget.id);
            uploadProducts(chooseProduct);
        }
        else{
            mainTitlle.innerText = "Todos los productos."
            uploadProducts(products);
        }
        
    })
})

function updateButtonsAdd() {
    addButtons=document.querySelectorAll(".product__add");
    
    addButtons.forEach(button => {
        button.addEventListener("click", addCart)
    })
}

// let productsCart;
// const productsCartLS= JSON.parse(localStorage.getItem("productsInCart"));
// if (productsCart){
//     productsCart=productsCartLS;
//     updateCounting();
// }
productsCart=[];

function addCart(e) {
    const idButton = e.currentTarget.id;
    const productAdd = products.find(product => product.id === idButton);
    if (productsCart.some(product => product.id === idButton)){
        const index = productsCart.findIndex(product => product.id === idButton);
        productsCart[index].cantidad++;
    }
    else{
        productAdd.cantidad = 1
        productsCart.push(productAdd);
    }
    updateCounting();
    
    localStorage.setItem("productsInCart", JSON.stringify(productsCart))
}
function updateCounting(){
    let newCounting = productsCart.reduce((acc, product) => acc + product.cantidad, 0);
    countingCart.innerText = newCounting;
}