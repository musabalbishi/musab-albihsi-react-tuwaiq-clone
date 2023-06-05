import logo from "../tuwaiq.svg";
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-box">
          <img src={logo} alt="tuwaiq logo" className="logo" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">المعسكرات والبرامج</a>
          </li>
          <li>
            <a href="#">منصاتنا</a>
          </li>
          <li>
            <a href="#">الرئيسية</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
