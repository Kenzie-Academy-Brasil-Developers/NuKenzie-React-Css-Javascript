import "./styles.css";
import Logo from "../Logo";

function HeaderAdmin({ isHomePage }) {
  return (
    <header className="headerAdmin">
      <div className="headerAdmin__divContainer">
        <h1 className="headerAdmin__h1">
          <Logo />
        </h1>
        <button className="headerAdmin__button" onClick={isHomePage}>
          Inicio
        </button>
      </div>
    </header>
  );
}

export default HeaderAdmin;
