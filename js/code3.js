var palabrasLista = [
   "casa",
   "manzana",
   "auto",
   "pueblo",
   "consuelo",
   "sombrero",
   "barco", 
  ];

  let arreglo=JSON.parse(localStorage.getItem('palabras'));
  console.log(arreglo)

if(arreglo){
   /*  document.addEventListener('DOMContentLoaded', () => { */
        // Cargar desde localStorage o inicializar como arreglo vacío
        palabras=JSON.parse(localStorage.getItem(palabras));
      /* }); */
  }else{
    localStorage.setItem('palabras',JSON.stringify(palabrasLista))
  }
  
