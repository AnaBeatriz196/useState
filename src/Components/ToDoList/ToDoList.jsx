import React, { useState } from "react";

const prioridadeOrdem = { Alta: 1, Média: 2, Baixa: 3 };

export default function ToDoList() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [prioridade, setPrioridade] = useState("Alta");
  const [filtro, setFiltro] = useState("Todas");

  function adicionarTarefa() {
    if (titulo.trim() === "") return;
    const nova = {
      id: tarefas.length + 1,
      titulo,
      prioridade,
      concluida: false,
    };
    setTarefas([...tarefas, nova]);
    setTitulo("");
    setPrioridade("Alta");
  }

  function alternarConclusao(id) {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  const tarefasFiltradas = tarefas.filter((t) =>
    filtro === "Todas"
      ? true
      : t.prioridade.toLowerCase() === filtro.toLowerCase()
  );

  const tarefasOrdenadas = [...tarefasFiltradas].sort(
    (a, b) => prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade]
  );

  const concluidas = tarefas.reduce((soma, t) => soma + (t.concluida ? 1 : 0), 0);
  const pendentes = tarefas.length - concluidas;
  const primeiraPendente = tarefas.find((t) => !t.concluida);
  const todasConcluidas = tarefas.length > 0 && tarefas.every((t) => t.concluida);
  const temAlta = tarefas.some((t) => t.prioridade === "Alta");

  return (
    <div>
      <h2>Gerenciador de Tarefas</h2>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
        <option>Alta</option>
        <option>Média</option>
        <option>Baixa</option>
      </select>
      <button onClick={adicionarTarefa}>Adicionar</button>

      <div>
        <p>Filtro:</p>
        <button onClick={() => setFiltro("Todas")}>Todas</button>
        <button onClick={() => setFiltro("Alta")}>Alta</button>
        <button onClick={() => setFiltro("Média")}>Média</button>
        <button onClick={() => setFiltro("Baixa")}>Baixa</button>
      </div>

      <ul>
        {tarefasOrdenadas.map((t) => (
          <li key={t.id}>
            {t.titulo} - {t.prioridade} - {t.concluida ? "✔️" : "❌"}{" "}
            <button onClick={() => alternarConclusao(t.id)}>
              {t.concluida ? "Desconcluir" : "Concluir"}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <p>Concluídas: {concluidas}</p>
        <p>Pendentes: {pendentes}</p>
        <p>Primeira pendente: {primeiraPendente?.titulo || "Nenhuma"}</p>
        <p>Tem Alta? {temAlta ? "Sim" : "Não"}</p>
        <p>Todas concluídas? {todasConcluidas ? "Sim" : "Não"}</p>
      </div>
    </div>
  );
}
