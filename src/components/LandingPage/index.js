import "./style.css";
import LogoNuKenzie from "./LogoNuKenzie";
import DemoLogo from "./DemoLogo";

function LandingPage({ isHomePage }) {
  return (
    <div className="container">
      <div className="container__divContent">
        <LogoNuKenzie classDiv="container__Logo" />
        <h1 className="container__Title">
          Centralize o controle das suas finanças
        </h1>
        <p className="container__Subtitle">de forma rápida e segura</p>
        <div className="container__DivButton">
          <button className="container__Button" onClick={isHomePage}>
            Iniciar
          </button>
        </div>
      </div>
      <div className="container__DivDemoLogo">
        <DemoLogo />
      </div>
    </div>
  );
}

export default LandingPage;
