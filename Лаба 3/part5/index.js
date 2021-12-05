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

const min_distance = getDistanceBetweenElements(
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
 
  let new_value1 = `${10 * (min_distance / distance_elec1)}s`
  let new_value2 = `${10 * (min_distance / distance_elec2)}s`
  let new_value3 = `${10 * (min_distance / distance_elec3)}s`
  let new_value4 = `${10 * (min_distance / distance_elec4)}s`
 
  document.getElementsByClassName("sp1")[0].style.animationDuration = new_value1
  document.getElementsByClassName("sp2")[0].style.animationDuration = new_value2
  document.getElementsByClassName("sp3")[0].style.animationDuration = new_value3
  document.getElementsByClassName("sp4")[0].style.animationDuration = new_value4
}

setInterval(action, 1000);