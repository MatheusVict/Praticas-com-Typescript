"use strict";
// Annotation
let x = 10;
x = 5;
console.log(x);
// inferencia
let y = 12;
y = 5;
// tipos básicos
let nome = 'Matheus';
let idade = 18;
const adm = true;
// objetos em letra maiusculas != os tipos em letras minusculas, no type sempre trabalha com todos em letras minusculas
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof adm);
// object
const numero = [5, 6, 7]; // colocar o tipo e um [] define q é um array númerico
//console.log(numero);
console.log(numero.length);
// console.log(numero.toUpperCase()) //não funciona pq é um array numerico
console.log(nome.toUpperCase());
numero.push(2);
console.log(numero);
// Tuplas
let mTuple; // Determinadno o tipo da tupla e tem q seguir exatamente essa ordem
mTuple = ['oi', 5, ['oi']];
// object literals -> {prop: value}
const user = {
    name: 'Matheus',
    age: 8
};
console.log(user);
console.log(user.name);
// user.job = 'Dev' //Não funciona pq esse atributo não existe no array
// any = valor q aceita qualquer tipo de dado
let m = 0;
m = 'vai';
m = true;
m = [];
// union type
// Divide os tipos por uma pipe, quer dizer q vai receber diferentes tipos
let id = 10;
id = 'olá';
const userId = 10; // Todos compartilham de um tipo, oq facilita muito
const productId = 'pc';
