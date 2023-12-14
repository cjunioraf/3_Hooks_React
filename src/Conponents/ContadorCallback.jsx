import React, {useCallback, useState} from 'react'

//React.memo != useMemo
//memo = memoriza componente
//useMemo = memoriza valores
const Botao = React.memo(({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;            
});

const ContadorCallBack = () => {

    const [contador, setContador] = useState(0);

    //função incrementar
    const incrementar = useCallback(() => {        
        setContador((contadorAnterior) => contadorAnterior + 1);
        //console.log(contador);
    }, [])    

  return (
    <div>
        <p>Contagem: {contador}</p>
        <Botao onClick={incrementar}>Incrementar Botão</Botao>        
        {/* <button onClick={incrementar}>Incrementar</button> */}
    </div>
  )
}

export default ContadorCallBack