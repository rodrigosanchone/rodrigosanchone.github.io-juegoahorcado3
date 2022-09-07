
var fecha = new Date().getFullYear();

const btn = document.querySelector(".btn3")


const anno = document.querySelector('span')

anno.innerHTML=fecha;

const palabras= ['casa','manzana','auto','pueblo','manzanilla','sombrero','barco']

var rellenar= document.querySelector('.rellenarPalabra')






/**Selecciono palabra del arreglo al azar */
const nuevaPalabra=()=>{
  palabraRamdon=  Math.floor(Math.random()*palabras.length)
  mostrarPalabra= palabras[palabraRamdon].toUpperCase()
   console.log(mostrarPalabra)
}

/*codígo para verificar que letra se presiono en el teclado esta dentro de la palabra */
const letraSeleccionada=letra=>{
  let palabra=mostrarPalabra
 
  var hueco= document.querySelector('.phidden')
  if(palabra.includes(letra)){
    //let lugar= palabra.indexof(letra,1)
    for(let i=0;i<=palabra.length;i++){
      if(hueco[i]===letra){
      hueco.className+="phidden"
     }
    }
     
  }else{
    alert('Lo siento fallo')
  }
}

/*evento para saber que tecla se presiono*/
const teclaPresionada=e=>{
  let letra = e.key.toUpperCase();
  if(letra.match(/^[a-zñ]$/i)){
    letraSeleccionada(letra)
  }
 
}


/*pinta los espacios que tiene la palabra selccionada al azar*/
const pintarPalabra=()=>{

     rellenar.innerHTML="";

     let palabra=mostrarPalabra

  for(var i=0;i<=palabra.length-1;i++){
 
      var span = document.createElement('span')
      var p= document.createElement('p')
      span.className+="col-input"
      
      rellenar.appendChild(span)
      span.appendChild(p)
      p.className+="phidden"
      p.innerHTML=`${palabra[i]}`
    
 
  }  

}


/*saber si la letra existe dento de la palabra*/

/*const letraCorrecta=()=>{

  var p= document.querySelectorAll(".phidden")
  let palabra=mostrarPalabra
   
  indexe= palabra.indexOf(1)
  console.log(indexe)
  
   for(var i=0;i<=p.length;i++){
      if(p[i].innerHTML=palabra[i]){
         p[i].className="visible"
      }
     
      
   }  
}*/
 
/**codigo que llama a nueva partida  */
const nuevaPartida=()=>{
  nuevaPalabra()
  pintarPalabra()
  document.addEventListener('keydown',teclaPresionada)
}





nuevaPartida()

btn.addEventListener('click',nuevaPartida) 















   






