import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import ButtonsFilter from "./components/ButtonsFilter";
import Loading from "./components/Loading";
import HeaderAdmin from "./components/HeaderAdmin";
import LandingPage from "./components/LandingPage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [fixedListTransactions, setFixedListTransactions] = useState([]);
  const [emptyList, setEmptyList] = useState(true);
  const [homePage, setHomePage] = useState(true);

  const isLoading = () => {
    const verify =
      listTransactions.length === 0 ? setEmptyList(true) : setEmptyList(false);
    return verify;
  };

  useEffect(() => {
    isLoading();
  }, [listTransactions]);

  const isHomePage = () => {
    setHomePage(!homePage);
  };

  const filterTodos = () => setListTransactions(fixedListTransactions);

  const filterDespesas = () => {
    const filter = fixedListTransactions.filter(
      (transaction) => transaction.type === "Despesa"
    );
    setListTransactions(filter);
  };

  const filterEntradas = () => {
    const filter = fixedListTransactions.filter(
      (transaction) => transaction.type === "Entrada"
    );
    setListTransactions(filter);
  };

  return (
    <div className="App">
      {homePage ? (
        <LandingPage isHomePage={isHomePage} />
      ) : (
        <div className="App-header">
          <HeaderAdmin isHomePage={isHomePage} />
          <div className="App-Main">
            <div>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                fixedListTransactions={fixedListTransactions}
                setFixedListTransactions={setFixedListTransactions}
              />
              {!emptyList && <TotalMoney listTransactions={listTransactions} />}
            </div>
            <div className="App-lista">
              <ButtonsFilter
                filterTodos={filterTodos}
                filterEntradas={filterEntradas}
                filterDespesas={filterDespesas}
              />
              {emptyList ? (
                <Loading />
              ) : (
                <List
                  listTransactions={listTransactions}
                  setListTransaction={setListTransactions}
                  setFixedListTransactions={setFixedListTransactions}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

/* faltando: criar componente da pagina inicial com botao, componente header da pagina admin com botao, adicionar onClick nos botoes, criar state
para setar true/false no click e usar ternario para exibir um ou outro. Estilizar usando CSS visando mobile first */

/* para mostrar na tela o SVG quando não há nenhum item na lista, criar componente para ele, aqui no App js criar state que recebe true
e ao adicionar um item na lista, o state altera para false, usar a estrutura {stateMostrar ? cardVazioComponente : lista} para realizar este processo
segue link com exemplo https://codesandbox.io/s/useeffect-unmount-djczp?file=/src/App.js. O mesmo vale para a landing page */

/* para o filtro, criar state que recebe o mesmo que o listTransactions e so se atualiza no delete ou adicionar um novo transaction
criar funçoes de filtro, aplicar nesse state, e a partir do resultado desse filtro, atualizar o listTransactions original
*/
