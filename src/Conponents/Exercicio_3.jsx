import useOnlineStatus from "../Hooks/useOnlineStatus"

const Exercicio_3 = ({userID}) => {

    if(!userID){
        return <div>ID do usuário deve ser informado!</div>
    }
    //console.log(userID)
    const statusUser = useOnlineStatus(userID);    
    //console.log(statusUser)
  return (  
    
    <div>
        {statusUser ? ( <p>Usuário {userID} está ONLINE!</p> ) : ( <p>Usuário {userID} está OFFLINE!</p> ) }
    </div>
  )
}

export default Exercicio_3