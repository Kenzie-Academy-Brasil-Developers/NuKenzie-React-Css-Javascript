import "./styles.css";
import Card from "../Card";

function List({
  listTransactions,
  setListTransaction,
  setFixedListTransactions,
}) {
  const deleteTransaction = (transactionRmv) => {
    const filter = listTransactions.filter(
      (transaction) => transaction.description !== transactionRmv.description
    );
    setListTransaction(filter);
    setFixedListTransactions(filter);
  };

  return (
    <div className="listCards">
      <div className="listCards__DivCards">
        {listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
