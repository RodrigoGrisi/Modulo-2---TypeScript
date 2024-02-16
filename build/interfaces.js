"use strict";
// let loja: object;
const BurguerK = {
    nome: "Loja Burguer K",
    endereco: "Rua x",
    status: true,
};
let arraynew = [Object.assign({}, BurguerK), { nome: "Rancho do Burger", enderco: "Rua Y", status: false }];
// console.log(arraynew)
// console.log(BurguerK)
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço ${endereco} `);
    console.log(`Status da loja: ${status}`);
}
novaLoja({ nome: "RedBurguer", endereco: "Rua Interface", status: false });
console.log("---------------");
novaLoja({ nome: "Rei do burguer", endereco: "Av Inocencio serafico", status: true });
console.log("---------------");
novaLoja({ nome: "MilkBurguer", endereco: "Centro de Itapevi", status: true });
