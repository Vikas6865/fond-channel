// slider code*******************
const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// slider code end*************

let displayData = document.getElementById("product-items")
let displayData2 = document.getElementById("12-product-items")
let products = JSON.parse(localStorage.getItem("cart")) || [];
let API = "All Data/primary.json"
fetchData(API)
function fetchData(API){
    fetch(API)
    .then((res)=>{
        return res.json()
    })
    .then((Data)=>{
        console.log(Data.data)
        appendData(Data.data)
        // console.log(card)

    })
}


function appendData(items){
    displayData.innerHTML = null
    items.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class","card")
        card.setAttribute("id","card")

        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("class","img")
        imgdiv.setAttribute("id","img")

        let image = document.createElement("img")
        image.setAttribute("src",element.image)

        let infodiv = document.createElement("div")
        infodiv.setAttribute("class","info")
        infodiv.setAttribute("id","info")

        let descdiv = document.createElement("div")
        descdiv.setAttribute("class","desc")
        descdiv.setAttribute("id","desc")

        let desc = document.createElement("p")
        desc.innerText = element.description

        let pricediv = document.createElement("div")
        pricediv.setAttribute("class","price")
        pricediv.setAttribute("id","price")

        let price = document.createElement("h3")
        price.innerText = "₹"+element.price
        
        let mrp = document.createElement("h3")
        mrp.innerText = "₹"+element.mrp
        let discount = document.createElement("h4")
        discount.innerText = `${element.Discount} off`

        let primediv = document.createElement("div")
        primediv.setAttribute("class","prime")

        let primeimg = document.createElement("img")
        primeimg.setAttribute("src","https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg")
        let primeinfo = document.createElement("p")
        primeinfo.innerText = `₹${element.price-150} for Premium Members`

        let btndiv = document.createElement("div")
        btndiv.setAttribute("class","btn")
        btndiv.setAttribute("id","btn")

        btndiv.addEventListener("click", () => {
            let flag = true;
            for (let item in products) {
              if (products[item].id == element.id) {
                flag = false;
              }
            }
            if (flag == true) {
              let protienMass = {...element};
              products.push(protienMass);
              localStorage.setItem("cart", JSON.stringify(products));
              alert("Product added to cart 😊");
            } else {
              alert("Product already in cart 😀");
            }
          });




        let cartimg = document.createElement("img")
        cartimg.setAttribute("src","All images/shopingCart.png")
        let text = document.createElement("p")
        text.innerText = "Add To Cart"


        btndiv.append(cartimg,text)
        primediv.append(primeimg,primeinfo)
        descdiv.append(desc)
        pricediv.append(price,mrp,discount)
        infodiv.append(descdiv,pricediv,primediv,btndiv)
        imgdiv.append(image)
        card.append(imgdiv,infodiv)
        displayData.append(card)
        
    });
    
}




fetchData2(API)
function fetchData2(API){
    fetch(API)
    .then((res)=>{
        return res.json()
    })
    .then((Data)=>{
        console.log(Data.data2)
        appendData2(Data.data2)
        // console.log(card)

    })
}


function appendData2(items){
    // displayData.innerHTML = null
    items.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class","card")
        card.setAttribute("id","card")

        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("class","img")
        imgdiv.setAttribute("id","img")

        let image = document.createElement("img")
        image.setAttribute("src",element.image)

        let infodiv = document.createElement("div")
        infodiv.setAttribute("class","info")
        infodiv.setAttribute("id","info")

        let descdiv = document.createElement("div")
        descdiv.setAttribute("class","desc")
        descdiv.setAttribute("id","desc")

        let desc = document.createElement("p")
        desc.innerText = element.description

        let pricediv = document.createElement("div")
        pricediv.setAttribute("class","price")
        pricediv.setAttribute("id","price")

        let price = document.createElement("h3")
        price.innerText = "₹"+element.price
        
        let mrp = document.createElement("h3")
        mrp.innerText = "₹"+element.mrp
        let discount = document.createElement("h4")
        discount.innerText = `${element.Discount} off`

        let primediv = document.createElement("div")
        primediv.setAttribute("class","prime")

        let primeimg = document.createElement("img")
        primeimg.setAttribute("src","https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg")
        let primeinfo = document.createElement("p")
        primeinfo.innerText = `₹${element.price-150} for Premium Members`

        let btndiv = document.createElement("div")
        btndiv.setAttribute("class","btn")
        btndiv.setAttribute("id","btn")

        btndiv.addEventListener("click", () => {
            let flag = true;
            for (let item in products) {
              if (products[item].id == element.id) {
                flag = false;
              }
            }
            if (flag == true) {
              let protienMass = {...element};
              products.push(protienMass);
              localStorage.setItem("cart", JSON.stringify(products));
              alert("Product added to cart 😊");
            } else {
              alert("Product already in cart 😀");
            }
          });



        let cartimg = document.createElement("img")
        cartimg.setAttribute("src","All images/shopingCart.png")
        let text = document.createElement("p")
        text.innerText = "Add To Cart"


        btndiv.append(cartimg,text)
        primediv.append(primeimg,primeinfo)
        descdiv.append(desc)
        pricediv.append(price,mrp,discount)
        infodiv.append(descdiv,pricediv,primediv,btndiv)
        imgdiv.append(image)
        card.append(imgdiv,infodiv)
        displayData2.append(card)
        
    });
    
}
