import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { Episode, EpisodeType, SeasonType } from "../../types";

type EpisodeListPropType = {
  seasonNum: number | string;
  movieId: string;
};

type EpisodeCardPropType = {
  episode: EpisodeType;
};
const EpisodeCard = ({ episode }: EpisodeCardPropType) => {
  return (
    <div className="flex">
      <div>
        <h2>{episode.episode}</h2>
      </div>
      <div className="flex-1">
        <img
          src={episode?.poster || ""}
          className="object-cover"
          width={"100%"}
        />
      </div>
      <div className="flex-2">
        <h3 className="text-white text-2xl">{episode.title}</h3>
      </div>
    </div>
  );
};

function EpisodeList({ seasonNum, movieId }: EpisodeListPropType) {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const fetchEpisodes = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/episodes/${movieId}/${seasonNum}`
    );
    setEpisodes(data.data);
  };
  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <div className="flex flex-col">
      {episodes?.length > 0
        ? episodes.map((episode) => (
            <div className="mt-5" key={episode.episode}>
              <EpisodeCard episode={episode} />
            </div>
          ))
        : null}
    </div>
  );
}

export default EpisodeList;
