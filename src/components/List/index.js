import "./styles.css";
import Card from "../Card";

function List({ listTransactions, setListTransaction }) {
  const deleteTransaction = (transactionRmv) => {
    const filter = listTransactions.filter(
      (transaction) => transaction.description !== transactionRmv.description
    );
    return setListTransaction(filter);
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
