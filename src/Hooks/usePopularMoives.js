import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMoives } from "../utils/moivesSlice";

const usePopularMoives = () => {
  const dispatch = useDispatch();

  const getPopularMoives = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addPopularMoives(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMoives();
  }, []);
};

export default usePopularMoives;
