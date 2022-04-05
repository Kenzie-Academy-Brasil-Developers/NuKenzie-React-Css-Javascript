import "./style.css";
import Logo from "../Logo";
import DemoLogo from "./DemoLogo";

function LandingPage({ isHomePage }) {
  return (
    <div className="container">
      <div className="container__divContent">
        <Logo className="container__Logo" />
        <h1 className="container__Title">
          Centralize o controle das suas finanças
        </h1>
        <p className="container__Subtitle">de forma rápida e segura</p>
        <button className="container__Button" onClick={isHomePage}>
          Iniciar
        </button>
      </div>
      <DemoLogo className="container__DemoLogo" />
    </div>
  );
}

export default LandingPage;
