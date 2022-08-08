"use strict";
let x = 10;
x = 5;
console.log(x);
let y = 12;
y = 5;
let nome = 'Matheus';
let idade = 18;
const adm = true;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof adm);
const numero = [5, 6, 7];
console.log(numero.length);
console.log(nome.toUpperCase());
numero.push(2);
console.log(numero);
let mTuple;
mTuple = ['oi', 5, ['oi']];
const user = {
    name: 'Matheus',
    age: 8
};
console.log(user);
console.log(user.name);
let m = 0;
m = 'vai';
m = true;
m = [];
let id = 10;
id = 'olá';
const userId = 10;
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
;
const calça = {
    name: 'calça jeans',
    size: Size.G
};
console.log(calça);
let valor;
valor = 'Valor';
let usuario;
usuario = 'autenticado';
usuario = null;
function soma(a, b) {
    return a + b;
}
;
console.log(soma(50, 6));
function Eae(name) {
    return `oi ${name}`;
}
;
console.log(Eae('Matheus'));
function logger(msg) {
    console.log(msg);
}
;
logger('Tú');
function Agradacer(name, greet) {
    if (greet) {
        console.log(`Olá ${name} ${greet}`);
        return;
    }
    console.log(`oi ${name}`);
}
;
Agradacer('matheus');
Agradacer('Tú', 'Você é linda');
