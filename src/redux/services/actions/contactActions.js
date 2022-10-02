import { BASE_URL_2 } from "../../../constants/urls";
import { post } from "../../../utils/apiHelper"

export const addNewQuery = (data, token, enqueueSnackbar, setSubmitting, resetForm) => async (dispatch) => {
    post(`${BASE_URL_2}/contact/query/new`, token, data)
    .then((res) => {
        enqueueSnackbar(res.data.message, {
            autoHideDuration: 3000,
            variant: "success"
        })
        setSubmitting(false);
        resetForm();
    })
    .catch((err) => {
        console.log(err)
        enqueueSnackbar(err.response.data.message, {
            autoHideDuration: 3000,
            variant: "error"
        })
    })
}