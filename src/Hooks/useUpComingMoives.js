import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMoives  } from "../utils/moivesSlice";

const useUpComingMoives = () => {
  const dispatch = useDispatch();

  const getUpComingMoives = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addUpComingMoives (data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getUpComingMoives();
  }, []);
};

export default useUpComingMoives;
