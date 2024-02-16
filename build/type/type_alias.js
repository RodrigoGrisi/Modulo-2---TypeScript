"use strict";
function acessar(uuid, nome) {
    if (nome === undefined) {
        console.log(`ID: ${uuid} `);
    }
    else {
        console.log(`ID: ${uuid} - Bem vindo ${nome}`);
    }
}
function logUser(uuid) {
    console.log("Conta referente o UUID: ", uuid);
}
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ", moeda);
}
comprarItem("BTC");
