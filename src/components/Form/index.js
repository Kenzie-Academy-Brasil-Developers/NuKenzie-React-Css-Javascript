import "./styles.css";

function Form({ listTransactions, setListTransactions }) {
  const inputValue = (event) => {
    event.preventDefault();

    const listaDados = {};

    const inputs = event.target;

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i];
      if (name) {
        listaDados[name] = value;
      }
      inputs[i].value = "";
    }
    //Adiciona no meu state os valores do meu input inseridos pelo usuário
    setListTransactions([...listTransactions, listaDados]);
  };

  return (
    <div>
      <form onSubmit={inputValue}>
        <label for="form__Descricao">Descrição</label>
        <input
          type="text"
          id="form__Descricao"
          placeholder="Digite aqui sua descrição"
          name="description"
          required
        />
        <p>Ex: Compra de roupas</p>
        <label for="form__Valor">Valor</label>
        <input
          id="form__Valor"
          type="number"
          min="0"
          name="value"
          step="0.01"
          required
        />
        <label for="form__Select">Tipo de valor</label>
        <select id="form__Select" name="type" required>
          <option>Entrada</option>
          <option>Despesa</option>
        </select>
        <button>Inserir valor</button>
      </form>
    </div>
  );
}

export default Form;
