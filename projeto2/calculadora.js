const prompt = require('prompt-sync')();
let quantidadeVitoria;
let quantidadeDerrota;

console.log("Bem-vinde a Calculadora de Partidas Rankeadas!");
quantidadeVitoria = parseInt(prompt("Informe quantas VITÓRIAS você já tem: "), 10);
quantidadeDerrota = parseInt(prompt("Agora informe a quantidade de DERROTAS: "), 10);
let saldoTotal = calcularSaldoRankeada(quantidadeVitoria, quantidadeDerrota)
let elo = rankeJogador(saldoTotal);
resultado(saldoTotal, elo);


function calcularSaldoRankeada (quantidadeVitoria, quantidadeDerrota){
    let saldoTotal = quantidadeVitoria - quantidadeDerrota;
    return saldoTotal;
}

function rankeJogador(saldoTotal){
    let elo; 
    if (saldoTotal > 0 && saldoTotal <= 10) {
        return elo = "Ferro!";
    }
    else if (saldoTotal > 10 && saldoTotal <= 20) {
        return elo = "Bronze!";
    } 
    else if (saldoTotal > 20 && saldoTotal <=50) {
        return elo = "Parta!";
    }
    else if (saldoTotal > 50 && saldoTotal <= 80){
        return elo = "Ouro!";
    }
    else if (saldoTotal > 80 && saldoTotal <= 90){
        return elo = "Diamante!";
    }
    else if (saldoTotal > 90 && saldoTotal <= 100){
        return elo = "Lendário!";
    }
    else if (saldoTotal > 100){
        return elo = "IMOOOOOORTAL!!!";
    }
}

function resultado(saldoTotal, elo){
    console.log("O herói tem o saldo de " + saldoTotal + " vitórias e está no nível de " + elo);
}