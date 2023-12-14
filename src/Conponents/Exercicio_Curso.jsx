import {useEffect, useMemo, useState} from 'react'

//Exercicio 1 
const Userinfo = ({userInfo}) => {

    useEffect(() => {
        //document.title = userInfo.name + '-' + userInfo.email   
        document.title = `${userInfo.name} - ${userInfo.email}`;    
    }, [userInfo])

    return (
        <div>
            <h1>Nome: {userInfo.name}</h1>
            <p>Email: {userInfo.email}</p>
        </div>
    );     
}

//Exercicio 2
const fibonnaci = (num) => {
    //console.log(num);
    if(num <= 1){
        return num;
    }

    const resut =  fibonnaci(num - 1) + fibonnaci(num - 2);
    //console.log(resut); 
    return resut;
}
//Exercicio 2
const FibCalculator = ({numero}) => {

    //console.log(numero)
    const fibResult = useMemo(() => {
        return fibonnaci(numero);
      }, [numero]);
    //console.log(fibResult)
    return(
        <div>
            <p>Fibonnaci de {numero} é {fibResult} </p>
        </div>
    )
}
//Exercicio 3 navigator.onLine VERIFICA SE ESTÁ ONLINE O USUÁRIO
const useOnlineStatus2 = () => {

    const [isOnline, setIsOnLine] = useState(navigator.onLine)

    useEffect(() => {
        //função 
        const handleOnline = () => setIsOnLine(true);
        const handleOffline = () => setIsOnLine(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        //lipeza de memória
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }                

    }, [])

    return isOnline;
} 
//Exercicio 3
const OnlineStatusIndicador = () => {

    const isOnline = useOnlineStatus2();

    return (        
        <div>
            <p>Usuário está Online {isOnline} </p>
        </div> 
    )
}

const Exercicio_Curso = () => {

   const userInfo = {name:'Clécio', email:'clecio.ferreira@gmail.com'}

  return (
    <div>
        <h1>Exercício 1</h1>
        <Userinfo userInfo={userInfo}/>
        {/* <h1>Exercício 2</h1>
        <FibCalculator numero={7}/> */}
        {/* <h1>Exercício 3</h1>
        <OnlineStatusIndicador /> */}
    </div>
  )
}

export default Exercicio_Curso