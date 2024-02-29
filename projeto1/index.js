const prompt = require('prompt-sync')();

let nomeHeroi = prompt("Insira seu nome de herói: ");
let nivelHeroi;
let quantidadeXP = 0;
let entradaValida = false;

while (!entradaValida){
    quantidadeXP = parseInt(prompt("Quanto de XP você já obteve? (ex: 10000) "));
    
    if (!isNaN(quantidadeXP)) {
        entradaValida = true;
        
        if (quantidadeXP > 0 && quantidadeXP <= 1000) {
            nivelHeroi = "Ferro";
        }
        else if (quantidadeXP > 1000 && quantidadeXP <= 2000) {
            nivelHeroi = "Bronze";
        }
        else if (quantidadeXP > 2000 && quantidadeXP <= 5000) {
            nivelHeroi = "Prata";
        }
        else if (quantidadeXP > 5000 && quantidadeXP <= 7000) {
            nivelHeroi = "Ouro";
        }
        else if (quantidadeXP > 7000 && quantidadeXP <= 8000) {
            nivelHeroi = "Platina";
        }
        else if (quantidadeXP > 8000 && quantidadeXP <= 9000) {
            nivelHeroi = "Ascendente";
        }
        else if (quantidadeXP > 9000 && quantidadeXP <= 10000) {
            nivelHeroi = "IMORTAL";
        }
        else if (quantidadeXP > 10000){
            nivelHeroi = "RADIAAAAAANTE";
        }
        console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!");
    }else{
        console.error("Quantidade inválida!!!!");
    }       
}