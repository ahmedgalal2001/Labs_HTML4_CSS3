let range_red = document.getElementById("range-red");
let range_green = document.getElementById("range-green");
let range_blue = document.getElementById("range-blue");
let text = document.querySelector("h1");
function change_color_text(){
  text.style.color = `rgb(${range_red.value}, ${range_green.value}, ${range_blue.value})`;
}