
var slider = document.getElementById("myRange");
var output = document.getElementById("rs-bullet");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}