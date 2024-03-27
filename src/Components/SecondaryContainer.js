import React from "react";
import { useSelector } from "react-redux";
import MoiveList from "./MoiveList";

const SecondaryContainer = () => {
  const moives = useSelector((store) => store.moives);
  return (
    moives && (
      <div className="bg-black">
        <div className=" -mt-52 pl-12 relative z-20">
          <div>
            <MoiveList title={"Now Playing"} moives={moives.nowPlayingMoives} />
          </div>
          <div>
            <MoiveList title={"Top Rated"} moives={moives.topratedMoives} />
          </div>
          <div>
            <MoiveList title={"Popular"} moives={moives.popularMoives} />
          </div>
          <div>
            <MoiveList title={"Upcoming"} moives={moives.comingMoives} />
          </div>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
