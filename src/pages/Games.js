import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Games = ({ apikey }) => {
  const [data, setData] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${apikey}`
        );
        console.log("game", response.data);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default Games;
