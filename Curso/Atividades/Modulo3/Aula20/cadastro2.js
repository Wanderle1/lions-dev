console.log('Teste do Github')

const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let Jogos = []


exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar Jogos
    2. Listar todos os Jogos Cadastrados
    3. Editar Algum Jogo Cadastrado
    4. Remover Algum Jogo Cadastrado
    5. Sair
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
    case '1':
    cadastrarJogo()
    break
    case '2':
    listarJogos()
    break
    case '3':
    editar()
    break
    case '4':
    remover()
    break
    case '5':
    rl.close()
    break
    default:
    console.log('Opção inválida, tente novamente.')
    exibirMenu()
    break
    }
    })
    }

    function cadastrarJogo(){
        rl.question('Digite o Nome do Jogo: ', (nome) => {
            rl.question('Digite o Estilo do Jogo: ', (estilo) => {
                rl.question('Digite o Ano de lançamento do jogo: ', (ano) => {
                    Jogos.push({nome: nome, estilo: estilo, ano: parseInt(ano)})
                    console.log('Cadastrado com Sucesso')
                    exibirMenu()
                })
            })
        })
    }

    function listarJogos(){
        if(Jogos.length == 0){
            console.log('Não a nenhum jogo Cadastrado')
            exibirMenu()
        }else{
            console.log(Jogos)
            exibirMenu()
        }
    }

    function editar(){
        if(Jogos.length == 0){
            console.log('Não a nenhum jogo Cadastrado')
            exibirMenu()
        }else{
            console.log('Listando Jogos')
            Jogos.forEach((Jogos, index) => {
                console.log(`${index +1}. ${Jogos.nome}`)
            })
            rl.question('Digite o numero Do jogo que Deseja Editar', (numero) => {
                if(numero > 0 && numero <= Jogos.length){
                    rl.question('Digite o nome do jogo', (nome) => {
                        rl.question('Digite o Estilo de Jogo', (estilo) => {
                            rl.question('Digite o ano de lançamento do jogo', (ano) => {
                                Jogos[numero -1]={
                                    nome,
                                    estilo,
                                    ano
                                }
                                console.log('Editado com Sucesso')
                                exibirMenu()
                            })
                        })
                    })
                }else{
                    console.log('Numero Invalido, Tente Novamente')
                    editar()
                }
            })
        }
    }

    function remover(){
        if(Jogos.length == 0){
            console.log('Não a nenhum jogo cadastrado')
            exibirMenu()
        }else{
            console.log('listando Jogos Cadastrados')
            Jogos.forEach((Jogos, index) =>{
                console.log(`${index =1}. ${Jogos.nome}`)
            })
            rl.question('Digite o numero do Jogo que vc Quer Remover', (numero) => {
                if(numero > 0 && numero <= Jogos.length){
                    Jogos.splice(numero -1, 1)
                    console.log('Removido com Sucesso')
                    exibirMenu()
                }else{
                    console.log('Numero invalido,Tente novamente')
                    remover()
                }
            })

        }
    }

