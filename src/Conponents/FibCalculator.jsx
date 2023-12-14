import {useMemo} from 'react'

const fibonnaci = (num) => {

    if(num <= 1 ){
        return num;
    }
    // formula -> Fn = (Fn - 1) + (Fn - 2)
    const resut =  fibonnaci(num - 1) + fibonnaci(num - 2);    
    //console.log(resut);
    return resut;   
}

const FibCalculator = ({numero}) => {

    //console.log(numero) 
    const fibResult = useMemo(() => fibonnaci(numero), [numero]);         

  return (
    <div>
        <h1>Meu exercício 2</h1>
        <p>Fibonnaci de {numero} é {fibResult} </p>
    </div>
  )
}

export default FibCalculator