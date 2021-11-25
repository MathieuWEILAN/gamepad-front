import "../css/home.css";
import Page from "../components/Page";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const apikey = "3d0967870fc44ddd8927c371f864b54f";

const Home = ({ search, genres }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [video, setVideo] = useState();
  const [pageSkipe, setPageSkipe] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?genres=${genres}&page_size=${pageSkipe}&page=${page}&search=${search}&key=${apikey}`
        );

        console.log(
          `https://api.rawg.io/api/games?genres=${genres}&page_size=${pageSkipe}&page=${page}&search=${search}&key=${apikey}`
        );
        for (let i = 0; i < response.data.results.length; i++) {
          const element = response.data.results[i];
          element.isVideoPlaying = false;
        }
        setData(response.data.results);
        console.log("home page", response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [genres, pageSkipe, page, search]);

  const videoPlaying = async (el) => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${el.id}/movies?key=${apikey}`
      );
      const dataCopy = [...data];
      const newData = dataCopy.map((elem) => {
        const newElement = { ...elem };
        if (elem.id === el.id) {
          newElement.isVideoPlaying = !newElement.isVideoPlaying;
        } else {
          newElement.isVideoPlaying = false;
        }
        return newElement;
      });
      setData(newData);
      if (response.data.results.length > 0) {
        setVideo(response.data.results[0].data[480]);
      } else {
        setVideo(null);
      }

      console.log("newData", newData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <div>En chargement</div>
  ) : (
    <div>
      <div className="container-home">
        {data.map((game, i) => {
          // const rateTotal = (
          //   game.ratings[0].percent + game.ratings[1].percent
          // ).toFixed(2);
          return (
            <div key={game.id} className="patch">
              <Link
                to={`/games/${game.id}`}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <div>
                  {game.isVideoPlaying && video ? (
                    <video autoPlay controls muted className="video">
                      <source src={video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={game.background_image}
                      alt=""
                      className="patch-pic"
                      // onMouseOver={() => {
                      //   videoPlaying(game);
                      // }}
                    />
                  )}
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
                        {game?.platforms?.map((plateform, i) => {
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
                      {/* <div className="patch-results">{rateTotal}%</div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Page setPage={setPage} page={page} data={data} pageSkipe={pageSkipe} />
    </div>
  );
};

export default Home;
