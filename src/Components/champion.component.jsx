/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import axios from "axios";

function Champion({ championData }) {
  const [championThisData, setChampionThisData] = useState([]);
  const [show, setShow] = useState(Boolean);

  useEffect(() => {
    searchForPlayer();
  }, []);

  function searchForPlayer(event) {
    var APICallString =
      "http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/" +
      championData.id +
      ".json";

    axios
      .get(APICallString)
      .then(function (response) {
        Object.keys(response.data.data).map(function (key) {
          setChampionThisData(response.data.data[key]);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let championSkinek = championThisData.skins;

  function showSkin() {
    setShow(!show);
  }

  return show ? (
    <div
      className="transition duration-300 rounded-lg p-3 m-3 text-center text-white w-fit bg-slate-800"
      onClick={showSkin}
    >
      <div>
        {Object.keys(championSkinek).map(function (key) {
          return (
            <div className="m-3 p-3 inline-grid">
              <p className="font-bold text-xl p-3">{championSkinek[key].name}</p>
              <img
                loading="eager"
                className="rounded-md"
                key={championSkinek.id}
                alt=""
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_${championSkinek[key].num}.jpg`}
              />
            </div>
          );
        })}
        <p className="font-black text-2xl m-3">{championData.name}</p>
        <p className="text-gray-400 m-2 italic">{championData.title}</p>
        <p className="font-semibold mb-2">
          {championData.tags[0]} - {championData.tags[1]}
        </p>
        <p className="italic text-lg">{championThisData.lore}</p>
      </div>
    </div>
  ) : (
    <div
      className="transition duration-500 ease-in-out rounded-lg p-3 m-3 text-center text-white w-fit bg-slate-800 hover:scale-105 hover:bg-slate-900 hover:skew-y-1"
      onClick={showSkin}
    >
      <div>
        <img
          className="rounded-md"
          alt=""
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`}
        />
        <p className="font-black text-xl m-3">{championData.name}</p>
        <p className="text-gray-400 m-2 italic">{championData.title}</p>
        <p className="font-semibold">
          {championData.tags[0]} - {championData.tags[1]}
        </p>
      </div>
    </div>
  );
}

export default Champion;
