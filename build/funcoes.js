"use strict";
// //  interface com funções 
// interface ICursoProps {
//   id: string;
//   nome: string;
//   preco: number;
//   // DEFINIR APENAS A FUNÇÃO E O QUE ELA DEVE ESPERAR E RETORNAR
//   promocao: (preco: number) => void;
// }
let somaNumeros = (valor1, valor2) => {
    console.log('Resultado before formated: ', valor1 + valor2);
    let imposto = 5.36;
    let resultado = valor1 + valor2 + imposto;
    let resultadoFormated = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return resultadoFormated;
};
let resultado = somaNumeros(1, 10);
console.log(`O valor da soma é de ${resultado}`);
