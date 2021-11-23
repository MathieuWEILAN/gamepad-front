import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [filtersOn, setFiltersOn] = useState(false);

  const handleFiltersOn = (event) => {
    event.preventDefault();
    setFiltersOn(!filtersOn);
  };

  return (
    <div className="menu-container">
      <div>
        <Link to={"/"} className="menu-option">
          HOME
        </Link>
      </div>

      <div className="menu-option">FAVORIS</div>
      <div>
        <div>FILTERS</div>
        <button onClick={handleFiltersOn}>
          {filtersOn ? (
            <FontAwesomeIcon icon="caret-down" />
          ) : (
            <FontAwesomeIcon icon="caret-up" />
          )}
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Menu;
