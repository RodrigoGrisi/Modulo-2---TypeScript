
interface IProductProps {
  readonly id: string;
  readonly nome: string;
  descricao: string;
}


let produto1: IProductProps = {
  id: "1",
  nome: "Tenis Nike",
  descricao: "Super tenis descolado"
}

console.log(produto1.nome)
console.log(produto1.id)