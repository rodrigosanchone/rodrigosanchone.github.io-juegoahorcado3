var fecha = new Date().getFullYear();

var error = 0;

var acierto = 0;

const btn = document.querySelector(".btn3");

const anno = document.querySelector("span");

const ahorcado=document.querySelector(".ahorcado")

var repitio=0

anno.innerHTML = fecha;

const palabras = [
  "casa",
  "manzana",
  "auto",
  "pueblo",
  "manzanilla",
  "sombrero",
  "barco",
];

var rellenar = document.querySelector(".rellenarPalabra");

var letras = document.querySelector(".letrasErroneas");

var cuadro = document.querySelector("canvas");



var palabra = "";

let  mostrarPalabra="";


var visible=0;

var letra;

var pincel = cuadro.getContext("2d");

/**Selecciono palabra del arreglo al azar */
const nuevaPalabra = () => {
  palabraRamdon = Math.floor(Math.random() * palabras.length);
  mostrarPalabra = palabras[palabraRamdon].toUpperCase();
  palabra= mostrarPalabra
  console.log(palabra)
};

/*codígo para verificar que letra se presiono en el teclado esta dentro de la palabra */
const teclaPresionada = (e) => {
 

  letra = e.key.toUpperCase();
  if (letra.match(/^[a-zñ]$/i)) {
    if(repetido=letra){
      acierto=acierto-1
   
    letraSeleccionada(letra)
 }  
  }
}
  const letraSeleccionada = (letra) => {
    let p = document.querySelectorAll(".rellenarPalabra p");
    if (palabra.includes(letra)) {
      
      for (let i = 0; i<= palabra.length; i++) {
        
        if (palabra[i] === letra) {  
          p[i].className = "visible"; 
           console.log(acierto)
          if(acierto==palabra.length-1){
           alert('gano')
           
          }
  
          
        }
       
      }
       
  
      
    } else {
      error += 1;
      console.log("Error " + error);
      var span = document.createElement("span");
      alert("Lo siento fallo, tiene:" + error + "errores");
      span.innerHTML = letra;
      letras.appendChild(span);
       dibujarAhorcado(error); 
      if(error==8){
        alert("Perdites la pardida")
        error=0;
        nuevaPartida()
        ahorcado.innerHTML=""
  
      }
    }
  
    
  };

/*pinta los espacios que tiene la palabra selccionada al azar*/
const pintarPalabra = () => {
  rellenar.innerHTML = "";

  let palabra = mostrarPalabra;

  for (var i = 0; i <= palabra.length - 1; i++) {
    var span = document.createElement("span");
    var p = document.createElement("p");
    span.className += "col-input";

    rellenar.appendChild(span);
    span.appendChild(p);
    p.className += "phidden";
    p.innerHTML = `${palabra[i]}`;
  }

};

/**Dibujando el ahorcado */



const dibujarAhorcado = (error) => {
  switch (error) {
    case 1:
      pincel.fillRect(70, 0, 10, 400);
      break;
    case 2:
      pincel.fillRect(70, 0, 60, 10);
      break;

    case 3:
      /*cabeza*/
      pincel.beginPath();
      pincel.arc(125, 22, 12, 0, 2 * 3.14);
      pincel.stroke();
      break;
    case 4:
      /*cuerpo*/
      pincel.fillRect(123, 35, 2, 60);
      break
    case 5:
      /*brazo uno*/

      pincel.moveTo(125, 40);
      pincel.lineTo(96, 60);

      pincel.stroke();
       break
    case 6:
      /*brazo dos*/
      pincel.beginPath(0);
      pincel.moveTo(150, 65);
      pincel.lineTo(122, 40);

      pincel.stroke();
      break;
    case 7:  

      /*pierna uno */

      pincel.beginPath(0);
      pincel.moveTo(123, 90);
      pincel.lineTo(110, 110);

      pincel.stroke();
     break;

     case 8:
      /*pierna dos*/

      pincel.beginPath(0);
      pincel.moveTo(123, 89);
      pincel.lineTo(142, 105);

      pincel.stroke();
      break;
  }
}

const nuevaPartida = () => {
  nuevaPalabra();
  pintarPalabra()
  document.addEventListener("keydown", teclaPresionada);
  ahorcado.innerHTML==cuadro

};





nuevaPartida();



btn.addEventListener("click", nuevaPartida);