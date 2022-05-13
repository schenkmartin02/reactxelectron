import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ChampionList from "./Components/champion-list.component";

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    searchForPlayer();
  }, []);

  function searchForPlayer(event) {
    var APICallString =
      "http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json";

    axios
      .get(APICallString)
      .then(function (response) {
        setPlayerData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (Object.keys(playerData).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="text-center md:container md:mx-auto">
      <h1 className="text-5xl font-bold">League Of Legends Champion</h1>
      <input
        className="transition duration-500 ease-in-out p-3 m-3 bg-slate-900 rounded-lg text-white focus:scale-110"
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search large..."
      />
      <ChampionList data={playerData} filtered={searchText} />
    </div>
  );
}

export default App;
