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
 
  document.getElementsByClassName("sp2")[0].style.backgroundColor = `rgba(${130 / distance_elec2 * 60}, 34, 0)`;
  document.getElementsByClassName("sp3")[0].style.backgroundColor = `rgba(${130 / distance_elec3 * 60}, 34, 0)`;
  document.getElementsByClassName("sp4")[0].style.backgroundColor = `rgba(${130 / distance_elec4 * 60}, 34, 0)`;
  document.getElementsByClassName("sp1")[0].style.backgroundColor = `rgba(${130 / distance_elec1 * 60}, 34, 0)`;

  let min1 = distance_elec1 < distance_elec2 ? distance_elec1 : distance_elec2;
  let min2 = distance_elec3 < distance_elec4 ? distance_elec3 : distance_elec4;

  let min_distance = min1 < min2 ? min1 : min2;
  console.log(min_distance)

  document.getElementsByClassName("prot")[0].style.backgroundColor = `rgba(${130 / min_distance * 60}, ${130 / min_distance * 60}, 0)`;
}

setInterval(action, 100);