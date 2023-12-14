import { useState, useEffect } from "react"
//useState - manipular os dados 
//useEffect - chamar a API
const PerfilDeUsuario = ({usuarioId}) => {

    const [usuario, setUsuario] = useState(null); 
    // console.log(usuarioId)
    useEffect( () => {
        //Função para buscar os dados da API, async esperando dado da API pode vir rápido como pode demorar por isso do async que é javascript puro. 
        const buscarUsuario = async() => {
            //await sempre tem que existir quando tu tem uma função async.    
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`) 
            const dadosUsuario = await resposta.json();            
            // console.log(dadosUsuario);
            setUsuario(dadosUsuario);
            // console.log(usuario)
        }

        if(usuarioId){
            buscarUsuario();            
        }

    }, [usuarioId]) //irá executar o useEffect apenas quando o usuarioId for chamado, 1 vez só.

  return (    
    <>
        {usuario ? (
            <div>
                <h1>{usuario.name}</h1>
                <p>{usuario.email}</p>
            </div>
        ) : (

            <div>
                <p>Carregando dados do usuário...</p>
            </div>
        )}
    </>
  )
}

export default PerfilDeUsuario