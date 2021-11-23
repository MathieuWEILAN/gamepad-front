import "../css/home.css";
import Page from "../components/Page";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const apikey = "3d0967870fc44ddd8927c371f864b54f";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?page=${page}&search=${search}&key=${apikey}`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, search]);

  return isLoading ? (
    <div>En chargement</div>
  ) : (
    <div>
      <div className="container-home">
        {data.results.map((game, i) => {
          return (
            <div key={game.id} className="patch">
              <Link
                to={`/games?id=${game.id}`}
                style={{ textDecoration: "none", color: "grey" }}
                id={game.id}
              >
                <div>
                  <img
                    src={game.background_image}
                    alt=""
                    className="patch-pic"
                  />

                  <div className="title-fav">
                    <div>{game.name}</div>
                    <FontAwesomeIcon
                      icon="plus-circle"
                      className="plus-circle"
                    />
                  </div>
                  <div>
                    <div className="patch-part2">
                      <div>Release Date</div>
                      <div>
                        <div className="patch-results">{game.released}</div>
                      </div>
                    </div>
                    <div className="patch-part2">
                      <div>Genres</div>
                      <div className="patch-part3">
                        {game.genres.map((genre, i) => {
                          return (
                            <div key={genre.id} className="patch-results">
                              {genre.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="patch-part2">
                      <div>Plateforms</div>
                      <div className="patch-part3">
                        {game.parent_platforms.map((plateform, i) => {
                          return (
                            <div key={i} className="patch-results">
                              {plateform.platform.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="patch-part2">
                      <div>Recommanded</div>
                      <div className="patch-results">
                        {game.ratings[0].percent + game.ratings[1].percent}%
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Page setPage={setPage} page={page} />
    </div>
  );
};

export default Home;
