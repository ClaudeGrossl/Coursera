function Calcular() {
	var i = Number (document.getElementById("nota1").value);
	var j = Number (document.getElementById("nota2").value);
	var k = Number (document.getElementById("nota3").value);
	var l = (i+j+k)/3;
	document.getElementById("media").value = l;
}
