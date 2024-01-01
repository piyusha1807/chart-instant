import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const uploadSlice = createSlice({
  name: "uploadReducer",
  initialState: initialState,
  reducers: {
    saveStep: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const { saveStep } = uploadSlice.actions;
export default uploadSlice.reducer;
