import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  masterData: [],
  uploadDataStep: {},
  prepDataStep: {},
  designChartStep: {},
  ShareStep: {},
};

const dashboardSlice = createSlice({
  name: "dashboardReducer",
  initialState: initialState,
  reducers: {
    saveMasterData: (state, action) => {
      state.masterData = action.payload;
    },
    saveUploadDataStep: (state, action) => {
      state.uploadDataStep = { ...state.uploadDataStep, ...action.payload };
    },
    savePrepDataStep: (state, action) => {
      state.prepDataStep = { ...state.prepDataStep, ...action.payload };
    },
    saveDesignChartStep: (state, action) => {
      state.designChartStep = { ...state.designChartStep, ...action.payload };
    },
    saveShareStep: (state, action) => {
      state.ShareStep = { ...state.ShareStep, ...action.payload };
    },
  },
});

export const {
  saveMasterData,
  saveUploadDataStep,
  savePrepDataStep,
  saveDesignChartStep,
  saveShareStep,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
