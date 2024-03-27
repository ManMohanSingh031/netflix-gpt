import { createSlice } from "@reduxjs/toolkit";

const moivesSlice = createSlice({
  name: "moives",
  initialState: {
    nowPlayingMoives: null,
  },
  reducers: {
    addNowPlayingMoives: (state, action) => {
      state.nowPlayingMoives = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMoives: (state, action) => {
      state.popularMoives = action.payload;
    },
    addUpComingMoives: (state, action) => {
      state.comingMoives = action.payload;
    },
    addTopRatedMoives: (state, action) => {
      state.topratedMoives = action.payload;
    },
  },
});

export const {
  addNowPlayingMoives,
  addTrailerVideo,
  addPopularMoives,
  addUpComingMoives,
  addTopRatedMoives,
} = moivesSlice.actions;

export default moivesSlice.reducer;
