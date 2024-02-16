"use strict";
// interface ItechsPoops {
//   id: string;
//   nome: string;
//   slug?: (string  )[];
// }
let escola = {
    alunos: ["Rafaela", "Ronaldo", "Priscila", "Willian"]
};
escola.alunos.push("Roberto", "Amanda");
let sala2 = [...escola.alunos, "Paulo", "Rogerio"];
let frontEnd = {
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
};
// function render() {
//   frontEnd.tecnologia.map((item) => {
//     console.log(`${item.nome}`)
//   })
// }
// render();
// console.log(frontEnd.tecnologia)
