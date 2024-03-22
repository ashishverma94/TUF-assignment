import axios from "axios";
import {BACKEND_URL} from "../../url" ;
// load user
export const loadCodes = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadCodesRequest",
    });
    const { data } = await axios.get(`${BACKEND_URL}/api/v1/code/getcodes`);
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
