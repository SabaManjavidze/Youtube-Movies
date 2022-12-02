import React, { useState } from "react";
import { Seasons, SeasonType } from "../../types";
import EpisodeList from "./EpisodeList";

type SeasonListPropType = {
  seasons: Seasons["data"];
  movieId: string;
};
type SeasonCardPropType = {
  season: SeasonType;
};
const SeasonCard = ({ season }: SeasonCardPropType) => {
  return (
    <div>
      <h2 className="text-3xl">Season {season.number}</h2>
    </div>
  );
};
function SeasonList({ seasons, movieId }: SeasonListPropType) {
  const [selectedSes, setSelectedSes] = useState<string | number>();
  const isCurrentSeasonSelected = (season: SeasonType) => {
    return season.number == selectedSes;
  };
  return (
    <div className="flex flex-col ">
      {seasons.length > 0
        ? seasons.map((item) => (
            <div className="flex justify-center mt-5" key={item.number}>
              <button
                className="text-white bg-pink-500 py-2.5 px-14"
                onClick={() =>
                  selectedSes !== item.number
                    ? setSelectedSes(item.number)
                    : setSelectedSes("")
                }
              >
                <SeasonCard season={item} />
                {isCurrentSeasonSelected(item) ? (
                  <EpisodeList movieId={movieId} seasonNum={item.number} />
                ) : null}
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default SeasonList;
