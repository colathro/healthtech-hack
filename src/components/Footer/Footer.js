import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();

  const privacy = () => {
    navigate("/privacy");
  };

  const cookie = () => {
    navigate("/cookie");
  };
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-menu">
          <a className="footer-menu-item" onClick={privacy}>
            Privacy Policy
          </a>
          <a className="footer-menu-item" onClick={cookie}>
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
