let canvas = document.getElementById("canvas");
var circle = canvas.getContext('2d');
const canvas_width = canvas.width / 2;
const canvas_height = canvas.height / 2;
const circle_parent = 60;
const circle_child = 30;

// circle 1

var grd = circle.createRadialGradient(canvas_width, canvas.height / 2, 30, canvas_width, canvas_height, circle_parent);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'white');

circle.beginPath();
circle.arc(canvas_width, canvas_height, circle_parent, 0, 2 * Math.PI);
circle.fillStyle = grd;
circle.fill();
circle.closePath();

// circle 2

var grd = circle.createRadialGradient(canvas_width, canvas_height, 0, canvas_width, canvas_height, 40);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'white');

circle.beginPath();
circle.arc(canvas_width, canvas_height, circle_child, 0, 2 * Math.PI);
circle.fillStyle = grd;
circle.fill();
circle.closePath();

// text
var text = "N";
var font_size = 50;
circle.font = font_size + "px Arial";
circle.fillStyle = 'white';

var text_width = circle.measureText(text).width;
var text_x = canvas_width - text_width / 2;
var text_y = canvas_height + font_size / 4;

circle.fillText(text, text_x, text_y);
