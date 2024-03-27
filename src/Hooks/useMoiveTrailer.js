import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/moivesSlice";

const useMoiveTrailer = (MoiveId) => {
  const dispatch = useDispatch();

  const getMoivesVideos = async () => {
    const videoUrl = await fetch(
      "https://api.themoviedb.org/3/movie/" + MoiveId + "/videos",
      API_OPTION
    );
    const json = await videoUrl.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoivesVideos();
  }, []);
};

export default useMoiveTrailer;
