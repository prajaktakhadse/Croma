
var dataLights = JSON.parse(localStorage.getItem("added"));
console.log(dataLights);


displayData(dataLights);
function displayData(dataLights) {
  document.querySelector("#container").innerHTML=null
    document.querySelector("#containerCont").innerHTML=null

  
  dataLights.map(function (elem, index) {
    var div = document.createElement("div");
    
    var section = document.createElement("section");
    
    var avtar = document.createElement("img");
    avtar.setAttribute("id", "dimg");
    avtar.setAttribute("src", elem.image);

    var name = document.createElement("h5");
    name.setAttribute("id","name")
    name.innerText = `${elem.title}, `
    
    var price = document.createElement("h4");
    price.setAttribute("id","price")
    price.innerText = "₹"+  elem.price;

    var quant = document.createElement("h3");
    quant.innerText = "Quantity:" + elem.quant;
    quant.setAttribute("id","h3")

    var btn2 = document.createElement("button");
    btn2.innerText = "-";
   
    var btn = document.createElement("button");
    btn.innerText = "+";

     btn2.addEventListener("click", function () {
      decreaseQuant(index);
    });

    btn.addEventListener("click", function () {
      increaseQuant(index);
    });

        var remove= document.createElement("button")
    remove.setAttribute("class","removeItem")
    remove.innerHTML = "Remove";
    remove.addEventListener("click", function () {
     
       add(index)
    })



    section.append(name,price,quant,btn,btn2,remove);
    document.querySelector("#containerCont").append(section);
    
    div.append(avtar);
    document.querySelector("#container").append(div);
  });
}

function showTotal() {
  var total = dataLights.reduce(function (acc, elem) {
    return (acc += elem.price * elem.quant);
  }, 0);
  document.getElementById("total").textContent = "₹" + total;
  // document.getElementById("discount").textContent = `Total amount to pay ₹ ${total}`
  localStorage.setItem("total", JSON.stringify(total));
}

showTotal();

function decreaseQuant(index) {
  // console.log(index);
  document.querySelector("#container").innerHTML=null
  dataLights[index].quant--;
  console.log(dataLights);
  localStorage.setItem("cartItems", JSON.stringify(dataLights));
  displayData(dataLights); // this will show data when we move from men to cart//
  showTotal();
}

function increaseQuant(index) {
  // console.log(index);
  document.querySelector("#container").innerHTML=null
  dataLights[index].quant++;
  console.log(dataLights);
  localStorage.setItem("cartItems", JSON.stringify(dataLights));
  displayData(dataLights); // this will show data when we move from men to cart//
  showTotal();
}
function add(index){
  // container.innerHTML = null
  document.querySelector("#container").innerHTML=null
  dataLights.splice(index,1)
  showTotal()
  displayData(dataLights)
  localStorage.setItem("cartArr",JSON.stringify(cart))
  
}
function redirect(){
  window.location.href = "checkout.html"
}