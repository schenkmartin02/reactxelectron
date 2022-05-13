/* eslint-disable array-callback-return */
import React from "react";
import Champion from "./champion.component";

const ChampionList = ({ data, filtered }) => {
  return (
    <div>
      {Object.keys(data).map(function (key) {
        if (data[key].name.toLowerCase().includes(filtered.toLowerCase())) {
          return (
            <div className="inline-grid">
              <Champion key={data[key].key} championData={data[key]} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ChampionList;
