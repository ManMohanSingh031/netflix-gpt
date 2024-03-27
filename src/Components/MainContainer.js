import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moives = useSelector((store) => store.moives?.nowPlayingMoives);
  if (!moives) return;
  const mainMoive = moives[0];

  const { original_title, overview, id } = mainMoive;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  MoiveId = {id} />
    </div>
  );
};

export default MainContainer;
