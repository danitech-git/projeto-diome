const prompt = require('prompt-sync')();

let nameHero  = prompt("Digite o nome do seu herói/heroina:")
console.log("Olá, " + nameHero);

let scoreXp = parseInt(prompt("Qual a sua pontuação (XP)?"));

let nivel = "";

let niveis = [
    ["Ferro", 0, 1000],
    ["Bronze", 1001, 2000],
    ["Prata", 2001, 5000],
    ["Ouro", 5001, 7000],
    ["Platina", 7001, 8000],
    ["Ascendente", 8001, 9000],
    ["Imortal", 9001, 10000],
    ["Radiante", 10001, Infinity]
];



for (let i = 0; i < niveis.length; i++) {
    
let nivelAtual = niveis[i];

    let nomeNivel = nivelAtual[0];
    let xpMin = nivelAtual[1];
    let xpMax = nivelAtual[2];

if (scoreXp >= xpMin && scoreXp <= xpMax) {

        nivel = nomeNivel;
        break;
    

    }
}

console.log(`O(a) Herói/Heroina ${nameHero} está no nível ${nivel}`);




