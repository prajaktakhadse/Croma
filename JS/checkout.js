// document.querySelector("#checkout").addEventListener("click",myForm);
function myForm(){
    // event.preventDefault();
    var cardNum=document.querySelector("#Card_no").value;
    var cardExp=document.querySelector("#EXP").value;
    var cV=document.querySelector("#CVV").value;
    console.log(cardExp,cardNum,cV)
// modal start
var modal1 = document.getElementById("myModal1");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// modal ended
    if(cardExp=="03/30"&&cardNum==647786686158&&cV==123)
    {
        let tID = setTimeout(function () {
            window.location.href="index.html"
            window.clearTimeout(tID);	// clear time out.
        }, 2000);
        modal1.style.display = "block";
        // span.onclick = function() {
        //     modal.style.display = "none";
        //   }

    }
    else{
 
       modal.style.display = "block";
       span.onclick = function() {
        modal.style.display = "none";
      }
      
    }
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
cartChange();
function cartChange() {
var totalCost = JSON.parse(localStorage.getItem("total"));
document.querySelector("#price").innerHTML = `₹${totalCost}.00`;
document.querySelector("#totalCost").innerHTML = `₹${totalCost}.00`;
}