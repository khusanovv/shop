let api = "https://fakestoreapi.com/products"
let options = {
    method: "DELETE"
    
}
const cart = document.querySelector(".shop-cart");
      fetch("https://fakestoreapi.com/products" )
        .then((data) => data.json())
        .then((data2) =>  {
          data2.forEach((element) => {
            // console.log(element);

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
            
            div.innerHTML = `<button data-target-id="${element.id}">delete</button>`
            div.appendChild(img );
            div.appendChild(pEl);
            div.appendChild(desc)
            
            

            // function myFunction() {
            //     let text = "Press a button!\nEither OK or Cancel.";
            //     if (confirm(text) == true) {
            //       text = "Cart o`chirildi";
            //     } else {
            //       text = "You canceled!";
            //     }
            //     document.getElementById("demo").innerHTML = text;
            //   }


            // Add class 
            div.classList.add("cart__item")
            desc.classList.add("desc")

            // Delete
            
           
            
            
        })
        const shopCart = document.querySelector(".shop-cart");
            shopCart.addEventListener('click', (e)=>{
              // console.log(e.target);
              if(e.target.hasAttribute("data-target-id")){
                  // console.log(e.target.dataset.productId);
                  const elementId = e.target.dataset.targetId
                //   console.log(elementId);
                  fetch(`https://fakestoreapi.com/products/${elementId}` ,{
                      method: "DELETE"
                  })
                  .then(res => console.log(res.json()))
              }
          });
        });