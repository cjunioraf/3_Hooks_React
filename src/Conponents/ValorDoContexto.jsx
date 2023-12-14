import { useContext } from 'react'
import { MeuContexto } from '../Contexts/MeuContexto';

const ValorDoContexto = () => {
    //aqui está pegando a mensagem que está no componente MeuContexto através do useContext
    const { mensagem } = useContext(MeuContexto);

  return <div>O valor do contexto é {mensagem} </div>;  
}

export default ValorDoContexto