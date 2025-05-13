/* Botao.module.css */
.botao {
background-color: green;
}

// Botao.jsx
import styles from './Botao.module.css';

function Botao() {
return <button className={styles.botao}>Clique</button>;
}