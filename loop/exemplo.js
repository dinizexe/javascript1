

for(let num = 0; num<= 10; num++){
    console. log("Eu vim Barganhar " + num)
}

let salario = 1000

while(salario < 5000) {
    salario = 100 + salario
    salario += 100

    console. log("O salario é de r$: " + salario)
}

//Do while = loop condicional
let aumento = 100

do {
    console. log("esse é o seu saldo: " + aumento)
    aumento += 100
    //aumento = 100 + aumento

} while (aumento < 5000)




//Array
let fruta =["banana", "laranja", "maça", "pitaya", "melancia", "uva"]

// console.log(fruta[3])
// console.log(fruta[5])


//forEach => percorre uma lista
frutas.forEach(qualquer =>{
    console.log("a fruta é: " + qualquer)
})

//percorrer uma lista com for
for (let indice = 0; indice< frutas.length; indice++){
    console. log(frutas[indice])

    if(frutas[indice]== "uva"){
        console. log("eu gosto de" + frutas[indice])
    }
}




