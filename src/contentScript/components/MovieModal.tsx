import axios from "axios";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { BASE_URL, IMOVIE_BASE_URL } from "../../constants";
import {
  Episode,
  Movie,
  MovieDetails,
  MovieType,
  SeasonType,
} from "../../types";
// import ReactPlayer from "react-hls-player";
import ReactPlayer from "react-player/file";
import SeasonList from "./SeasonList";

type MovieModalPropTypes = {
  isOpen: boolean;
  setShowVideo: Dispatch<undefined | number>;
  movie?: Movie;
};
function MovieModal({ isOpen, movie, setShowVideo }: MovieModalPropTypes) {
  const [video, setVideo] = useState("");
  const [details, setDetails] = useState<MovieDetails>();
  const fetchDetails = async () => {
    const {
      data: { data: MovieDetails },
    } = await axios.get(`${BASE_URL}/details/${movie.slug}`);
    setDetails(MovieDetails);
  };
  const fetchMovie = async (season: string = "1") => {
    const { data: seasonFiles } = await axios.get(
      `${BASE_URL}/episodes/${movie.slug}/${season}`
    );
    const episodeId = seasonFiles.data[0].files
      .find((item) => item.lang === "ENG")
      .files.find((item) => item.quality === "HIGH").id;
    const { data: videoURL } = await axios.get(
      `${BASE_URL}/video/${movie.slug}/${episodeId}`
    );
    setVideo(videoURL);
  };
  useEffect(() => {
    if (isOpen) {
      if (movie.movieType === "series") {
        fetchDetails();
      } else {
        fetchMovie();
      }
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "#3535358c",
        },
        content: {
          backgroundColor: "#2d2d2d",
        },
      }}
    >
      <div className="flex justify-between flex-row-reverse text-white ">
        <button
          onClick={() => setShowVideo(undefined)}
          className="text-3xl text-red-400 hover:text-red-500 duration-200 ease-in-out"
        >
          X
        </button>
        <h1 className="text-3xl">
          {movie ? `Watch ${movie.title}` : "Watch The Damn Movie"}
        </h1>
      </div>

      {video ? (
        <div>
          <ReactPlayer
            url={video}
            controls
            autoPlay={false}
            width="100%"
            height={"auto"}
          />
        </div>
      ) : movie.movieType === "series" ? (
        details && details.seasons.data.length > 0 ? (
          <SeasonList seasons={details.seasons.data} movieId={movie.slug} />
        ) : (
          // details.seasons.data.map((season, seasonIdx) => {
          //   return (
          //     <div>

          //       <button
          //         onClick={() => fetchMovie(season.number + "")}
          //         key={season.number}
          //         className="py-16 px-6"
          //       >
          //         <h2 className="text-2xl">Season {season.number}</h2>
          //       </button>
          //     </div>
          //   );
          // })
          <h1>Loading...</h1>
        )
      ) : null}
    </Modal>
  );
}

export default MovieModal;
