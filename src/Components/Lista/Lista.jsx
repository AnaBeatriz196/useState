import { useState } from "react";

function Lista() {
    const [lista, setLista] = useState([]);
    const [comentario, setComentario] = useState("");
    const [editarIndex, setEditarIndex] = useState(null);

    function Processar() {
        if (editarIndex !== null) {
            const novaLista = [...lista];
            novaLista[editarIndex] = comentario;
            setLista(novaLista);
            setEditarIndex(null);
        } else {
            setLista([...lista, comentario]);
        }
        setComentario('');
    }

    function EditarComentario(index) {
        setComentario(lista[index]);
        setEditarIndex(index);
    }

    function ExcluirComentario(index) {
        const novaLista = lista.filter((_, i) => i !== index);
        setLista(novaLista);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Digite seu comentário"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
            />
            <button onClick={Processar}>{editarIndex !== null ? "Editar" : "Enviar"}</button>
            <button onClick={() => setLista([])}>Resetar</button>

            <ul>
                {lista.map((comentario, index) => (
                    <li>
                        {comentario}
                        <button onClick={() => EditarComentario(index)}>Editar</button>
                        <button onClick={() => ExcluirComentario(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lista;
