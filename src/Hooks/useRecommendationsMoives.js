import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addRecommendationsMoives } from "../utils/moivesSlice";

const useRecommendationsMoives = ({ MoiveId }) => {
  const dispatch = useDispatch();

  const getRecommendationsMoives = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/"+ MoiveId +"/recommendations?page=1",
        API_OPTION
      );
      const data = await response.json();
      dispatch(addRecommendationsMoives(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getRecommendationsMoives();
  }, []);
};

export default useRecommendationsMoives;
