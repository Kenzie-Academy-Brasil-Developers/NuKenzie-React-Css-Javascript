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
    <div>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
}

export default List;
