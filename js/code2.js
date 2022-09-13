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
        console.log('verdadero')
        palabrasLista.push(input)
        localStorage.setItem('palabras',JSON.stringify(palabrasLista));    
      }else{
        alert('Ingrese palabras si acento y solo con letras mayusculas')
      }
    }

   
}

