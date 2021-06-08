// 漢堡選單
var hamburger = document.getElementById("hamburger");
var open_1 = document.getElementById("hamburger_open");


hamburger.addEventListener("click", function(){
  open_1.classList.toggle("test");
});



// 購物車刪除

var del_btn = document.getElementsByClassName("garbage");

for(let i = 0; i < del_btn.length; i++){
  del_btn[i].addEventListener("click", function(e){
    e.target.closest("tr.cart_list_item").classList.add("zz");
    setTimeout(function(){
      e.target.closest("tr.cart_list_item").remove();
    }, 1000);
  });
};
