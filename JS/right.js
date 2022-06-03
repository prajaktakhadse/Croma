let a = ".see-more";
let b =".more";

//document.querySelectorAll(".more").addEventListener("click",seemore)
//document.querySelectorAll(".see-less").addEventListener("click",seeless)
function seemore(a,b){
    document.querySelector(a).style.display="block";
    document.querySelector(b).innerHTML=null;
}
function seeless(a,b){
    document.querySelector(a).style.display="none";
    document.querySelector(b).innerHTML="see more+";

}





var data = JSON.parse(localStorage.getItem("Prod"))
//console.log(data)


const appendData =(data) =>{
      let  container = document.getElementById("container");
      container.innerHTML = null;

      data.map(function(el){
          var div =  document.createElement("div");
          var hr = document.createElement("hr");
          hr.style.borderColor="#1d1d1d"
        //  var hr2 = document.createElement("hr");

          var sdiv =  document.createElement("div");
          var pdiv =  document.createElement("div");

       

          var compare = document.createElement("div");
          compare.setAttribute("id","comparebox")
          var input = document.createElement("input");
          input.type = "checkbox";
          input.setAttribute("class","checkbox");
          

          var label = document.createElement("label");
          label.innerText = "COMPARE";
         label.setAttribute("id","checkin")

          var p = document.createElement("p");
          p.innerText ="CONNECT TO STORE";
         
         compare.append(input,label,p)
          var price = document.createElement("p");
          price.innerText="₹" +el.price;
        //   price.style.marginTop="-2px";
        //   price.style.fontSize="25px";

          var cut_price = document.createElement("s");
          cut_price.innerText ="₹" + el.strikeoff;
        //   cut_price.style.fontSize="18px"

          var cutoff = document.createElement("div");
          cutoff.innerText = offoprice(el.price,el.strikeoff);
          cutoff.style.border=" 1px solid #1d1d1d";
         cutoff.style.fontSize = "12px";
         cutoff.style.height = "17px"

          var heart = document.createElement("i");
          heart.setAttribute("class", "fa-regular fa-heart")
          
          
          var cost = document.createElement("div");
          cost.setAttribute("id", "cost")

          cost.append(price, cut_price, cutoff)
         

          var pid = document.createElement("p");
          pid.innerHTML = el.Product_Id;
        //   pid.style.fontSize = "20px"

          var title = document.createElement("p");
          title.innerText =  el.title;
          title.setAttribute("id", "ProductT")
          title.addEventListener("click",function(){
          myFun(el)
          })

          var time = document.createElement("p");
          time.innerText = el.delivery;
          time.style.fontSize = "15px";


          var btn1 = document.createElement("button");
          btn1.innerText = "BUY NOW";
          btn1.setAttribute("id", "Buy");
          btn1.addEventListener("click",() =>{
              buynow(el)
          })

          var btn2 = document.createElement("button");
          btn2.innerText = "ADD TO CART";
          btn2.setAttribute("id", "addtoc");
          btn2.addEventListener("click",() =>{
            addtocart(el)
        })


          pdiv.append(title,pid,cost,compare,time,btn1,btn2);


          var pic = document.createElement("img");
          pic.src = el.image;
          sdiv.append(pic)

          div.append(sdiv, pdiv);
          container.append(div,hr)
      })
}

appendData(data);

var pushar=[];
function buynow(el){
    console.log(el);
    pushar.push(el)
    localStorage.setItem("fixed",JSON.stringify(pushar))
}

var add=[];
function addtocart(el){
    el.quant = 1 ;
    console.log(el);
    add.push(el)
    localStorage.setItem("added",JSON.stringify(add))
}


function offoprice(elprice,elstrikeoff){

    

    var divsion = Math.floor((+elprice/+elstrikeoff)*100);

    var per= 100-divsion;

    return per+"%" + " " + "OFF"
    
}




var sort = JSON.parse(localStorage.getItem("sort"))
function sorted(){
    var  s = document.getElementById("sort1")
    if(s.checked == true){
       // console.log("hi")
       appendData(sort)
       document.querySelector("#appendproducts").innerText = "Portable & Bluetooth Speakers";
       document.querySelector("#appendproducts").style.border ="1px solid #00e9bf";
       document.querySelector("#appendproducts").style.color ="#00e9bf";
       document.querySelector("#appendproducts").style.fontSize = "12px";

    }
    else{
        appendData(data)
        document.querySelector("#appendproducts").innerText = "";
        document.querySelector("#appendproducts").style.border ="none";
    }
}
function myFun(el){
  window.location.href = "productD.html"
}