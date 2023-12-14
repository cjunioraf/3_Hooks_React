import './App.css'
import CalculoPesado from './Conponents/CalculoPesado'
import ComponenteFilho from './Conponents/ComponenteFilho'
import Contador from './Conponents/Contador'
import ContadorCallBack from './Conponents/ContadorCallBack'
import Container from './Conponents/Container'
import DisplayWinSize from './Conponents/DisplayWinSize'
import ExemploUseEffect from './Conponents/ExemploUseEffect'
import Exercicio_1 from './Conponents/Exercicio_1'
import Exercicio_2 from './Conponents/Exercicio_2'
import Exercicio_3 from './Conponents/Exercicio_3'
import Exercicio_Curso from './Conponents/Exercicio_Curso'
import FibCalculator from './Conponents/FibCalculator'
import PerfilDeUsuario from './Conponents/PerfilDeUsuario'
import Timer from './Conponents/Timer'
import UserStatusConnect from './Conponents/UserStatusConnect'
import ValorDoContexto from './Conponents/ValorDoContexto'
import { MeuContextoProvider } from './Contexts/MeuContexto'

function App() {

  return (
    <> 
      {/* 8.1 - hook - useEffect  */}
      <ExemploUseEffect />
      <Timer />
      {/* 8.2 - hook - useContext - utilizado em app de pequeno e médio porte precisa transferir o estado entre componentes*/}
      {/* criei a pasta Contexts para utilizar o useContext */}
      <MeuContextoProvider>
        <div>
          <ComponenteFilho />
          <ValorDoContexto />
        </div>
      </MeuContextoProvider>
      {/* 8.3 - hook - useReducer parecido com useState, mas estados + complexos - componente Contador.jsx*/}
      <Contador />      
      {/* 8.4 - Custom hook */}
      <DisplayWinSize />
      {/* 8.5 - Slots e children props */}
      <Container>
        <h1>Título da seção</h1>
        <p>Meu subtítulo</p>
        <Contador />
      </Container>
      {/* 8.6 - Sincronizar o estado com props */}
      {/* props => componente => chamada de API => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1}/>     
      <PerfilDeUsuario usuarioId={2}/>
      {/* 8.7 - Hooks - useMemo e useCallback */}
      <CalculoPesado numero={7}/>
      <ContadorCallBack />
      {/* Exercício 1 meu */}
      <Exercicio_1 nome="OTTO" email="OTTO.FERREIRA@GMAIL.COM"/>
      {/* Exercício 2 meu */}
      <Exercicio_2 numero={7}/>
      {/* Exercício 3 meu */}
      <Exercicio_3 userID={2}/>
      {/* Exercício do professor */}
      <Exercicio_Curso/>
      {/* Exercício 2 meu refeito */}
      <FibCalculator numero={8}/>
      {/* Exercício 3 meu refeito */}
      <UserStatusConnect />

    </>
  )
}

export default App
