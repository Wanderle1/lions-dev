const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let funcionarios = []
let maiorSalario = 0
let fum = ''


exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionário com maior salário
    4. Remover Funcionario
    5. Editar algum dado dos Funcionario
    6. Sair
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
    case '1':
    cadastrarFuncionario()
    break
    case '2':
    listarFuncionarios()
    break
    case '3':
    exibirMaiorSalario()
    break
    case '4':
    removerFuncionarios()
    break
    case '5':
    editar()
    break
    case '6':
    rl.close()
    break
    default:
    console.log('Opção inválida, tente novamente.')
    exibirMenu()
    break
    }
    })
    }

    function cadastrarFuncionario() {
        rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
        rl.question('Digite o salário do funcionário: ', (salario) => {
        funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
        console.log('Funcionário cadastrado com sucesso!')
        exibirMenu()
        })
        })
        })
        }


        function listarFuncionarios() {
            if(funcionarios.length == 0){
                console.log('nao tem nenhum funcionario')
				exibirMenu()
            }else{
                console.log(funcionarios)
            }
            exibirMenu()
        }


            function exibirMaiorSalario() {
                if(funcionarios.length == 0){
					console.log('não tem nenhum funcionario')
					exibirMenu()
				}else{
					for(let i = 0; i < funcionarios.length; i++){
						if(funcionarios[i].salario > maiorSalario){
						maiorSalario = funcionarios[i].salario
						if(maiorSalario == funcionarios[i].salario ){
							fum = funcionarios[i].nome
						}
						exibirMenu()
						}
					}
					console.log(`O Funcionario com maior Salario é ${fum} que recebe ${maiorSalario}`)
					exibirMenu()
				}
            }

            function removerFuncionarios(){
                if(funcionarios.length == 0){
                    console.log('Não a nenhum funcionario cadastrado')
                    exibirMenu()
                }else{
                    console.log('listando funcionarios')
                    funcionarios.forEach((funcionarios, index) =>{
                        console.log(`${index + 1}. ${funcionarios.nome}`)
                    })
                    rl.question('Digite o numero que vc quer remover ', (numero) =>{
                        if(numero > 0 && numero <= funcionarios.length){
                            funcionarios.splice(numero - 1, 1)
                            console.log('Elemento removido com sucesso')
                            exibirMenu()
                        }else{
                            console.log('Número Invalido, Tente novamente')
                            removerFuncionarios()
                        }
                    } )
                }
            }

            function editar(){
                if(funcionarios.length == 0){
                    console.log('Não a funcionarios cadastrados')
                    exibirMenu()
                }else{
                    console.log('listando funcionarios')
                    funcionarios.forEach((funcionarios, index) =>{
                        console.log(`${index +1}. ${funcionarios.nome}`)
                    })
                    rl.question('Digite o número do funcionario que deseja editar ', (numero) =>{
                        if(numero > 0 && numero <= funcionarios.length){
                            rl.question('Digite o nome do funcionario', (nome) =>{
                                rl.question('Digite o cargo do funcionario', (cargo) =>{
                                    rl.question('Digite o salario do funcionario', (salario) =>{
                                        funcionarios[numero -1] ={
                                            nome,
                                            cargo,
                                            salario
                                        }
                                        console.log('Editado com sucesso')
                                        exibirMenu()
                                    })
                                })
                            })
                        }else{
                            console.log('Número invalido, Tente novamente')
                            editar()
                        }
                    })
                }
            }