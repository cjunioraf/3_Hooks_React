import { useState, createContext } from "react";
//cria o contexto
const MeuContexto = createContext();
//cria o provedor 
const MeuContextoProvider = ({ children }) => {

    const [mensagem, setMensagem] = useState("Mensagem inicial!");

    const valorDoContexto = {
        mensagem, 
        setMensagem,
    };

    return(
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    );
}

export { MeuContexto, MeuContextoProvider };
