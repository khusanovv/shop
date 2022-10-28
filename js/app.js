const cart = document.querySelector(".shop-cart");
      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((data2) =>  {
          data2.forEach((element) => {
            console.log(element);

            // Create Element
            const pEl = document.createElement("h3"),
             desc = document.createElement("p"),
             img = document.createElement("img"),
             div = document.createElement("div"),
             btn = document.createElement("button");

            img.src = element.image;
            img.alt = "Image"
            pEl.innerHTML = "Price: " + element.price
            desc.innerHTML = "Desc: " + element.description.split("").splice(1, 70).join("") + "..."
            btn.innerHTML = "U"

            // console.log(element.description.split("").splice(1, 80).join(""));
            
            cart.appendChild(div);
            div.appendChild(img );
            div.appendChild(pEl);
            div.appendChild(desc)
            div.appendChild(btn)


            // Add class 
            div.classList.add("cart__item")
            desc.classList.add("desc")
           
          });
        });