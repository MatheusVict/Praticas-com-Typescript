import { json } from "sequelize/types";

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
interface MathFunctionParams { // Interface para funções matematicas
    n1: number,
    n2: number
};

function somanu(num: MathFunctionParams) { // Ele vai ser tipado pela interface
    return num.n1 + num.n2
};

console.log(somanu({n1: 5, n2: 9}));

function multiplica(num: MathFunctionParams) { // Usando a msm interface como parametro facilita dms, pq vai ser sempre n1 e n2 numericos
    return num.n1 * num.n2
};

console.log(multiplica({n1: 9, n2: 15})); // Opcional pq ocorre lá embaixo

const valoresmult:MathFunctionParams = { // Da pra usar em constantes // Seus parametros q são os tipos permanecem e facilitam
    n1: 5,
    n2: 10
};

console.log(multiplica(valoresmult)); // Chamei a fução multiplicar e os valores passei os na constante

// narrowing = mais teorico, checagem de tipos Tipo do greet
function Algo(info: number | boolean) {
    if(typeof info === 'number'){
        console.log(`A number is ${info}`)
    } else{
        console.log(`A information is ${info}`)
    }
};

Algo(5);
Algo(true);

// generics
function mostraarray<T>(arr: T[]) { // Tá dizendo q receb array de qualquer tipo, ouse ja pode receber qualquer coisa desde q seja passado oq vai receber
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}

const v6 = [44, 16, 33];
const v8 = ["vettel", "alonso", "Bunter"];

mostraarray(v6);
mostraarray(v8);

// Classes
class User {
    nome
    idade
    aprovado

    constructor(nome: string, idade: number, aprovado: boolean) { // this === self
        this.nome = nome
        this.idade = idade
        this.aprovado = aprovado
    }
    mostrarUser() {
        console.log(`O nome do usuário é ${this.nome}`);
    }
    mostrarIdade() {
        console.log(`A idade dele é ${this.idade}`);
    }
    mostrarAprovacao(aprove: boolean) {
        if(aprove) {
            console.log('aprovado');
            return
        }
        console.log('Reprovado');
    }
}

const matheus = new User("matheus", 18, true);

console.log(matheus);
matheus.mostrarUser();
matheus.mostrarIdade();
matheus.mostrarAprovacao(true);

// Interfaces em classes // Dita como a classe vai se comportar
interface If1s { // Começa com I pra sabermos q é uma interface
    equipe: string
    mostrarEquipe():void
}

class F1 implements If1s { // Códigos padroniazados q ajudam nas classes desse modelo

    equipe
    pneu

    constructor(equipe: string, pneu: string) {
        this.equipe = equipe
        this.pneu = pneu
    }

    mostrarEquipe(): void {
        console.log(`A equipe é ${this.equipe}`);
        console.log(`E esta de pneus ${this.pneu}`);
    }
}
const ferrari = new F1('scuderia ferrari', 'Macio');
const merceds = new F1('Amg petronas', 'Duros');
ferrari.mostrarEquipe();
merceds.mostrarEquipe();

// Heranças = herda algo de outra classe
class Montadora extends F1 { // quando herda não precisa fazer a interface dnv. Interface só na classse pai
    motor

    constructor(equipe: string, pneu: string, motor: number) {
        super(equipe, pneu)
        this.motor = motor // super metodo espcial dos construtors
    }
};

const flechas = new Montadora("Mercedes", "duros", 6);
console.log(flechas);
flechas.mostrarEquipe();

// decortors = Validação de dados, evento obervavel em algum ponto de uma classe, função etc
// cosntructor decorators
function Params() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            created = new Date()
        }
    }
};
@Params()
class Casa { // decorators vai criar de forma utomatica um id por exemplo
    nome

    constructor(nome: string) {
        this.nome = nome
    }
};
const natalia = new Casa('natalia');
console.log(natalia);
