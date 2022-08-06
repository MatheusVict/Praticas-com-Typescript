// Annotation
let x: number = 10;

x = 5;

console.log(x);

// inferencia
let y = 12;
y = 5

// tipos básicos
let nome: string = 'Matheus'
let idade: number = 18
const adm: boolean = true

// objetos em letra maiusculas != os tipos em letras minusculas, no type sempre trabalha com todos em letras minusculas

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof adm);

// object
const numero: number[] = [5, 6, 7]; // colocar o tipo e um [] define q é um array númerico
console.log(numero);
console.log(numero.length);
//console.log(numero.toUpperCase()) não funciona pq é um array numerico
console.log(nome.toUpperCase())