var nota

console.log('Digite sua nota')
process.stdin.once('data', function(data){
    nota = parseInt(data.toString().trim())
    processamento(nota)
    process.exit()
})

function cll(nota){
    switch (true){
        case (nota >= 90 && nota <= 100):
            return 'A'
        case (nota >= 80 && nota <= 89):
            return 'B'
        case (nota >= 70 && nota <= 79):
            return 'C'
        case (nota >= 60 && nota <= 69):
            return 'D'
        case (nota >= 0 && nota <= 59):
            return 'F'
   }
}

function processamento(nota){
    if (cll(nota) == 'A' || cll(nota) == 'B' || cll(nota) == 'C'){
        console.log(`Parabéns,sua nota é ${cll(nota)}`)
    }else if(cll(nota) == 'D' || cll(nota) == 'F'){
        console.log(`Que pena,sua nota é ${cll(nota)}`)
    }else{
        console.log('Nota Inválida')}   
}