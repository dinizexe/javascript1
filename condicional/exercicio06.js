let anoNascimento = parseInt (prompt ("Digite o ano de nascimento:"))

let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >= 18){
    console. log("maior de idade")
    console.log("sua idade e" + idade)
}
else{
    console. log("menor de idade")
    console.log ("sua idade e: ") + idade
}