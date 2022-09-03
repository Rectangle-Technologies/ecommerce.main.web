import { post } from "../../../utils/apiHelper"

export const clientDairyFeedback = (data, token, images, enqueueSnackbar, setSubmitting, resetForm) => async (dispatch) => {
    post("http://localhost:5000/diaries/addFeedback", token, data)
    .then(async (res) => {
        const uid = res?.data?.id;
        if (res.status === 200) {
            await images.map(async (image, index) => {
                const form = new FormData();
                form.append('feedbackImage', image, image.name);
                await post(`http://localhost:5000/diaries/addImage/${uid}`, token, null, form)
                if (index+1 === images.length) {
                    enqueueSnackbar(res.data.message, {
                        autoHideDuration: 3000,
                        variant: "success"
                    })
                    setSubmitting(false);
                    resetForm();
                }
            })
        } else {
            enqueueSnackbar("Something went wrong, try again later", {
                autoHideDuration: 3000,
                variant: "error"
            });
        }
            
    })
    .catch((err) => {
        console.log(err);
        enqueueSnackbar(err?.response?.data?.message || err.message, {
            autoHideDuration: 3000,
            variant: "error"
        })
    })
}