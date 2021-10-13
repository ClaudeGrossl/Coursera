
function myFunction() {
  var x = document.createElement("SCRIPT");
  var t = document.createTextNode("alert('Hello World!')");
  x.appendChild(t);
  document.body.appendChild(x);
}
