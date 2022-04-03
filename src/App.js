import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          {/* chamo form e total money */}
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        {/* chamo a list */}
        <List listTransactions={listTransactions} />
      </div>
    </div>
  );
}

export default App;
