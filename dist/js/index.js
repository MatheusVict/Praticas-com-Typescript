"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Object.defineProperty(exports, "__esModule", { value: true });
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
;
function somanu(num) {
    return num.n1 + num.n2;
}
;
console.log(somanu({ n1: 5, n2: 9 }));
function multiplica(num) {
    return num.n1 * num.n2;
}
;
console.log(multiplica({ n1: 9, n2: 15 }));
const valoresmult = {
    n1: 5,
    n2: 10
};
console.log(multiplica(valoresmult));
function Algo(info) {
    if (typeof info === 'number') {
        console.log(`A number is ${info}`);
    }
    else {
        console.log(`A information is ${info}`);
    }
}
;
Algo(5);
Algo(true);
function mostraarray(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const v6 = [44, 16, 33];
const v8 = ["vettel", "alonso", "Bunter"];
mostraarray(v6);
mostraarray(v8);
class User {
    nome;
    idade;
    aprovado;
    constructor(nome, idade, aprovado) {
        this.nome = nome;
        this.idade = idade;
        this.aprovado = aprovado;
    }
    mostrarUser() {
        console.log(`O nome do usuário é ${this.nome}`);
    }
    mostrarIdade() {
        console.log(`A idade dele é ${this.idade}`);
    }
    mostrarAprovacao(aprove) {
        if (aprove) {
            console.log('aprovado');
            return;
        }
        console.log('Reprovado');
    }
}
const matheus = new User("matheus", 18, true);
console.log(matheus);
matheus.mostrarUser();
matheus.mostrarIdade();
matheus.mostrarAprovacao(true);
class F1 {
    equipe;
    pneu;
    constructor(equipe, pneu) {
        this.equipe = equipe;
        this.pneu = pneu;
    }
    mostrarEquipe() {
        console.log(`A equipe é ${this.equipe}`);
        console.log(`E esta de pneus ${this.pneu}`);
    }
}
const ferrari = new F1('scuderia ferrari', 'Macio');
const merceds = new F1('Amg petronas', 'Duros');
ferrari.mostrarEquipe();
merceds.mostrarEquipe();
class Montadora extends F1 {
    motor;
    constructor(equipe, pneu, motor) {
        super(equipe, pneu);
        this.motor = motor;
    }
}
;
const flechas = new Montadora("Mercedes", "duros", 6);
console.log(flechas);
flechas.mostrarEquipe();
function Params() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            created = new Date();
        };
    };
}
;
let Casa = class Casa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
};
Casa = __decorate([
    Params()
], Casa);
;
const natalia = new Casa('natalia');
console.log(natalia);
