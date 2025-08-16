console.log('Programa iniciado');
const prompt = require('prompt-sync')();

let partidasGanhas = parseInt(prompt("Quantas partidas você ganhou? "));

let partidasPerdidas = parseInt(prompt("Quantas partidas você perdeu? "));

function resultadoPartidas(partidasGanhas, partidasPerdidas){
    let saldoVitorias = partidasGanhas - partidasPerdidas;
    return saldoVitorias;
}
let saldoVitorias = resultadoPartidas(partidasGanhas, partidasPerdidas)

function eloRankeado(saldoVitorias){
    let nivel;
    if (saldoVitorias <= 10 ){
        nivel = "Ferro"
    } else if (saldoVitorias <=20 ){
        nivel = "Bronze"
    }else if (saldoVitorias <=50){
        nivel = "Prata"
    }else if (saldoVitorias <=80){
        nivel = "Ouro"
    }else if (saldoVitorias <=90){
        nivel = "Diamante"
    }else if (saldoVitorias <=100){
        nivel = "Lendário"
    }else if (saldoVitorias >=101){
        nivel = "Imortal"
    }
    return nivel
}
let nivel = eloRankeado(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível ${nivel}`);