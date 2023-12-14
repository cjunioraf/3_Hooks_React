import {useMemo} from 'react'

const Exercicio_2 = ({numero}) => {

    if(!numero){
        return <p>Número do cálculo deve ser informado!</p>
    }
    //console.log(numero)
    const resFibonacci = useMemo(() =>{
        //console.log(numero)
        return Fibonacci(numero);
    }, [numero]) 

  return (
    <div>Valor do Calculo é: {resFibonacci}</div>
  )
}

const Fibonacci = (num) =>{
    //console.log(num)
    return (((num + 5) * 12345.54) / num) 
}

export default Exercicio_2