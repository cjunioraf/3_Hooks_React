import {useEffect, useState} from 'react'

const ExemploUseEffect = () => {
    // executar algo baseado em algo, mudança de um valor, carregamento da página,   
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`;        
    })

    // document.title = `Você clicou ${contador} vezes`;

  return (
    <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>Clique Aqui</button>
    </div>
  )
}

export default ExemploUseEffect