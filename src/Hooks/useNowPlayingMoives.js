import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMoives } from "../utils/moivesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addNowPlayingMoives(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
