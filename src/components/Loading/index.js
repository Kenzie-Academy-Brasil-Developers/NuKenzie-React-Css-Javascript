import "./styles.css";
import NoCard from "./img/NoCard.png";

function Loading() {
  return (
    <div className="containerLoading">
      <h3 className="containerLoading__Msg">
        Você ainda não possui nenhum lançamento
      </h3>
      <div className="containerLoading__Div">
        <img src={NoCard} alt="Lista não carregada"></img>
      </div>
    </div>
  );
}

export default Loading;
