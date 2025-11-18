let valorTotal = parseFloat(prompt("informe o valor total da compra: "))
let desconto

if(valorTotal <= 100){
    desconto = 0
    console. log ("ö valor de desconto foi: " + desconto)
}
else if (valorTotal <+ 2000){
    desconto= 0.1
    console. log("o valor de desconto foi: " + (desconto*100) + "%")
}

else{
    desconto = 0.2
    console. log("o valor de desconto foi: "+ (desconto*100) + "%'")
}

let valorFinal = valorTotal - (valorTotal*desconto)
 console.log("o valor final da compra com desconto: r$ " + valorFinal.toFixed(2))