// 數量加減、金額計算
var add = document.getElementById("plus");
var minus = document.getElementById("minus");
var abc = document.getElementById("abc");

let total = document.getElementsByClassName("total_money");
let price = document.getElementById("price");


add.addEventListener("click", function(){
  abc.value++;
  for(let i = 0; i < total.length; i++){
    let nn = parseInt(abc.value);
    let pp = parseInt(price.innerText);
    total[i].innerText = pp * nn;
  };
});

minus.addEventListener("click", function(){
  if(abc.value <= 1){
    abc.value = 1;
  }else{
    abc.value--;
    for(let i = 0; i < total.length; i++){
      let nn = parseInt(abc.value);
      let pp = parseInt(price.innerText);
      total[i].innerText = pp * nn;
    };
  }
});


// 刪除購物車內容
var garbage = document.getElementsByClassName("img");

for(let i = 0; i < garbage.length; i++){
  garbage[i].addEventListener("click", function(e){
    let d_item = e.target.closest("div.item");
    console.log(d_item);
    let q_del = confirm("確定刪除？");
    if(q_del){
      d_item.classList.add("-on");
      setTimeout(function(){
        d_item.remove();
      }, 1000);

    }
  });
}
