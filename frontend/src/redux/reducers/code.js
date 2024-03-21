import { createReducer, createAction } from "@reduxjs/toolkit";

const LoadCodesRequest = createAction("LoadCodesRequest");
const LoadCodesSuccess = createAction("LoadCodesSuccess");
const LoadCodesFail = createAction("LoadCodesFail");

const initialState = {
  loading : false 
};

export const CodesReducer = createReducer(
  initialState,

  (builder) => {
    builder
      .addCase(LoadCodesRequest, (state) => {
        state.loading = true;
      })

      .addCase(LoadCodesSuccess, (state, action) => {
        state.loading = false;
        state.Codes = action.payload;
      })
      .addCase(LoadCodesFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);



























// export const CodesReducer = createReducer(initialState, {
//   LoadCodesRequest: (state) => {
//     state.loading = true;
//   },
//   LoadCodesSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.Codes = action.payload;
//   },
//   LoadCodesFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthenticated = false;
//   },
// });
