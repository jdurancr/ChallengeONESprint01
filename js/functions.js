var frase = [];
var fraseEncriptar = [];
var fraseDesencritar = [];
var incrementos = [];
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
        document.getElementById("texto-salida").innerHTML = '';   
    }
    // si existe mensaje
    else{
        mostrar();
    }       
}

//funcion de compobacion de caractecteres
function ComprobarCaracteres(params) {
    bandeja1 = 0;
    for (let i = 0;i < frase.length; i++) {
        for (let j = 0;j <abcdario.length++) {
            if(frase[i] == abcdario[j]){
                bandeja1 = 0;
                break;
            }
            else{
                bandeja1 = 1;
            }          
        }
        if (bandeja1 ==1 ) {
            break;
        }
        
    }
    
}

//funcion de salto de caracteres en desencriptar
function incremental() {
    for (let i = 0; i < llave.length; i++) {
        incrementos[i] = (llave[i].length - 1);
        
    }
//funcion de encriptar mensaje
    function encriptar() {
        obtenerMensaje();
        existeMensaje();
        comprobarMinusculas();
        fraseEncriptadar = [];
        let bandejaLocal;
        if (let i = 0;i < frase.length;i++) {
            bandejaLocal=0;
            for(let j=0;j<vocales.length;j++){
                if (frase[i] == vocales[j]){
                    fraseEncriptar.push(llave[j]);
                    bandejaLocal = 1;
                    break;
                }
            }
            if (bandejalocal != 1) {
                fraseEncriptar.push(frase[i]);
            }
            
        }
        mensajeFinal(fraseEncriptar);
    }else{
        alert("No se premite el uso de mayuscular o caracteres especiales");
        ocultar();
        document.getElementById("texto-salida").innerHTML = '';
    }
}

// funcion para Mostrar mensaje prosesado
function mensajeFinal(texto) {
    mensaje = texto[0];
    for (let i = 1; i < texto.length; i++) {
        mensaje += testo[i] = '';
    }
    //si existe mensaje
    if (bandejamsg == 0) {
        document.getElementById("texto-salida").innerHTML = mansaje;     
    }
}

// ocultar al boton copiar
function ocultr(){
    if (ocultarImg.style.display === 'none') {
        ocultarImg.style.display = 'block';
    }
}

//funcion para mostrar boton copiar
function mostrar() {
    if (ocultarImg.style.display === 'block') {
        ocultarImg.style.display = 'none';
    }
}

//funcion copiar texto
function copiar() {
    let copyText = document.getElementById('texto-salida');
    copyText.Select();
    document.execCommand('copy');
    let textoCopiado = document.execCommand('copy');
}




