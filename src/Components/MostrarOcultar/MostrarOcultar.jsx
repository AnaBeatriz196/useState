import { useState } from "react";

function MostrarOcultar(){
    const[visivel, setVisivel] = useState(true);

    return(
        <div>
            <button onClick={() => setVisivel (!visivel)}>
                {visivel ? 'Ocultar' : 'Mostrar'}texto
            </button>

            {visivel &&<p> Esse texto aparece e desaparece</p>}

        </div>
    )
}

export default MostrarOcultar;