import React, {useMemo} from "react";
import {MovieTypes} from "../types/movie"
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";



const Movie: React.FC<MovieTypes> = (movie) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const memoResult = useMemo(() => {
    return (
      <div className="movie">
        <h2>{movie.Title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
    );
  }, [movie.Title, movie.Year, poster])
  return memoResult;
};


export default Movie;