import {useMemo} from 'react'

const CalculoPesado = ({numero}) => {
    //com o useMemo o calculo será feito apenas uma vez se o parametro numero for sempre o mesmo valor, caso mude ele recalcula, guarda na memória o resultado final.
    const resultCalcPesado = useMemo(() => {
        return Operacao(numero);
    }, [numero]) //[numero] -> só executa o useMemo se tiver valor no parâmetro numero. 

  return (
    <div>Resultado CP = {resultCalcPesado}</div>
  )
}

const Operacao = (numero) => {
    // console.log('Realizando operação pesada');
    return (numero * 1000);
}

export default CalculoPesado