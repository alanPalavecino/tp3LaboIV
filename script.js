
/* function getMessage(){
   document.getElementById("myId").innerHTML = "HELLO WORD!"
} */

document.getElementById("myId").innerHTML = "HELLO WORD!"
// Con querySelector
document.querySelector("#myId2").innerHTML = "Hola copn querySelector"


// se necesita primero crear una variable que contenga la lista. Para luego utilazarlo como un array
var titulos = document.getElementsByClassName("test");
titulos[0].innerHTML = "Hola!!!!!!!!!!!!!!!!!!!" 

// lo mismo pero con querySselector
//document.querySelector(".test").innerHTML = "obtengo el primer elemento de la clase"




//var tabla;




function insertRow() {
   // Obtener la tabla por su ID
   var tabla = document.getElementById("myTable");

   // Insertar una nueva fila al final de la tabla (-1 indica al final)
   var nuevaFila = tabla.insertRow(-1);

   // Insertar dos celdas en la nueva fila
   var celda1 = nuevaFila.insertCell(0);
   var celda2 = nuevaFila.insertCell(1);

   // Asignar contenido a las celdas
   celda1.innerHTML = "Nueva celda " + (tabla.rows.length - 1);
   celda2.innerHTML = "Nueva celda " + (tabla.rows.length - 1);


}

function deleteRow() {


   // Obtener la tabla por su ID
   var table = document.getElementById("myTable");


   // Verificar que hay al menos una fila además de los encabezados (para no borrar el encabezado)
   if (table.rows.length > 1) {
      // Eliminar la última fila
      table.deleteRow(-1);
   } else {
      alert("No se puede eliminar la fila, solo queda el encabezado.");
   }
}


function highlight() {

   var elementos = document.getElementsByClassName("myClass");
   //console.log(elementos);

   for (var i = 0; i < elementos.length; i++) {
      console.log(i);
      elementos[i].style.color = "red"
      // con el textContene acceso al valor, en este caso la palabra
      console.log(elementos[i].textContent)
   }



   // aca esta echo con un forEach, la palabra Array, tiene que tener la A mayuscula sino no funciona 
   /*   Array.from(elementos).forEach(element => {
        element.style.color = "blue";
     }); */

}