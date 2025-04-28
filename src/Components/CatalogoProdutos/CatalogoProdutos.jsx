import { useState } from "react";

const CatalogoProdutos = () => {
    const [produtos] = useState([
      { id: 1, nome: "Notebook", preco: 3500, disponivel: true },
      { id: 2, nome: "Smartphone", preco: 2500, disponivel: false },
      { id: 3, nome: "Fone de Ouvido", preco: 300, disponivel: true },
      { id: 4, nome: "Monitor", preco: 1200, disponivel: false }
    ]);
  
    const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);
  
    const alternarFiltro = () => {
      setMostrarDisponiveis(!mostrarDisponiveis);
    };
  
    const produtosFiltrados = mostrarDisponiveis
      ? produtos.filter(produto => produto.disponivel)
      : produtos;
  
    return (
      <div>
        <h2>Catálogo de Produtos</h2>
        <button onClick={alternarFiltro}>
          {mostrarDisponiveis ? "Mostrar Todos" : "Mostrar Apenas Disponíveis"}
        </button>
        <ul>
          {produtosFiltrados.map(produto => (
            <li
              key={produto.id}
              style={{ color: produto.disponivel ? 'green' : 'red' }}
            >
              {produto.nome} - {produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })} - {produto.disponivel ? "Disponível" : "Indisponível"}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CatalogoProdutos;