let nota1 = parseFloat ( prompt ("informe a primeira nota:"))
let nota2 = parseFloat ( prompt ("informe a segunda nota:"))
let nota3 = parseFloat ( prompt ("informe a terceira nota:"))
let nota4 = parseFloat ( prompt ("informe a quarta nota:"))

let media = ( nota1 + nota2 + nota3 + nota4)/4

console. log("A media do aluno e:" + media)

if(media >= 7) {
    console. log("APROVADO")
}
else if (media < 7 && media >=5){
    console.log("recuperacao")
}
else{
    console.log("reprovado")
}
 


