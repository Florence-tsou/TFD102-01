var close = document.getElementById("close");
var open = document.getElementById("open");
var three = document.getElementById("three");
var invoice = document.getElementsByClassName("invoice");

let a = document.getElementsByClassName("a");
let c = document.getElementsByClassName("c");

close.addEventListener("click", function(){
  a[0].style["display"] = "none";
  c[0].style["display"] = "none";
  c[1].style["display"] = "none";
});

open.addEventListener("click", function(){
  a[0].style["display"] = "";
  // c[0].style["display"] = "";
  // c[1].style["display"] = "";
});

for(i = 0; i < invoice.length; i++){
  invoice[i].addEventListener("click", function(){
    c[0].style["display"] = "none";
    c[1].style["display"] = "none";
  });
};
three.addEventListener("click", function(){
  c[0].style["display"] = "flex";
  c[1].style["display"] = "flex";
});

