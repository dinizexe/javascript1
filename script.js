window, alert("ola")
//confir. pergunta com ok/ cancela retorna um true ou false
window.confirm("jonas vai casar")
//propet- pega o texto da tela
window.prompt("Qual o seu nome?")

/* 
comentario em texto
*/

console.log("multi midia?")

let nome = prompt("informe o seu nome?")

// console.log("bem vindo" + nome)

let numero1 = Number.parseInt(prompt(" digte o primeiro numero"))
let numero2 = Number.parseInt(prompt(" digte o segundo numero"))

let resultado = numero1 + numero2

console.log(resultado)


let idede = window.prompt("qual sua idade?")

if (idade >= 18) {
    console.log("maior de idade! dalheee")
} else {
    console.log("você e menor de idedade")
}

switch (idade) {
    case "18":
        console.log("maior de idade! dalheee")
        break;

    case "27":
        console.log("esta perto dos 30")
        break;

    default:
        console.log("nada a dizer")
        break;
}