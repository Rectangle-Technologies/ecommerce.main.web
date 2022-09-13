import { LOGIN, UPDATE } from "./type";
import axios from "axios";
import { addLoader } from "./loaderActions";
import { removeLoader } from "./loaderActions";
import { BASE_URL_1 } from "../../../constants/urls";

export const login = (data, enqueueSnackbar, navigate) => async (dispatch) => {
  dispatch(addLoader());
  try {
    const res = await axios.post(
      `${BASE_URL_1}/auth/login`,
      data
    );
    enqueueSnackbar("Login Successful", {
      variant: "success",
      autoHideDuration: 3000,
    });
    dispatch({
      type: LOGIN,
      payload: {
        token: res.data.token,
        user: res.data.user,
      },
    });
    const url = data.navigateUrl || '/'
    navigate(url, { replace: true });
    dispatch(removeLoader());
  } catch (err) {
    console.log(err);
    dispatch(removeLoader());
    enqueueSnackbar(
      err?.response?.data?.errors
        ? err?.response?.data?.errors[0].msg
        : err?.response?.data?.message,
      {
        variant: "error",
        autoHideDuration: 3000,
      }
    );
  }
};

export const update = (data) => dispatch => {
  dispatch({
    type: UPDATE,
    payload: {
      user: data
    }
  })
}
