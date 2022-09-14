

  let palabrasLista=JSON.parse(localStorage.getItem('palabras'));


let ingresaPalabra= document.querySelector("#ingresarPalabra");
let inputPalabra= document.querySelector("#inputPalabra")
ingresaPalabra.addEventListener('click',ingresarPalabra) 


function ingresarPalabra(){
    let pattern=/^[A-Z]+$/
    let input= inputPalabra.value;
    if(input.length>8){
      alert("Esa palabra es muy larga intenta con una menor de 8 palabras")
    }else{
      if(pattern.test(input)){
      
        palabrasLista.push(input)
         alert('Felicidades se guardo la palabra')
          // Cargar desde localStorage o inicializar como arreglo vacío
           localStorage.setItem('palabras',JSON.stringify(palabrasLista)); 
           input.value
      }else{
        alert('Ingrese palabras si acento y solo con letras mayusculas')
      }
    }

   
}

