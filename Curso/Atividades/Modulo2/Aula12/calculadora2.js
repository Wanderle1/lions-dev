function calculadora(num1,num2,operador){
   switch (operador){
    case '-':
        return num1 - num2
        break;
    case '+':
        return num1 + num2
        break;
    case '*':
        return num1 * num2
        break;
    case '/':
        return num1 / num2
        break;
    default:
        console.log('o operador que você digitou é invalido')
        break;
   }
}
let resultado = calculadora(4,4,'+')
console.log(resultado)