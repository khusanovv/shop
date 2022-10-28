const cart = document.querySelector(".shop-cart");
const imgApi = document.querySelector(".imgapi");

      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json() )
        .then((data2) =>  {
          data2.forEach((element) => {
            console.log(element.image);
            const pEl = document.createElement("p")
            const img = document.createElement("img")
            const div = document.createElement("div")
            console.log(img);
            img.src = element.image;
            img.alt = "Image"
            pEl.innerHTML = element.title;
            
            cart.appendChild(div)
            div.appendChild(img);
            div.appendChild(pEl);
            div.classList.add("cart__item")
           
          });
        });