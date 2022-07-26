var perro = {
  nombre: "Scott",
  color: "Negro",
  macho: true,
  edad: 2
};
function Obtener(obj) {
    //Obtener y Recorrer las Llaves de un Objeto
    //Aqui tu codigo
   

for (let clave in perro){
  console.log(perro[clave]);
}

}
Obtener(perro);


function Fecha() {

	const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
   var num = new Date('December 25, 2022');
var dia = num.getDay();
console.log(dias[dia]);
  
}

Fecha();




 usuario={
	nombre:"gaston",
 	password:123

 };


function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
     if (usuario.password==password){
    	return true
    } else return false

}

console.log(usuario,121);



function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:


			var nombre = {
					nombre:nombre,
					edad:edad,
					meow : function()
					{
						console.log("Meow!");
					}

				};
				return nombre; 
		
			

}
console.log(crearGato("jorge",22));


function agregarMetodoCalculoDescuento() {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" 
    //("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    	var producto = {nombre: "tele",
    					precio:  20,
    					porcentajeDeDescuento : .2,
    				calcularPrecioDescuento: function()
    		{
    			console.log(" Precio del producto "+ producto.precio);
    		console.log("Descuento "+ producto.precio*producto.porcentajeDeDescuento);
    		producto.precio-=producto.precio*.2;
    		}

    		};

   


// producto.precio();
// producto.porcentajeDeDescuento();
producto.calcularPrecioDescuento();


return producto;
}

console.log(agregarMetodoCalculoDescuento());



function ordenar(array) {
    // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la forma que tu quieras
    // Mostrar array ordenado.
    // Tu código:

    array.sort((a,b)=>{
    return a-b;
 			}); 
    console.log(array);


}

ordenar([2,9,3,1,5])
