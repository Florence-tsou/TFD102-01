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


var nioi = document.getElementById("nioi");
var use = document.getElementById("use");