

// Content-Type text/html implementam a interface HTMLDocument

// Document.getElementById(String id)
    // Returns an object reference to the identified element.
	
// Document.getElementsByClassName(String className)
    // Returns a list of elements with the given class name.
	
// Document.getElementsByTagName(String tagName)
    // Returns a list of elements with the given tag name.
	
// Document.getElementsByTagNameNS(String namespace, String tagName) (en-US)
    // Returns a list of elements with the given tag name and namespace.
	
// Document.getElementsByName(String name)
    // Returns a list of elements with the given name.
	
// https://gist.github.com/willurd/5720255



function Calcular() {
	var i = Number (document.getElementById("nota1").value);
	var j = Number (document.getElementById("nota2").value);
	var k = Number (document.getElementById("nota3").value);
	var l = (i+j+k)/3;
	document.getElementById("media").value = l;
	//alert( l );
}
// var sair = confirm();
// if (sair == 1) {

// 	window.location = "https://google.com.br";
// }

//var nome = prompt();
//alert("voce digitou: " + nome);
//document.write(nome);
