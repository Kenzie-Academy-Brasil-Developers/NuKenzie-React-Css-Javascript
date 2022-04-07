import "./styles.css";

function ButtonsFilter({ filterTodos, filterEntradas, filterDespesas }) {
  return (
    <div className="containerButtonsFilter">
      <h2 className="containerButtonsFilter__Title">Resumo financeiro</h2>
      <div className="containerButtonsFilter__DivButtons">
        <button
          className="containerButtonsFilter__Button"
          onClick={filterTodos}
        >
          Todos
        </button>
        <button
          className="containerButtonsFilter__Button"
          onClick={filterEntradas}
        >
          Entradas
        </button>
        <button
          className="containerButtonsFilter__Button"
          onClick={filterDespesas}
        >
          Despesas
        </button>
      </div>
    </div>
  );
}

export default ButtonsFilter;
