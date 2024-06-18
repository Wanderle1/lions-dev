var coresFavoritas = ['preto', 'azul', 'verde']
var coresEspeciais = []
var corDoUsuario

console.log('Digite sua cor favorita')
process.stdin.once('data', function(data){
    corDoUsuario = data.toString().trim()
    processamento(coresFavoritas, corDoUsuario)
    process.exit()
})

function processamento(coresFavoritas, corDoUsuario){
    if(corDoUsuario == `${coresFavoritas[0]}; ${coresFavoritas[1]}; ${coresFavoritas[2]}`) {
        console.log('Sua cor favorita é uma das cores favoritas da turma')
    }else{
        console.log('A sua cor favorita é diferente, vamos adicionar á lista')
        coresEspeciais.push(corDoUsuario)
    }
console.log(`AS cores favoritas da classe são ${coresFavoritas}, sua cor favorita é ${coresEspeciais}.As Cores Favoritas possui ${coresFavoritas.length} elementos.`)
}   