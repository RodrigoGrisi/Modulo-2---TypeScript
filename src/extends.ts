

interface IJogoProsp {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: IJogoProsp = {
  id: '1',
  nome: 'Lef 4 Dead 2',
  descricao: 'Jogo de ação e tiro',
  plataforma: ["PS5", "PC"]
}

// console.log(left4dead)

interface Dlc extends IJogoProsp {
  OriginalGame: IJogoProsp
  changes: string
}


let changesLeft4dead: Dlc = {
  OriginalGame: left4dead,
  id: '2',
  nome: 'Lef 4 dead',
  changes: "4 novos mapas para jogar online",
  descricao: "Jogo de ação e tiro",
  plataforma: ["Pc", "PS5"],
}

console.log(changesLeft4dead)