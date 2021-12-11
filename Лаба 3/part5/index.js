function getPositionAtCenter(element) {
  let {top, left, width, height} = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2
  };
}

function getDistanceBetweenElements(a, b) {
 let aPosition = getPositionAtCenter(a);
 let bPosition = getPositionAtCenter(b);

 return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
}

const getColorComponent = (distance) =>
  -5.1 * distance + 510;

const setElectronsProps = () => {
  for (let electronElement of electronsMap.keys()) {
    electronElement.style.animationDuration =
      `${1 / electronsMap.get(electronElement).speed}s`
  }
}

const a = 50;
const b = 100;

function calculateY(x, i) {
  return (b * Math.sqrt(1 - ((x - a) * (x - a) / a / a)) * (i >= 50 ? 1 : -1))
}

function initMovingKeyframes() {
  let styleSheet = document.styleSheets[0];
  let keyframes = "@keyframes moving {";

  let x = 0;
  let y = 0;

  const step = a / 25;

  let sign = 1;

  for (let i = 0; i <= 100; i++) {
    console.log(x, y)
    let animationState = 
      `${i}% { animation-timing-function: linear; transform: translateX(${x}px) translateY(${y}px) }`

    keyframes += animationState;

    if (i == 50) {
      sign *= -1;
    }
    x += step * sign;
    y = calculateY(x, i);
    
  }

  keyframes += "}"

  styleSheet.insertRule(keyframes, styleSheet.length);
}

initMovingKeyframes();

let electronsMap = new Map();
let protonElement = document.getElementsByClassName("prot")[0];

function init() {
  let electron1Element = document.getElementsByClassName("sp1")[0];
  let electron2Element = document.getElementsByClassName("sp2")[0];
  let electron3Element = document.getElementsByClassName("sp3")[0];
  let electron4Element = document.getElementsByClassName("sp4")[0];

  let electron1Instance = new Electron(0.1);
  let electron2Instance = new Electron(0.05);
  let electron3Instance = new Electron(0.025);
  let electron4Instance = new Electron(0.0125);

  electronsMap
    .set(electron1Element, electron1Instance)
    .set(electron2Element, electron2Instance)
    .set(electron3Element, electron3Instance)
    .set(electron4Element, electron4Instance)

    setElectronsProps();
}

init();

function action() {
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (const electronElement of electronsMap.keys()) {
    let distance = 
      getDistanceBetweenElements(electronElement, protonElement);

    electronElement.style.backgroundColor = 
      `rgba(${getColorComponent(distance)}, 0, 0)`;

    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  protonElement.style.backgroundColor =
    `rgba(${getColorComponent(minDistance)}, ${getColorComponent(minDistance)}, 0)`;
}

setInterval(action, 100);