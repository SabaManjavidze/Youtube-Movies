import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/tailwind.css";
import { BASE_URL, EXTENSION_BANG_MAP } from "../constants";
import { Movie } from "../types";
import Modal from "react-modal";
import MovieModal from "./components/MovieModal";

export default function ContentScript() {
  const [data, setData] = useState<Movie[]>([]);
  const [showVideo, setShowVideo] = useState<undefined | number>();
  const fetchData = async (searchQuery: string) => {
    const { data: some } = await axios.get(`${BASE_URL}/search/${searchQuery}`);
    setData(some);
  };
  useEffect(() => {
    const search_query = new URL(document.location.href).search.split("=")[1];
    const bang = search_query.split("+")[0];

    if (EXTENSION_BANG_MAP[bang]) {
      fetchData(search_query.split(`${bang}+`)[1]);
    }
  }, []);

  return (
    <div className="text-red-500 mt-20" id="shadow-root">
      <h1 className="text-4xl">Search Results</h1>
      <div className="mt-16 grid grid-cols-3 gap-2 gap-y-10">
        {data.length > 0
          ? data.map((movie, idx) => (
              <div key={movie.slug}>
                <div className="flex flex-col px-10 w-full h-[380px]">
                  <button
                    className="pointer relative group w-[240px] h-full "
                    type="button"
                    onClick={() => setShowVideo(idx)}
                  >
                    <img
                      src={movie.thumbnail_url}
                      alt="movie poster"
                      className="object-cover rounded-md h-full w-full"
                    />
                    <div
                      className="absolute h-full group-hover:opacity-100 
                    opacity-0 bottom-0 w-full ease-out duration-300 flex
                    justify-center items-end"
                    >
                      <div className="absolute linear-bg h-1/5 w-full"></div>
                      <h1 className="text-2xl text-center w-full z-10">
                        {movie.title}
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            ))
          : "loading"}
        {typeof showVideo !== "undefined" ? (
          <MovieModal
            isOpen={typeof showVideo !== "undefined"}
            movie={data[showVideo]}
            setShowVideo={setShowVideo}
          />
        ) : null}
      </div>
    </div>
  );
}
