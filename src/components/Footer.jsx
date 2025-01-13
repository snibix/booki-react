function Footer() {
  return (
    <footer className="l-footer">
      <nav className="nav-footer">
        <div className="section-footer">
          <h2 className="title-footer">a propos</h2>
          <ul className="ul-footer">
            <li>
              <a href="#">Fonctionnement du site</a>
            </li>
            <li>
              <a href="#">Conditions générales</a>
            </li>
            <li>
              <a href="#">Données et confidentialité</a>
            </li>
          </ul>
        </div>
        <div className="section-footer">
          <h2 className="title-footer">nos hébergements</h2>
          <ul className="ul-footer">
            <li>
              <a href="#">Charte qualité</a>
            </li>
            <li>
              <a href="#">Proposer vôtre hotel</a>
            </li>
          </ul>
        </div>
        <div className="section-footer">
          <h2 className="title-footer">assistance</h2>
          <ul className="ul-footer">
            <li>
              <a href="#">Centre d&#39;aide</a>
            </li>
            <li>
              <a href="#">Nous contactez</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
