import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMoives } from "../utils/moivesSlice";

const useTopRatedMoives = () => {
  const dispatch = useDispatch();

  const getTopRatedMoives = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addTopRatedMoives(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMoives();
  }, []);
};

export default useTopRatedMoives;
