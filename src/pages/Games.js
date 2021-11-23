import { useEffect, useState } from "react";
import axios from "axios";

const Games = ({ id, apikey }) => {
  const [data, setData] = useState();
  console.log("bonjour");
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?id=${id}&key=${apikey}`
        );
        console.log("game", response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default Games;
