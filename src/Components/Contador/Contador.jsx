import { useState } from "react";

function Contador(){
    const[contador, setContador] = useState(0);

    return(
        <div>
            <h2>Valor atual: {contador} </h2>
            <button onClick={() => setContador(contador + 1)}> Incrementar </button>
            <button onClick={() => setContador(contador - 1)}> Decrementar </button>
            <button onClick={() => setContador(0)}> Resetar </button>
        </div>

    );

}

export default Contador;