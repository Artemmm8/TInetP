//  сдвиг слоя на вычисленный шаг вправо
let timerCircle = 10;
let timerLine = 10;
//  начальные установки для движения по окружности
let angle = 0;
const radius = 50;
const xbegin = 80;
const ybegin = 80;
const d = document;

let p1; // текущая координата слоя
let sp1; // приращение при движении слоя
let Circle = false;
let Line = false;

/// //////////
function stoppedCircle() {
  clearInterval(timerCircle);
}
function stoppedLine() {
  clearTimeout(timerLine);
}
function stopCircle() {
  Circle = true;
}

function stopLine() {
  Line = true;
}
/// ///////////

// установка начальных параметров перемещения слоя
function initLine() {
  const l1 = document.getElementById('l1');
  Line = false;
  p1 = 24;
  sp1 = 1;
  l1.style.left = '24px';
}

//   движение изображения-спутника по окружности
function moveImage() {
  const
    rad = angle * Math.PI / 180;
    //  вычисление координаты следующего положения изображения
  d.myimage.style.left = `${xbegin + radius * Math.sin(rad)}px`;
  d.myimage.style.top = `${ybegin + radius * Math.cos(rad)}px`;
  angle += 1;
  if (angle >= 360) angle = 0;
  if (Circle === true) stoppedCircle();
}

function succLine() {
  const l1 = document.getElementById('l1');
  sp1 = 1;
  p1 += sp1;
  if (p1 > 700) p1 = 24;
  l1.style.left = `${p1}px`;
  clearTimeout(timerLine);
  timerLine = setTimeout(succLine, 200);
  if (Line == true) stoppedLine();
}

function initCircle() {
  Circle = false;
  clearInterval(timerCircle);
  timerCircle = setInterval(moveImage, 10);
}
