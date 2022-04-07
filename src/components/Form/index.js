import "./styles.css";

function Form({
  listTransactions,
  setListTransactions,
  fixedListTransactions,
  setFixedListTransactions,
}) {
  const inputValue = (event) => {
    event.preventDefault();

    const listaDados = {};

    const inputs = event.target;

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i];
      if (name) {
        listaDados[name] = value;
      }
      if (inputs[i].name === "description" || inputs[i].name === "value") {
        inputs[i].value = "";
      }
    }
    //Adiciona no meu state os valores do meu input inseridos pelo usuário
    setListTransactions([...listTransactions, listaDados]);
    setFixedListTransactions([...fixedListTransactions, listaDados]);
  };

  return (
    <div className="containerComponentForm">
      <form className="containerComponentForm__Form" onSubmit={inputValue}>
        <label className="containerComponentForm__Label" for="form__Descricao">
          Descrição
        </label>
        <input
          className="containerComponentForm__Input containerComponentForm__Input--Description"
          type="text"
          id="form__Descricao"
          placeholder="Digite aqui sua descrição"
          name="description"
          required
        />
        <p className="containerComponentForm__Paragraph">
          Ex: Compra de roupas
        </p>
        <div className="containerComponentForm__DivValueAndSelect">
          <div className="containerComponentForm__DivValue">
            <label className="containerComponentForm__Label" for="form__Valor">
              Valor
            </label>
            <input
              className="containerComponentForm__Input containerComponentForm__Input--Value"
              placeholder="1"
              id="form__Valor"
              type="number"
              min="0"
              name="value"
              step="0.01"
              required
            />
          </div>
          <div className="containerComponentForm__DivSelect">
            <label className="containerComponentForm__Label" for="form__Select">
              Tipo de valor
            </label>
            <select
              className="containerComponentForm__Input containerComponentForm__Input--Select"
              id="form__Select"
              name="type"
              required
            >
              <option className="containerComponentForm__Option">
                Entrada
              </option>
              <option className="containerComponentForm__Option">
                Despesa
              </option>
            </select>
          </div>
        </div>
        <button className="containerComponentForm__Button">
          Inserir valor
        </button>
      </form>
    </div>
  );
}

export default Form;
