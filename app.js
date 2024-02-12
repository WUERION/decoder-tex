// * variables
let textInput = document.getElementById('text');//* obtenemos el txto de la textarea
let textOut = document.getElementById('textInfo')
let bntIncriptar = document.getElementById('bntIncriptar');//* conectamos el boton para incriptar
let bntDesencriptar = document.getElementById('bntDesencriptar');//* conectamos el boton para desncriptar el texto
let copy = document.getElementById('bntCopiar');//* conectamos el boton para copiar el texto
let map = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };//* mapeamos las llaves de encriptacion
let imgInfo = document.getElementById('imgInfo')
let titleInfo = document.getElementById('titleInfo')
//  La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
let text;//* creamos una variable sin inicializar


// *function para incriptar
function incriptar() {
    text = textInput.value;//* verificamos el que el textInput no este vacio
    for (let letra in map) {//* creamos el bucle para recorrer el string // iteramos un el objeto map
        let re = new RegExp(letra, 'g');//* creamos un nuevo objeto con exprecion regular
        text = text.replace(re, map[letra]);//* remplazamos todas las ocurrencias de la cadena con el valor correspondiente de map[letra]
    }
    textOut.innerText = text;
    titleInfo.classList += 'text-info-none';
    imgInfo.classList += ' text-info-none';
    return text;
}

//* function para desencriptar
function Desencriptar() {
    let keys = Object.keys(map);//* obtenemos en arreglo de las propiedades enumeradas de map
    for (let i = 0; i < keys.length; i++) {//* creamos un for para recorrer la var keys
        let rem = new RegExp(map[keys[i]], 'g');//* creamos un nuevo objeto con exprecion regular
        text = text.replace(rem, keys[i])//* remplazamos todas las ocurrecias de la cadena con el valor correspondiente de keys[i]
    }
    textOut.innerText = text;
    titleInfo.classList += 'text-info-none';
    imgInfo.classList += ' text-info-none';
}

//*  function para copiar
//TODO: hacer la function copiar

bntDesencriptar.addEventListener('click', Desencriptar)//* añadimos el evento click al boton y llamamos a la fuction
bntIncriptar.addEventListener('click', incriptar)//* añadimos el evento click al boton y llamamos a la fuction