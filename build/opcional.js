"use strict";
const novoUsuario = {
    nome: "Rodrigo",
    email: "Rodricosta1995@gmail.com",
    status: true
};
// console.log(novoUsuario)
function novoUser(user) {
    console.log(user.status, user.email);
}
novoUser({ email: "Rodrigo@gmail.com", status: true });
