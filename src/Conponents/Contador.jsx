import {useReducer} from 'react'

//estado inicial
const estadoInicial = { contador: 0}

function reducer(estado, acao){

    switch(acao.tipo){
        case "incrementar":
            return{ contador: estado.contador + 1 };
            //break - quando não tem returno precisa de break;
        case "decrementar":
            return{ contador: estado.contador - 1 };
            //break;
        case "resetar":
            return{ contador: 0 };
            //break;
        default:
            throw new Error("Ação não localizada");
    }        
}

const Contador = () => {
    //Inicializar o useReducer com função modificadora e estado inicial (estadoInicial)
    const [estado, dispatch] = useReducer(reducer, estadoInicial)

  return (
    <div>
        <p>Contagem: {estado.contador}</p>
        <button onClick={() => dispatch({ tipo: "incrementar"})}>Incrementar</button>
        <button onClick={() => dispatch({ tipo: "decrementar"})}>Decrementar</button>
        <button onClick={() => dispatch({ tipo: "resetar"})}>Resetar</button>
    </div>
  )
}

export default Contador