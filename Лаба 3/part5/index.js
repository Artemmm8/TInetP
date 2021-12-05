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

const max_distance = getDistanceBetweenElements(
    document.getElementsByClassName("prot")[0],
    document.getElementsByClassName("sp1")[0]
  );

function action() {
  let distance_elec1 = getDistanceBetweenElements(
    document.getElementsByClassName("prot")[0],
    document.getElementsByClassName("sp1")[0]
  );

  let distance_elec2 = getDistanceBetweenElements(
    document.getElementsByClassName("prot")[0],
    document.getElementsByClassName("sp2")[0]
  );

  let distance_elec3 = getDistanceBetweenElements(
    document.getElementsByClassName("prot")[0],
    document.getElementsByClassName("sp3")[0]
  );

  let distance_elec4 = getDistanceBetweenElements(
    document.getElementsByClassName("prot")[0],
    document.getElementsByClassName("sp4")[0]
  );

  console.log(distance_elec1)
 
  let new_value = `${100 * (distance_elec1 / max_distance)}s`
  
  document.getElementsByClassName("sp1")[0].style.animationDuration = new_value
}

setInterval(action, 1000);