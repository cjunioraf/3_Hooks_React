import { useState, useEffect } from "react";

export default function useOnlineStatus(userID) {

    const [statusUser, setStatusUser] = useState(false);
    const [usuario, setUsusario] = useState(null); 
    //const [statusEf, setStatusEf] = useState(false);         

    useEffect(() => {
        //função consultar API
        const buscaStatusUser = async() => {

            const respStatus = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)                          
            const dadosUser = await respStatus.json();            
            //console.log(dadosUser)
            setUsusario(dadosUser);  
            //setStatusEf(true);                      
        } 

        if(userID){        
            buscaStatusUser();
        } 
        
        if (usuario){

            if(usuario.name){                
                //console.log(usuario.name)
                setStatusUser(true);                                 
            }
        }     
        
    }, [userID]);                
    //console.log(statusUser)    
    return statusUser;
}