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
//console.log(numero);
console.log(numero.length);
// console.log(numero.toUpperCase()) //não funciona pq é um array numerico
console.log(nome.toUpperCase());
numero.push(2);
console.log(numero);

// Tuplas
let mTuple: [string, number, string[]]; // Determinadno o tipo da tupla e tem q seguir exatamente essa ordem
mTuple = ['oi', 5, ['oi']]

// object literals -> {prop: value}
const user: {name: string, age: Number}  = {
    name: 'Matheus',
     age: 8
};

console.log(user);
console.log(user.name);

// user.job = 'Dev' //Não funciona pq esse atributo não existe no array

// any = valor q aceita qualquer tipo de dado

let m:any = 0;

m = 'vai';
m = true;
m = [];

// union type
// Divide os tipos por uma pipe, quer dizer q vai receber diferentes tipos
let id: string | number = 10
id = 'olá'

// type alias
type idtype = string | number

const userId: idtype = 10// Todos compartilham de um tipo, oq facilita muito
// const productId: idtype = 'pc'

// enum = enumera uma coleção e ajuda a lidar com dados mais complexos
// Mais fácil 
enum Size {
    P = 'pequeno',
    M = 'Médio',
    G = 'grande'
};

const calça = {
    name: 'calça jeans',
    size: Size.G
}; // Aqui você chama sem precisar criar dnv

console.log(calça);

//literal types = determinar um valor como tipo, ou seja, só aceita um valor
let valor: 'Valor' | null
valor = 'Valor'
// exemplos
    let usuario: 'autenticado' | null;
    usuario = 'autenticado';
    usuario = null;

// Funções | Sempre tem q tipar
function soma(a: number, b: number) {
    return a + b
};

console.log(soma(50, 6));

function Eae(name: string): string {
    return `oi ${name}`
};

console.log(Eae('Matheus'));

function logger(msg: string): void { //Void = função sem retorno
    console.log(msg);
};

logger('Tú');

function Agradacer(name: string, greet?: string): void {
    if(greet) { // Se o argumento é verdadeiro || se ele existe
        console.log(`Olá ${name} ${greet}`);
        return;
    } 
    console.log(`oi ${name}`)
};

Agradacer('matheus');
Agradacer('Tú', 'Você é linda');

// interface

