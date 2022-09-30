import { post } from "../../../utils/apiHelper"

export const addNewQuery = (data, token, enqueueSnackbar, setSubmitting, resetForm) => async (dispatch) => {
    post("http://localhost:5000/collab/query/new", `Bearer ${token}`, data)
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
            setSubmitting(false);
            enqueueSnackbar(err.response.data.message, {
                autoHideDuration: 3000,
                variant: "error"
            })
        })
}