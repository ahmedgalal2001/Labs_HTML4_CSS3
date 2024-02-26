let canvas = document.getElementById("canvas");
var line = canvas.getContext('2d');
let end_interval = null;
let step = 10;
let xAxis = 2 * step;
let yAxis = step;
line.beginPath();
line.lineWidth = 5;
line.moveTo(0, 0);




function increase_length_line() {
    if (xAxis <= canvas.width && yAxis <= canvas.height) {
        line.lineTo(xAxis, yAxis);
        line.strokeStyle = "brown";
        line.stroke();
        xAxis += 2 * step;
        yAxis += step;
        console.log(xAxis);
    }
    else {
        alert("animation end.");
        clearInterval(end_interval);
    }
}

end_interval = setInterval(increase_length_line, 1000);