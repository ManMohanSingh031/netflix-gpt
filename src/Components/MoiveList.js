import React from "react";
import MoiveCard from "./MoiveCard";

const MoiveList = ({ title, moives }) => {
  console.log(moives);
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {moives?.map((moive) => (
            <MoiveCard key={moive.id} posterPath={moive.poster_path} />
          ))}
          ;
        </div>
      </div>
    </div>   
  );
};

export default MoiveList;
