import { LOGIN } from "./type";
import axios from "axios";
import { addLoader } from "./loaderActions";
import { removeLoader } from "./loaderActions";

export const login = (data, enqueueSnackbar, navigate) => async (dispatch) => {
  dispatch(addLoader());
  try {
    const res = await axios.post(
      "http://localhost:4000/auth/admin/login",
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
    navigate("../dashboard", { replace: true });
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
