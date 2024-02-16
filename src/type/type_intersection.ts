type TInfo = {
  id: number;
  nome: string;
  descricao?: string;
}

type TCategoria = {
  slug: string;
  quantidadeProduto: number;
}

type TLoja = {
  nomeLoja: string
}

type TProdutoInfo = TInfo & TCategoria & TLoja;

const novoProduto: TProdutoInfo = {
  id: 10,
  nome: 'Teclado Mecanico',
  slug: 'Telcado RedDrago v.2.5',
  quantidadeProduto: 50,
  nomeLoja: "Lojas Americanas"
}

console.log(novoProduto.nomeLoja);