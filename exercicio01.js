
let login = prompet ("informe seu nome:")
let senha = prompet ("informe sua senha:")

if (login == "admin" && senha == "senha123") {
    console .log ("Login bem sucedido!")
} else {
    console .log ("Você não tem permissão para esse acesso")
}       