import { useState, useEffect } from "react";

export default function useWindowSize(){
 
    const [winSize, setWinSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight, 
    });

    useEffect( () => {
        //função q altera os valores
        function handleResize(){

            setWinSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        //javascript puro - evento que despara a função handleResize  
        window.addEventListener('resize', handleResize)

        handleResize();
        //limpar da memória
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return winSize; 

}