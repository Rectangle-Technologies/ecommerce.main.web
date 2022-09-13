import React from 'react'
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import textStyle from '../helpers/textStyle'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import { update } from '../redux/services/actions/authActions'
import { useEffect } from 'react'
import { styled } from "@mui/material/styles";
import axios from 'axios'
import { BASE_URL_1 } from '../constants/urls'
import { useSnackbar } from 'notistack'

const EditDetails = (props) => {
    const [email, setEmail] = useState(props?.auth?.user?.email)
    const [firstName, setFirstName] = useState(props?.auth?.user?.name?.split(' ')[0])
    const [lastName, setLastName] = useState(props?.auth?.user?.name?.split(' ')[1])
    const [contact, setContact] = useState(props?.auth?.user?.contact)
    const [line1, setLine1] = useState(props?.auth?.user?.address?.line1)
    const [city, setCity] = useState(props?.auth?.user?.address?.city)
    const [state, setState] = useState(props?.auth?.user?.address?.state)
    const [pincode, setPincode] = useState(props?.auth?.user?.address?.pincode)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const config = {
        headers: {
            Authorization: `Bearer ${props.auth.token}`
        }
    }
    const CustomButton = styled(Button)({
        textTransform: "none",
        backgroundColor: "#eb31e2",
        "&:hover": {
            backgroundColor: "#fc03cf",
        },
        fontSize: 16
    });

    const handleSubmit = async () => {
        props.addLoader()
        try {
            const res = await axios.put(`${BASE_URL_1}/user/update`, {
                firstName,
                lastName,
                contact,
                email,
                line1,
                city,
                state,
                pincode
            }, config)
            props.update(res.data.user)
            enqueueSnackbar('Details updated successfully', {
                variant: 'success',
                autoHideDuration: 3000
            })
            props.removeLoader()
        } catch (err) {
            props.removeLoader()
            if (err?.response?.data?.status === "PRODUCT_NOT_LAUNCHED") {
                setProduct(err.response.data.product)
                setLaunched(false);
            }
            enqueueSnackbar(err?.response?.data?.message || 'Something went wrong', {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    useEffect(() => {
        if (!props.auth.isAuthenticated) {
            navigate('/login', { state: { navigateUrl: '/editdetails' } })
            return
        }
    }, [])

    return (
        <div>
            <Typography style={{ ...textStyle, fontWeight: 700, fontSize: window.innerWidth > 500 ? 32 : 26, textAlign: 'center' }} my={2}>YOUR DETAILS</Typography>
            <div style={{ width: '90%', maxWidth: '600px', margin: 'auto' }}>
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='email'
                        name='email'
                        variant='outlined'
                        label='Email'
                        placeholder="Email"
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id='first_name'
                            name='first_name'
                            variant='outlined'
                            label='First Name'
                            placeholder="First Name"
                            type='text'
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id='last_name'
                            name='last_name'
                            variant='outlined'
                            label='Last Name'
                            placeholder="Last Name"
                            type='text'
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </Grid>
                </Grid>
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='contact'
                        name='contact'
                        variant='outlined'
                        label='Contact'
                        placeholder="Contact"
                        type='text'
                        onChange={(e) => setContact(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+91-</InputAdornment>,
                        }}
                        value={contact}
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='address'
                        name='address'
                        variant='outlined'
                        label='Address'
                        placeholder="Address"
                        type='text'
                        onChange={(e) => setLine1(e.target.value)}
                        value={line1}
                    />
                </div>
                <Grid container spacing={2} mb={4}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            id='city'
                            name='city'
                            variant='outlined'
                            label='City'
                            placeholder="City"
                            type='text'
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            id='state'
                            name='state'
                            variant='outlined'
                            label='State'
                            placeholder="State"
                            type='text'
                            onChange={(e) => setState(e.target.value)}
                            value={state}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            id='pincode'
                            name='pincode'
                            variant='outlined'
                            label='Pincode'
                            placeholder="Pincode"
                            type='text'
                            onChange={(e) => setPincode(e.target.value)}
                            value={pincode}
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '90%', maxWidth: '600px', margin: 'auto', marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <CustomButton variant="contained" size='small' onClick={handleSubmit}>Edit Details</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLoader, removeLoader, update })(EditDetails)
