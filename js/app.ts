// Imprimimos en consola HOLA MUNDO
console.log("hola mundo");

// Ejercicio de usos de cadenas de texto
let vengador = {
  nombre : "Thor",
  edad : 800
}

console.log( "Hola " + vengador.nombre + " tienes " + vengador.edad + " años de edad, ¿cierto?."  );

// Ejercicio  con DATOS tipo boolean
let esSuperman:boolean = true;
let esBatman:boolean;

comprobarHeroe();
esSuperman = convertClark();
comprobarHeroe();

function comprobarHeroe(){
  if( esSuperman){
    console.log("Estamos Salvados :)");
  }else{
    console.log("Oooops! yaaa vaalio");
  }
}

function convertClark(){
  return false;
}

// Ejercicio con datos Numericos
// Ejemplos de declaracion de datos numericos
let avenvers:number = 5;
let villanos:number = 0;
let otros = 2;

console.log(" Son mas vengadores que villanos ?");
console.log("avengers_"+ avenvers +"  villanos_" + villanos);

if (avenvers > villanos){
  console.log("\n Si, son mas vengadores");
}else{
  console.log(" No, Estamos perdidos");
}

// Ejercicios con Strings y concatenacion con ``
let batman:string = "Batman";
let ironman:string = "Iron Man";
let cap:string = "Capitan America";

let concat:string = `Los heroes que llegan a México son: ${batman}, ${ironman}, ${cap}` ;

console.log(concat);
// Tipo de dato any con valor por defecto undefined
let existe;

// Ejercicios con Tipo ANY

let heroe:any;

heroe = "Dr. Strange";
console.log(heroe.charAt(7));

heroe = 150.5555;
console.log( heroe.toFixed(2));

heroe = true;
console.log( heroe);

// Ejercicios con arreglos

let arreglo:number[] = [1,2,3,4,5,6,7];
arreglo.push(1,2,3);
console.log(arreglo);

let villanos_marvel:string[] = ["villano1","villano2", "villano3"];
villanos_marvel.push("Thanos");
console.log(villanos_marvel);

let flash = {
  nombre : "Barry Allen",
  edad: 24,
  poderes : ["Puede correr muy rapido", "Viajar por el tiempo"]
};

// Ejercicio con Type

type Heroe = {
  nombre:string,
  edad:number,
  poderes:string[],
  getNombre:()=>string
};

let spiderman:Heroe = {
  nombre: "Peter Parker",
  edad: 20,
  poderes:["Telarañas", "Trepar muros"],
  getNombre(){
    return this.nombre;
  }
};

let antman:Heroe = {
  nombre: "Scott Lang",
  edad: 23,
  poderes:["Manipular a insectos", "Encojerse","Estratega"],
  getNombre(){
    return this.nombre;
  }
};

console.log(antman.getNombre()+" como Antman");
console.log(spiderman.getNombre()+" como Spiderman");

// Primera interfaz Grafica
interface Xmens {
  nombre : string,
  poder:string
}

function enviarMision( xmen : Xmens){
  console.log(`Enviando a ${xmen.nombre}`);
};

function enviarCuartel( xmen: Xmens){
  console.log(`Enviando al cuartel : ${xmen.nombre}`);
}

let wolwerine:Xmens={
  nombre: "Wolwerine",
  poder: "Regeneracion"
};

enviarMision(wolwerine);
enviarCuartel(wolwerine);
/**
    Ejemplo de comentarios multiples lineas
    Ejercicios con Clases Basicas en Typescript
 */
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

console.log(`El ejemplo con clase es ${user.name}, con su id : ${user.id}`);


class Persona {
    nombre:string;
    apellido:string;
    constructor(nuevoNombre:string, nuevoApellido:string) {
       this.nombre=nuevoNombre;
       this.apellido=nuevoApellido;
    }
}

let uno : Persona = new Persona("Hola","Uno");
console.log(uno.nombre);
