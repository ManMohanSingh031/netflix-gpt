import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMoives from "../Hooks/useNowPlayingMoives";
import usePopularMoives from "../Hooks/usePopularMoives";
import useUpComingMoives from "../Hooks/useUpComingMoives";
import useTopRatedMoives from "../Hooks/useTopRatedMoives";

const Browse = () => {
  useNowPlayingMoives();
  usePopularMoives();
  useUpComingMoives();
  useTopRatedMoives();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
