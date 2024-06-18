var nome = ''
console.log('Digite seu nome aqui')
process.stdin.on('data', function(data) {
var nome = data.toString()
var saudacao = 'Olá,' + nome + 'Bom dia'
console.log(saudacao)
process.exit()
})