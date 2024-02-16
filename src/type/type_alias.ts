
type Uuid = number | string | null

function acessar(uuid: Uuid, nome?: string) {

  if (nome === undefined) {
    console.log(`ID: ${uuid} `)
  } else {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`)
  }

}

function logUser(uuid: Uuid){
  console.log("Conta referente o UUID: ", uuid)
}

// acessar("ASRFGG%", "")
// logUser("RodrigoGrisi")

type moedas = "BRL" | "EUR" | "USD" | "BTC"

function comprarItem(moeda: moedas){
  console.log("Comprando com a moeda: " , moeda)
}

comprarItem("BTC")