import logo from "/img/logo/Booki.png";
function Header() {
  return (
    <header className="l-header">
      <img src={logo} alt="booki" className="logo" />
      <nav className="heberg">
        <a href="#ancre_heberg">Hébergements</a>
        <a href="#ancre_activites">Activités</a>
      </nav>
    </header>
  );
}

export default Header;
