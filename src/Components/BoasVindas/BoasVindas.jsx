function BoasVindas(){
    return(
        <div>
            <h1 id='txtMensagem'> 
                Bem-vindo ao React!
            </h1>
            <button onClick={alterarTexto}> Alterar Mensagem </button>
        </div>
    )
}

function alterarTexto(){
    document.getElementById("txtMensagem").innerHTML = "Você alterou a mensagem"
}

export default BoasVindas;