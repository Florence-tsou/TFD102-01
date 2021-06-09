// 發票選擇
var close = document.getElementById("close");
var open = document.getElementById("open");
var three = document.getElementById("three");
var invoice = document.getElementsByClassName("invoice");

let a = document.getElementsByClassName("a");
let c = document.getElementsByClassName("c");

close.addEventListener("click", function(){
  a[0].style.display = "none";
  c[0].style.display = "none";
  c[1].style.display = "none";
});

open.addEventListener("click", function(){
  a[0].style.display = "";
  // c[0].style["display"] = "";
  // c[1].style["display"] = "";
});

for(let i = 0; i < invoice.length; i++){
  invoice[i].addEventListener("click", function(){
    c[0].style.display = "none";
    c[1].style.display = "none";
  });
};
three.addEventListener("click", function(){
  c[0].style.display = "flex";
  c[1].style.display = "flex";
});


// *字號沒輸入時
var send = document.getElementById("send");

send.addEventListener("click", function(e){
  let write1 = document.getElementsByClassName("write1");
  for(let a = 0; a < write1.length; a++){
    if(c[a].style.display == "flex" && write1[a].value == ""){
      e.preventDefault();
      alert("統編及抬頭請確實填寫");
      break;
    };
  };

  let write = document.getElementsByClassName("write");
  for(let i = 0; i < write.length; i++){
    if(write[i].value == ""){
      e.preventDefault();
      alert("*字號欄位不可空白");
      break
    };
  };
});

