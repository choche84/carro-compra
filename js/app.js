//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito.tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito=[];

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionando "Agregar al carrrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//funciones
//function agregarCurso(){          //verifico que se comunique mi funcion
 //   console.log('presionaste la targeta');

 // verifico donde estoy haciendo click
//function agregarCurso(e){
  //  console.log(e.target.classList);
//}
// evirar el bobbding
/*
function agregarCurso(e){
    e.preventDefault(); // evita que al precionar se regrese al inicio de la pagina
    if ( e.target.classList.contains('agregar-carrito')){
        console.log('agregando al  carrito...');

    }
}*/

function agregarCurso(e){
    e.preventDefault(); 
    if ( e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;//del boton seleccionado selecciono dos veces padre poara obtener la tarjeta con la informacion del curso
        leerDatosCurso(cursoSeleccionado);
    }
}


// lee e copntenido del htm al que se le dio click y xtraer la informacion del curso
function leerDatosCurso(curso){
   // console.log(curso)
    //creo objeto con insformacion del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img') .src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoCurso)

//agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
   
    carritoHTML();

}

//muetra el carrito de compras en el HTML
function carritoHTML(){
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;
            console.log(contenedorCarrito);
        //agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

}