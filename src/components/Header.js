import logo from "../img/logo.png";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ handleSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="container-header">
      <img
        src={logo}
        alt="logo-rawg"
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="search-bar">
        <FontAwesomeIcon icon="search" className="icon-search" />
        <input
          type="text"
          className="header-input"
          placeholder="More than 50K games !"
          onChange={handleSearch}
        />
      </div>

      <div className="boutons">
        <button className="header-button">S'incrire</button>
        <button className="header-button">Se connecter</button>
      </div>
    </div>
  );
};

export default Header;
