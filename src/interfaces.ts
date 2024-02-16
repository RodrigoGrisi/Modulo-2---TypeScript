// let loja: object;

// loja = {
//   nome: "BK",
//   endereco: "Rua x",
//   status: true,
// }

interface ILojaprops {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: ILojaprops = {
  nome: "Loja Burguer K",
  endereco: "Rua x",
  status: true,
}

let arraynew = [{ ...BurguerK }, { nome: "Rancho do Burger", enderco: "Rua Y", status: false }]

// console.log(arraynew)

// console.log(BurguerK)

function novaLoja({ nome, endereco, status }: ILojaprops): void {
  console.log(`Loja ${nome} criada com sucesso`)
  console.log(`Endereço ${endereco} `)
  console.log(`Status da loja: ${status}`)
}

novaLoja({ nome: "RedBurguer", endereco: "Rua Interface", status: false })
console.log("---------------")
novaLoja({ nome: "Rei do burguer", endereco: "Av Inocencio serafico", status: true })
console.log("---------------")
novaLoja({ nome: "MilkBurguer", endereco: "Centro de Itapevi", status: true })

