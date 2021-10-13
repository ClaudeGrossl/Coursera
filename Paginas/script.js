
function newScript() {
  var x = document.createElement("script");
  var t = document.createTextNode("alert('Hello World!')");
  x.appendChild(t);
  document.body.appendChild(x);
}
function newParagrafo() {
    var x = document.createElement("P");
    var t = document.createTextNode("Novo paragrafo!");
    x.appendChild(t);
    document.body.appendChild(x);
  }
function addElemento () {
    // cria um novo elemento div
    // e dá à ele conteúdo
    var divNova = document.createElement("DIV");
    var conteudoNovo = document.createTextNode("Nova div!");
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
  }