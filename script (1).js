var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");
var button = document.getElementById("enter1");
var input = document.querySelector("input.value");

function setGradient(){
  body.style.background =
   "linear-gradient(to right, "
   + color1.value
   + ", "
   + color2.value
   + ")";

    css.textContent = body.style.background + ";";
}

function randomColBtn1(){
  var rand =Math.floor(Math.random() * 1000000 +1);

color1.value = "#" + rand;

 setGradient();
}

function randomColBtn2(){
  var rand1 =Math.floor(Math.random() * 1000000 + 1);

color2.value = "#" + rand1;

setGradient();

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

enter.addEventListener("click", randomColBtn1);

enter1.addEventListener("click", randomColBtn2);


// Initial css linear-gradient property on page load

css.textContent = body.style.background =
   "linear-gradient(to right, "
   + color1.value
   + ", "
   + color2.value
   + ")";
