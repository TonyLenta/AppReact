
// Variables y constantes

const nombre = "Anthony"; 
const apellido = "Sanchez";

//const nombrecompleto= nombre+apellido;
const nombrecompleto= ` 
${ nombre } ${ apellido}`;
console.log(nombrecompleto)


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre) } `)