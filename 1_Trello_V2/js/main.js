//EJERCICIO GUIADO, analizando código
//Creacion de nodos comprendido.
//Uso de addEventListener comprendido al 60%
//Uso de demas metodos relacionados a eventos comprendido al 40%
//Animo por seguir aprendiendo al 100%, adoro la magia del código
//Variables de los elementos HTML
var tablero = document.getElementById("tablero");
var lista = document.getElementById("lista");
var anadirLista = document.getElementById("anadirLista");
var formulario = document.getElementById("formulario");
//mi primera lista
var inputLista = document.getElementById("inputLista");
var guardar = document.getElementById("guardar");
//
//La primera tarjeta añade elementos a la lista, evento que se realiza entre las listas
anadirLista.addEventListener("click", function(e){
  //"esconde" el elemento    
  anadirLista.style.display = "none";
  //llama a la funcion que hace "hace aparecer" la nueva tarjeta
  activarTarjeta();
  //Es como ser el personaje principal
  inputLista.focus();
  //agrego la clase "lsta" a mi elemento, el div de la lista inicial
  lista.classList.add("lsta");
});
//
//boton, evento que se realiza para crear una nueva lista, el boton
//se "traslada" a la nueva lista
guardar.addEventListener("click", function(){
  //se esconde el formulario que ingresa la nueva tarea
  formulario.style.display = "none";
  //funcion que agrega texto a la tarjeta
  agregarMensaje(inputLista, this);
  //funcion que crea una nueva lista
  insertarContenedor();
  //me aseguro que mi nueva lista no tenga ningun valor sea "nueva"
  inputLista.value = "";
});
////////////////////////////  Comienzan las funciones /////////////////////////
  // funcion que "aparece" la nueva tarjeta e impide que se crea a lado de ella
  // la obliga a desplazarse para abajo
function activarTarjeta(){
  formulario.style.display = "block";
}
//Funcion que crea dos div que ayudan a crear el titulo en las listas y crear tarjetas
function agregarMensaje(texto, guardar){
  // es como llamar al "abuelo" del boton guardar, que se llama "anadirLista"
  var padre = guardar.parentElement.parentElement;
  //div que funciona como de la tarjeta
  var tarjeta = document.createElement("div");
  //div que funciona como "marco" de la tarjeta
  var newItem = document.createElement("div");
  //linea de codigo que guarda el texto ingresado, titulo de la lista
  newItem.innerText = texto.value;
  //inserta el nuevo elemento newItem como primer hijo del padre, ver como arregla
  padre.insertBefore(newItem, padre.childNodes[0]);
  //agregar clase al nuevo elemento
  newItem.classList.add("nuevalsta");
  //
  //agregar mensaje a la tarjeta
  tarjeta.innerText = "Añadir una tarjeta..."
  //agregar hijo al padre del boton guardar
  padre.appendChild(tarjeta);
  //se le pone una clase
  tarjeta.classList.add("tarjeta2");
  //
  //La pretarjeta tine una funcion que ayuda a crear mas tarjetas
  tarjeta.addEventListener("click", function(){
  tarjeta.style.display = "none";
  anadirTarjeta(padre);
  });
}
//funcion que me permite crear lo que sera una nueva "lista"
function insertarContenedor(){
  //se crea un div como contenedor de la nueva "lista"
  var nuevoCampo = document.createElement("div");
  //mi nueva "lista" es agregada como nuevo hijo al div que funciona como tablero
  tablero.appendChild(nuevoCampo);
  //
  //el nuevo campo se debe agregar al padre y al padre del padre 
  nuevoCampo.insertBefore(anadirLista, nuevoCampo.childNodes[0]);
  nuevoCampo.insertBefore(formulario, nuevoCampo.childNodes[0]);
  //se agregan clases al nuevo campo
  nuevoCampo.classList.add("nuevocampo");
  nuevoCampo.classList.add("lsta");
  //por default el div anadirlista no permite otros elementos en su misma linea
  anadirLista.style.display = "block";
}
//funcion para agregar nueva tarjetas
function anadirTarjeta(padre){
  //variables necesarias para crear una nueva tarjeta. Creacion de nodos-elementos
  //card es mi nueva tarjeta
  var card = document.createElement("div");
  var textArea = document.createElement("textarea");
  var btnAnadir = document.createElement("button");
  //se añade textarea como primer hijo del div car
  card.insertBefore(textArea, card.childNodes[0]);
  //se añade boton como segundo hijo del div card
  card.insertBefore(btnAnadir, card.childNodes[1]);
  padre.appendChild(card);
  //
  //se agrega el tipo al boton
  btnAnadir.type = "button";
  //se agrega texto al boton
  btnAnadir.innerText = "Añadir";
  //
  //al div card le agrego una clase
  card.classList.add("card");
  //al textarea le agrego una clase
  textArea.classList.add("textarea");
  //al boton le agrego una clase
  btnAnadir.classList.add("boton");
  //
  //en este punto la textArea contiene toda la atencion cuando la funcion se activa
  textArea.focus();
  //
  //mi nuevo boton llama a una funcion que ayuda a guarda la tarjeta creada dentro de la lista
  btnAnadir.addEventListener("click",function(){
    card.style.display = "none";
    guardarTarjeta(padre,textArea);
  });
}
//
//funcion que me permite conservar la nueva tarjeta dentro la lista
function guardarTarjeta(padre,textArea){
  //variable que crea un nuevo div
  var campoTarjeta = document.createElement("div");
  //"rescata" lo que se escribio en la tarjeta
  campoTarjeta.innerText = textArea.value;
  //esta linea inserta la tarjeta como ultimo hijo de la lista
  padre.insertBefore(campoTarjeta, padre.lastChild);
  //
  //agregar los estilos de la tarjeta creada y guardada en la lista
  campoTarjeta.classList.add("tarjeta1");
  //
  padre.appendChild(campoTarjeta.previousSibling);
  //las tarjetas no permiten elementos en su misma linea, desplazan las nuevas tarjetas abajo
  padre.lastChild.style.display = "block";
}
//NOTA: El uso de dos tarjetas asegura que se crean y guarden las tareas de la lista, mientras tarjeta2 ya esta en proceso
//de ser creada, la tarjeta1 ya fue agregada. Se asemeja a los apuntadores de C
