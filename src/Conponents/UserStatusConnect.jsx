import userConnectStatus from "../Hooks/userConnectStatus"

const UserStatusConnect = () => {

    //console.log("connectstatus")
    const isStatus = userConnectStatus();
    //console.log(isStatus) 

  return (
    <div>
      <h1>Meu exercício 3</h1>
      {isStatus ? (<p>Usuário está Online!</p>) : (<p>Usuário está OffLine!</p>) }                      
    </div>     
  )

}

export default UserStatusConnect