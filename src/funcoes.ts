// //  interface com funções 
// interface ICursoProps {
//   id: string;
//   nome: string;
//   preco: number;
//   // DEFINIR APENAS A FUNÇÃO E O QUE ELA DEVE ESPERAR E RETORNAR
//   promocao: (preco: number) => void;
// }

// // function mostraPromocao(preco: number): void {
// //   console.log(`promoção no curso TypeScript - R$ ${preco}`)
// // }

// const novoCurso: ICursoProps = {
//   id: "1",
//   nome: "Curso TypeScript",
//   preco: 699.90,
//   promocao: (preco: number): void => {
//     console.log(`Promoção ativada o valor do curso agora é de R$ ${preco}`)
//   }
// }

// console.log(novoCurso)

// console.log(novoCurso.promocao(480))


interface ISomaProps {
  (valor1: number, valor2: number): void;
}

let somaNumeros: ISomaProps = (valor1, valor2): any => {
  console.log('Resultado before formated: ', valor1 + valor2)

  let imposto = 5.36
  let resultado = valor1 + valor2 + imposto

  let resultadoFormated = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return resultadoFormated;

}

let resultado = somaNumeros(1, 10)

console.log(`O valor da soma é de ${resultado}`)