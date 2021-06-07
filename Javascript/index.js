// 推薦清單切換

var push = document.getElementsByClassName("push");
var push_item = document.getElementsByClassName("pushitem_pic");
// console.log(push_item);

for(let i = 0; i < push.length; i++){
  push[i].addEventListener("click", function(e){
    e.preventDefault();
    
    for(let b = 0; b < push.length; b++){
      push[b].classList.remove("-on");
    };
    push[i].classList.add("-on");

    for(let a = 0; a < push_item.length; a++){
      push_item[a].style.display = "none";
    };
    push_item[i].style.display = "flex";
  });
};


