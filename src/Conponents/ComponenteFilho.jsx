import { useContext } from "react";
import { MeuContexto } from "../Contexts/MeuContexto";

const ComponenteFilho = () => {

  const {mensagem, setMensagem} = useContext(MeuContexto);  

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem('Nova mensagem aqui!')}>Alterar Mensagem</button>
    </div>  
  )
}


export default ComponenteFilho