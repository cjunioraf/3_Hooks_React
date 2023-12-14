import useWindowSize from "../Hooks/useWindowSize"

const DisplayWinSize = () => {
    // desestrutura os objetos width e height da useWindowSize
    const {width, height} = useWindowSize();
    
  return (
    <div>
        <p>A largura da janela é {width} </p>
        <p>A altura da janela é {height} </p>
    </div>
  )
}

export default DisplayWinSize