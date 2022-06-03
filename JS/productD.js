var dataMobile = JSON.parse(localStorage.getItem("added"));
// console.log(dataMobile);
const appendProduct=(dataMobile)=>{
    // var container=document.getElementById("")
    var cart =document.querySelector(".sp-add-to-cart")
    dataMobile.map(function(elem){
        
        var avtar = document.getElementById("sp-image")
        avtar.setAttribute("src", elem.image);
        
        var name = document.getElementById("sp-product-name");
        // name.setAttribute("id","name")
        name.innerText = `${elem.title}, `
        
        var price = document.getElementById("sp-price-box")
        // price.setAttribute("id","price")
        price.innerText =   `₹${elem.price}.00 `

        var stP= document.getElementById("sp-price-striked")
        stP.innerText =` Discount ₹${elem.strikeoff}.00`
        
        cart.addEventListener("click",function() {
            cart.innerText="Go to Cart"
          myCart(elem)
        })
        
        

    })
}
var arr=[]
appendProduct(dataMobile);
function myCart(elem) {
 arr.push(elem)
 console.log(arr)
 localStorage.setItem('cart',JSON.stringify(arr))
}
function openBox(el) {
    let tempBox = document.querySelector(el);
    let btn = document.querySelector(el + "Btn");
    if (tempBox.classList.contains("off")) {
      btn.classList.add("rotate");
      tempBox.classList.remove("off");
    } else {
      tempBox.classList.add("off");
      btn.classList.remove("rotate");
    }
  }