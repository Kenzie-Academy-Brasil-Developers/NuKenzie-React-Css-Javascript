import "./styles.css";

function ButtonsFilter({ filterTodos, filterEntradas, filterDespesas }) {
  return (
    <div>
      <h2>Resumo financeiro</h2>
      <div>
        <button onClick={filterTodos}>Todos</button>
        <button onClick={filterEntradas}>Entradas</button>
        <button onClick={filterDespesas}>Despesas</button>
      </div>
    </div>
  );
}

export default ButtonsFilter;
