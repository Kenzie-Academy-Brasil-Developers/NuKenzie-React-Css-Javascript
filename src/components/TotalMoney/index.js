import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div>
      <div>
        <h4>Valor total:</h4>
        <p>O valor se refere ao saldo</p>
      </div>
      <h4>
        {listTransactions
          .reduce((acc, transaction) => acc + Number(transaction.value), 0)
          .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </h4>
    </div>
  );
}

export default TotalMoney;
