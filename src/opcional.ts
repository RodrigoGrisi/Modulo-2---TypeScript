
interface IcadastroProps {
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: IcadastroProps = {
  nome: "Rodrigo",
  email: "Rodricosta1995@gmail.com",
  status: true
}

// console.log(novoUsuario)

function novoUser(user: IcadastroProps): void {
  console.log(user.status, user.email)

}

novoUser({email: "Rodrigo@gmail.com", status: true})