import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IErrorState {
  error: string | undefined;
}

const initialState: IErrorState = {
  error: undefined,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorState: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearErrorState: (state) => {
      state.error = undefined;
    },
  },
});

export const { setErrorState, clearErrorState } = errorSlice.actions;

export default errorSlice.reducer;
