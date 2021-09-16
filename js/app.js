// Imprimimos en consola HOLA MUNDO
console.log("hola mundo");
// Ejercicio de usos de cadenas de texto
var vengador = {
    nombre: "Thor",
    edad: 800
};
console.log("Hola " + vengador.nombre + " tienes " + vengador.edad + " años de edad, ¿cierto?.");
// Ejercicio  con DATOS tipo boolean
var esSuperman = true;
var esBatman;
comprobarHeroe();
esSuperman = convertClark();
comprobarHeroe();
function comprobarHeroe() {
    if (esSuperman) {
        console.log("Estamos Salvados :)");
    }
    else {
        console.log("Oooops! yaaa vaalio");
    }
}
function convertClark() {
    return false;
}
// Ejercicio con datos Numericos
// Ejemplos de declaracion de datos numericos
var avenvers = 5;
var villanos = 0;
var otros = 2;
console.log(" Son mas vengadores que villanos ?");
console.log("avengers_" + avenvers + "  villanos_" + villanos);
if (avenvers > villanos) {
    console.log("\n Si, son mas vengadores");
}
else {
    console.log(" No, Estamos perdidos");
}
// Ejercicios con Strings y concatenacion con ``
var batman = "Batman";
var ironman = "Iron Man";
var cap = "Capitan America";
var concat = "Los heroes que llegan a M\u00E9xico son: " + batman + ", " + ironman + ", " + cap;
console.log(concat);
// Tipo de dato any con valor por defecto undefined
var existe;
// Ejercicios con Tipo ANY
var heroe;
heroe = "Dr. Strange";
console.log(heroe.charAt(7));
heroe = 150.5555;
console.log(heroe.toFixed(2));
heroe = true;
console.log(heroe);
// Ejercicios con arreglos
var arreglo = [1, 2, 3, 4, 5, 6, 7];
arreglo.push(1, 2, 3);
console.log(arreglo);
var villanos_marvel = ["villano1", "villano2", "villano3"];
villanos_marvel.push("Thanos");
console.log(villanos_marvel);
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
var spiderman = {
    nombre: "Peter Parker",
    edad: 20,
    poderes: ["Telarañas", "Trepar muros"],
    getNombre: function () {
        return this.nombre;
    }
};
var antman = {
    nombre: "Scott Lang",
    edad: 23,
    poderes: ["Manipular a insectos", "Encojerse", "Estratega"],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(antman.getNombre() + " como Antman");
console.log(spiderman.getNombre() + " como Spiderman");
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel : " + xmen.nombre);
}
var wolwerine = {
    nombre: "Wolwerine",
    poder: "Regeneracion"
};
enviarMision(wolwerine);
enviarCuartel(wolwerine);
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
console.log("El ejemplo con clase es " + user.name + ", con su id : " + user.id);
var Persona = /** @class */ (function () {
    function Persona(nuevoNombre, nuevoApellido) {
        this.nombre = nuevoNombre;
        this.apellido = nuevoApellido;
    }
    return Persona;
}());
var uno = new Persona("Hola", "Uno");
console.log(uno.nombre);
