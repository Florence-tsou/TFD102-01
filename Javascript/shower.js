var img = document.getElementsByClassName("click_img");
var open = document.getElementsByClassName("open");


for(let x = 0; x < img.length; x++){
  img[x].addEventListener("click", function (){
    if(open[x].style["display"] == "block"){
      open[x].style["display"] = "none";
    }else{
      open[x].style["display"] = "block";
    };
  });
};