var frase = [];
var fraseEncriptada = [];
var fraseDesencritada = [];
var mensaje = [];
var bandeja, bandeja1, bandejamsg
const vocales = ['a','e','i','o','u']; //vocale a intercabiar en las palabras ingresadas
const llave = ["ai", "enter", "imes", "ober", "ufat"]; //ramplazo de vocales
const abcdario = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //letras validas

var ocultarImg = document.getElementbyId('ocultar');
ocultarImg.style.display = 'block';

//funcion que almacena el texto ingresado
function almacenaMensaje() { 
    frase = document.querySelector("texto-ingresado").value;   
}
// funcion si existe mensaje en el cuadro de texto
function siMensaje() {
    bandeja = 0;
    bandejamsg = 0;
if (frase == '') {
    bandeja++;
    bandejamsg=1;
    
}
 //si no existe un mensaje
if (bandeja > 0) {
        ocultar();
        alert("No se encontro ningun mensaje para encriptar o desencriptar");
        document.getElementById("s")
    }
    
}
