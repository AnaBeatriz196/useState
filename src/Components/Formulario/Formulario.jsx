import { useState } from "react";

function Formulario(){
    const [nome, setNome]= useState('');
    const [idade, setIdade] = useState(0);
    const [senha, setSenha] = useState('')
    const [confirmarsenha, setConfirmarSenha] = useState('')
    const [mensage, setMensagem] = useState()

    return(
        <div>
            <form>
                Nome: <input type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}            
            />
            <br />
            Idade: <input type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            />
            <br />
            Senha: <input type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            <br />
            Confirmar Senha: <input type="text"
            value={confirmarsenha}
            onChange={(e) => {
                        setConfirmarSenha(e.target.value);

                        if(senha == confirmarsenha){
                            setMensagem
                        }
            }}
            />
            </form>

            

            
            <p> Nome digitado: {nome} <br />
            Idade Digitada {idade}</p>

            
        </div>
    )


}

export default Formulario;