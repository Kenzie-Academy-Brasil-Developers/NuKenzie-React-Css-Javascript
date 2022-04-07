import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="containerTotalMoney">
      <div className="containerTotalMoney__divInfo">
        <h4 className="containerTotalMoney__TitleTotalValue">Valor total:</h4>
        <h4 className="containerTotalMoney__TotalValue">
          {listTransactions
            .reduce((acc, transaction) => acc + Number(transaction.value), 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </h4>
      </div>
      <p className="containerTotalMoney__Parapraph">
        O valor se refere ao saldo
      </p>
    </div>
  );
}

export default TotalMoney;
