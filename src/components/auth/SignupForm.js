import { Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { BASE_URL_1 } from '../../constants/urls'
import textStyle from '../../helpers/textStyle'
import { addLoader, removeLoader } from '../../redux/services/actions/loaderActions'
import { login } from '../../redux/services/actions/authActions'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const SignupForm = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [contact, setContact] = useState()
    const [line1, setLine1] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [pincode, setPincode] = useState()
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async () => {
        props.addLoader()
        try {
            const res = await axios.post(`${BASE_URL_1}/auth/signup`, {
                email,
                password,
                firstName,
                lastName,
                contact,
                line1,
                city,
                state,
                pincode
            })
            console.log(res.data)
            props.login(
                { email, password, navigateUrl: props?.navigateUrl },
                enqueueSnackbar,
                navigate,
            );
            props.removeLoader()
        } catch (err) {
            props.removeLoader()
            let message = 'Something went wrong'
            if (err?.response?.data?.errors) {
                message = err?.response?.data?.errors[0].msg
            } else if (err?.response?.data?.message) {
                message = err?.response?.data?.message
            }
            enqueueSnackbar(message, {
                variant: 'error',
                autoHideDuration: 3000
            })
        }
    }

    return (
        <>
            <div style={{ margin: 'auto', padding: window.innerWidth > 400 ? 10 : 1 }}>
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
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='password'
                        name='password'
                        variant='outlined'
                        label='Password'
                        placeholder="Password"
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='first_name'
                        name='first_name'
                        variant='outlined'
                        label='First Name'
                        placeholder="First Name"
                        type='text'
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='last_name'
                        name='last_name'
                        variant='outlined'
                        label='Last Name'
                        placeholder="Last Name"
                        type='text'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
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
                    />
                </div>
                <Grid container spacing={2}>
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
                        />
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '80%', maxWidth: 200, margin: 'auto', marginTop: 15 }}>
                <Link style={{ cursor: 'pointer' }} onClick={handleSubmit}>
                    <div style={{
                        backgroundColor: '#FA861B',
                        padding: '10px 30px',
                        borderRadius: 30
                    }}>
                        <Typography style={{ ...textStyle, color: '#F8F5CC', textAlign: 'center' }}>Signup</Typography>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default connect(null, { addLoader, removeLoader, login })(SignupForm)
