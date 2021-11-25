import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ setGenres }) => {
  const [filtersOn, setFiltersOn] = useState(false);

  const handleFiltersOn = (event) => {
    event.preventDefault();
    setFiltersOn(!filtersOn);
  };

  return (
    <div className="menu-container">
      <div>
        <div className="menu-option">
          <FontAwesomeIcon className="icon" icon="gamepad" />
          &nbsp; HOME
        </div>
      </div>
      <div className="menu-option">
        <FontAwesomeIcon className="icon" icon="star" /> &nbsp;FAVORIS
      </div>
      <div className="menu-option2">
        <div>
          <FontAwesomeIcon className="sort" icon="sort" /> &nbsp;FILTERS
        </div>
        <button className="btn-filter" onClick={handleFiltersOn}>
          {filtersOn ? (
            <FontAwesomeIcon className="icon" icon="sort-down" />
          ) : (
            <div>
              <FontAwesomeIcon className="icon" icon="sort-up" />
            </div>
          )}
        </button>
      </div>
      {filtersOn ? (
        <div className="filters">
          <div className="filter">Sort by A-Z</div>
          <div className="filter">Sort by released date</div>
          <div className="filter">Sort by rating</div>
        </div>
      ) : null}
      <div>
        <div>GENRES</div>
        <div>
          <div
            onClick={() => {
              setGenres("action");
            }}
          >
            Action
          </div>
          <div
            onClick={() => {
              setGenres("strategy");
            }}
          >
            Strategy
          </div>
          <div>RPG</div>
          <div>Shooter</div>
          <div>Adventure</div>
          <div>Puzzle</div>
          <div>Racing</div>
          <div>Sports</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
