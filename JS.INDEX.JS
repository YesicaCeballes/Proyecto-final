alert ("Entrega de Proyecto Final Argentina Programa 4.0")

var nombre = "Adison Douglas";
nombre = 25;
console.log(nombre)

var boton = document.getElementById("boton");
boton.addEventListener("click", mostrar, false);

function mostrar(){
    var content = document.getElementById("content")
    if(content.style.display==="block")
    { 
    content.style.display = "none";
}else
{
    content.style.display = "block";
}
}
