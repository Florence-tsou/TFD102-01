
// 數量增減
var add = document.getElementById("plus");
var minus = document.getElementById("minus");
var abc = document.getElementById("abc");

add.addEventListener("click", function(){
  abc.value++;
});

minus.addEventListener("click", function(){
  if(abc.value <= 1){
    abc.value = 1;
  }else{
    abc.value--;
  }
});


// 切換選單
var nioi = document.getElementById("nioi");
var use = document.getElementById("use");
var text = document.getElementById("text");
var use_method = document.getElementById("use_method");

function open(item, item2, item3, item4){
  item.addEventListener("click", function(e){
    e.preventDefault();
    e.target.classList.add("-on");
    item2.classList.remove("-on");
    item3.style.display = "block";
    item4.style.display = "none";
  });
}

open(nioi, use, text, use_method);
open(use, nioi, use_method, text);