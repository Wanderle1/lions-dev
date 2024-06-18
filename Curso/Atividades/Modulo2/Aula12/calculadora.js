function calculadora(num1, num2, operador){
    if (operador == '+'){
        return num1 + num2
    }else if(operador == '-'){
        return num1 - num2
    }else if(operador == '*'){
        return num1 * num2
    }else if(operador == '/'){
        return num1 / num2
    }else{
        console.log('o operador que você digitou é invalido')
    }
}
let resultado = calculadora(8,4,'2')
console.log(resultado)
