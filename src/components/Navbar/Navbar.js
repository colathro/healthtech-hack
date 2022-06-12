import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const faq = () => {
    navigate("/faq");
  };

  const resources = () => {
    navigate("/resources");
  };
  return (
    <div className="navbar-container">
      <div>
        <h1 className="navbar-title" onClick={home}>
          Matrix Mind
        </h1>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={resources}>
          Resources
        </div>
        <div className="menu-item" onClick={faq}>
          FAQ
        </div>
      </div>
    </div>
  );
}

export default Navbar;
