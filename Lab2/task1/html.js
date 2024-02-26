var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var grd1 = context.createLinearGradient(0, 0, 0, 60);
grd1.addColorStop(0, "green");
grd1.addColorStop(1, "white");

context.beginPath();
context.fillStyle = grd1;
context.fillRect(30, 10, 250, 50);
context.closePath();

var grd2 = context.createLinearGradient(0, 0, 0, 200);
grd2.addColorStop(0, "blue");
grd2.addColorStop(1, "white");

context.beginPath();
context.fillStyle = grd2;
context.fillRect(30, 70, 250, 50);
context.closePath();


var grd3 = context.createLinearGradient(0, 45, 0, 80);
grd3.addColorStop(0, "black");
grd3.addColorStop(1, "rgba(0,0,0,0)");

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = grd3;
context.strokeRect(100, 40, 100, 50);
context.closePath();
