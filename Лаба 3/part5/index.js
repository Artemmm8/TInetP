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
  130 / distance * 60;

const setElectronsProps = () => {
  for (let electronElement of electronsMap.keys()) {
    electronElement.style.animationDuration =
      `${1 / electronsMap.get(electronElement).speed}s`
  }
}

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
      `rgba(${getColorComponent(distance)}, 34, 0)`;

    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  protonElement.style.backgroundColor =
    `rgba(${getColorComponent(minDistance)}, ${getColorComponent(minDistance)}, 0)`;
}

setInterval(action, 100);