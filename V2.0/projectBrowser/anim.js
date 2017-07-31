var colors = ["#cd6155", "#ec7063", "#af7ac5", "#a569bd", "#5499c7",
  "#5dade2", "#48c9b0", "#45b39d", "#52be80", "#58d68d", "#f4d03f",
  "#f5b041", "#eb984e", "#dc7633", "#f0f3f4", "#cacfd2", "#aab7b8",
  "#99a3a4", "#5d6d7e", "#566573"];
var num = ["un", "deux", "trois", "quatre", "cinq", "six", "sept",
  "huit", "neuf", "dix"];

var r = 3; //Raw
var c = 4; //Collumn

for(var i = 0; i<r; i++) {
  var raw = document.getElementById(num[i]);
  var element = raw.firstChild;
  for (var j = 0; j<c; j++) {
    element = element.nextSibling;
    element.onclick = function() {mouseClick(this)};
    element.onmouseover = function() {mouseOver(this)};
    element.onmouseout = function() {mouseOut(this)};
    var msg = element.firstChild.nextSibling;

    element = element.nextSibling;
  }
}
function mouseClick(anchor) {
var index = Math.floor((Math.random() * colors.length));
var msg = anchor.firstChild.nextSibling;
msg.onmouseout = function(){mouseOutMsg(this)};
msg.onclick = function(){redirect(anchor)};
msg.style.height = "100%";
msg.style.backgroundColor = "white";
msg.style.opacity="0.7";
anchor.style.cursor = "pointer";
}
function mouseOver(anchor) {
var index = Math.floor((Math.random() * colors.length));
var msg = anchor.firstChild.nextSibling;
msg.nextSibling.nextSibling.style.backgroundColor = colors[index];
anchor.style.cursor = "pointer";
}
function mouseOut(anchor) {
var msg = anchor.firstChild.nextSibling;
msg.nextSibling.nextSibling.style.backgroundColor = "#8e8e8e";
}
function mouseOutMsg(anchor) {
anchor.style.height = "0%";
}
function redirect(anchor) {
  var link = anchor.lastElementChild.lastElementChild.innerHTML;
  document.location.href = link;
}
