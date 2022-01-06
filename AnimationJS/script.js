var nucleus = new Image();
var electron = new Image();

function init(){
  nucleus.src = "nucleus.png";
  electron.src = "electron.png";
  setInterval(draw, 100);
  //window.requestAnimationFrame(draw);
}
let i = 15;
function draw1() {
  var ctx = document.getElementById("canvas").getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas
  ctx.save();

  if (i >= 300) {
    i = 15;
  }
ctx.translate(i++, i++);
  ctx.drawImage(electron,-12,-12);

ctx.restore();
  ctx.beginPath();
  ctx.ellipse(150, 150, 50, 80, Math.PI / 4, 0, 2 * Math.PI); // Earth orbit
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(150, 150, 50, 80, 3 * Math.PI / 4, 0, 2 * Math.PI); // Earth orbit
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(150, 150, 50, 80, Math.PI, 0, 2 * Math.PI); // Earth orbit
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(150, 150, 50, 80, Math.PI / 2, 0, 2 * Math.PI); // Earth orbit
  ctx.stroke();

  ctx.drawImage(nucleus,0,0,300,300);

  window.requestAnimationFrame(draw);
}

//init();

function test() {
  window.requestAnimationFrame(draw)
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  //ctx.rotate(Math.PI / 4);

  ctx.beginPath()
  ctx.arc(0, 0, 20, 0, 2 * Math.PI, true);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(150, 150, 50, 80, Math.PI / 4, 0, 2 * Math.PI);
  ctx.stroke();

  //window.requestAnimationFrame(draw);
}

setTimeout(draw, 100);