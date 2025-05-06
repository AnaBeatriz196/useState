function Header(props){

    let mensagem = 'Bem-Vindo,' + props.nome
    
    if(props.funcao == 'admin'){
        mensagem += ', você é administrador do sistema.'
    }

    function saudacao(nome){
        alert(`Olá ${mensagem}`)
    }

    return (
        <div>
           <h1>{mensagem}</h1>
           <button onClick={() => saudacao(props.nome)}> Comprimentar </button> 
        </div>
    
    );

}

export default Header;