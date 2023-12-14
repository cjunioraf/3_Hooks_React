import {useEffect} from 'react'

const Exercicio_1 = ({nome, email}) => {

    if(!nome){
        return null; 
    }

    useEffect(() =>{
        document.title = nome + '/' + email;     
    }, [])

  return (
    <div>
        <p>{nome} - {email}</p>
    </div>
  )
}

export default Exercicio_1