import axios from "axios";

// load user
export const loadCodes = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadCodesRequest",
    });
    const { data } = await axios.get(`http://localhost:3000/api/v1/code/getcodes`);
    dispatch({
      type: "LoadCodesSuccess",
      payload: data.allCodes,
    });
  } catch (error) {
    dispatch({
      type: "LoadCodesFail",
      payload: error.response.data.message,
    });
  }
};
