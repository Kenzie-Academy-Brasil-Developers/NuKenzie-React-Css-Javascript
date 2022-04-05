import "./styles.css";
import Logo from "../Logo";

function HeaderAdmin({ isHomePage }) {
  return (
    <header>
      <div>
        <h1>
          <Logo />
        </h1>
        <button onClick={isHomePage}>Inicio</button>
      </div>
    </header>
  );
}

export default HeaderAdmin;
