// interface ItechsPoops {
//   id: string;
//   nome: string;
//   slug?: (string  )[];
// }

// let tecnologia1: ItechsPoops = {
//   id: '1',
//   nome: "PHP",
//   slug: ["Laravel", "CodeIgniter", "Symfony", "Zend", "Phalcon", "CakePHP", "Yii" ]
// }

interface IAlunos {
  alunos: string[]
}

let escola: IAlunos = {
  alunos: ["Rafaela", "Ronaldo", "Priscila", "Willian"]
}

escola.alunos.push("Roberto", "Amanda")


let sala2: string[] = [...escola.alunos, "Paulo", "Rogerio"]

interface ItechsPoops {
  id: string;
  nome: string;
  descricao?: string
}

interface INomesProps {
  tecnologia: ItechsPoops[];
}

let frontEnd: INomesProps = {
  tecnologia: [
    {
      id: "12",
      nome: "React JS",
      descricao: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web"
    },
    {
      id: '13',
      nome: "Vue JS",
      // descricao: "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
    },
    {
      id: '14',
      nome: "Angular",
      // descricao: "Mantido pela Google e apoiado por uma enorme comunidade de desenvolvedores em todo o mundo, o AngularJS é um dos frameworks JavaScript mais importantes quando falamos de desenvolvimento web."
    }
  ]
}

// function render() {

//   frontEnd.tecnologia.map((item) => {
//     console.log(`${item.nome}`)
//   })

// }

// render();

// console.log(frontEnd.tecnologia)