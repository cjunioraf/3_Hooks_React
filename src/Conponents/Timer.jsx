import {useEffect, useState} from 'react'

const Timer = () => {

    const [segundos, setSegundos] = useState(0)

    //setInterval, setTimeout
    //useEffect tem uma função que permite limpar da memória as execuções.
    useEffect(() => {

        const intervalId = setInterval(() => {
            //prevSegundos - guarda o segundo anterior 
            setSegundos((prevSegundos) => prevSegundos + 1)                
            //console.log(segundos) 
        }, 1000); 
        //limpeza da memória do relógio 
        return () => clearInterval(intervalId);

    }, []) //array dependencias vazio

  return (
    <div>Timer: {segundos} segundos.</div>
  )
}

export default Timer