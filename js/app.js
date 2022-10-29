
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
                h3 = document.createElement("h2")
                

            img.src = element.image;
            img.alt = "Image"
            h3.textContent = element.category
            pEl.innerHTML = "Price: " + element.price
            desc.innerHTML = `<b>Desc: </b> ${element.description.split("").splice(1, 70).join("") + "..."}`
            

            // console.log(element.description.split("").splice(1, 80).join(""));
            
            cart.appendChild(div);
            
            div.innerHTML = `<button class="cart__btn" data-target-id="${element.id}">delete</button>`
            div.appendChild(img );
            div.appendChild(h3)
            div.appendChild(pEl);
            div.appendChild(desc)
            
            
            // Add class 

            div.classList.add("cart__item")
            desc.classList.add("desc")

            // Filter
            const menBtn = document.querySelectorAll(".filter-btn__item")
            menBtn[0].addEventListener('click', ()=>{
              
            })
            

            // Delete
             
        })
        const shopCart = document.querySelector(".shop-cart");
            shopCart.addEventListener('click', (e)=>{

              if(confirm(e.target.hasAttribute("data-target-id"))){
                  const elementId = e.target.dataset.targetId
                //   console.log(elementId);
                  fetch(`https://fakestoreapi.com/products/${elementId}` ,{
                      method: "DELETE"
                  }) 
                  .then(res => console.log(res.json()) 
                  
                  )
              }
          });
        });

