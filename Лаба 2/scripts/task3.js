function insert(num) {
  var exp = document.form.textView.value;
  if (document.form.textView.value == "0") {
    document.form.textView.value = "";
  }
  
    document.form.textView.value = document.form.textView.value + num;
  
}
function equal() {
  var exp = document.form.textView.value;
  if (exp) {
    if (document.form.textView.value != eval(document.form.textView.value)) {
      document.form.textView.value = eval(document.form.textView.value);
      document.getElementById('last_value').innerHTML = exp + "=" + document.form.textView.value
    }
    else {
      document.getElementById('last_value').innerHTML = document.form.textView.value
    }
  }
}
function c() {
  document.form.textView.value = "0";
}
function sign() {
  document.form.textView.value = eval(document.form.textView.value) * (-1);
}
function toPercent() {
  document.form.textView.value = eval(document.form.textView.value)/100;
}
function decrement() {
  document.form.textView.value = eval(document.form.textView.value) - 1;
}
function increment() {
  document.form.textView.value = eval(document.form.textView.value) + 1;
}
function backSpace() {
  if (document.form.textView.value.length-1 != 0) {
    var exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length-1);
  }
  else {
  document.form.textView.value = "0";
  }
}