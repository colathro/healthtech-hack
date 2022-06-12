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
          <div className="footer-menu-item" onClick={privacy}>
            Privacy Policy
          </div>
          <div className="footer-menu-item" onClick={cookie}>
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
