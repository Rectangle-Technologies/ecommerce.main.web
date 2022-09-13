import React from 'react'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import textStyle from '../helpers/textStyle'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLoader, removeLoader } from '../redux/services/actions/loaderActions'
import { useEffect } from 'react'

const EditDetails = (props) => {
    const [email, setEmail] = useState(props?.auth?.user?.email)
    // const [password, setPassword] = useState(props?.auth?.user?.password)
    const [firstName, setFirstName] = useState(props?.auth?.user?.name?.split(' ')[0])
    const [lastName, setLastName] = useState(props?.auth?.user?.name?.split(' ')[1])
    const [contact, setContact] = useState(props?.auth?.user?.contact)
    const [line1, setLine1] = useState(props?.auth?.user?.address?.line1)
    const [city, setCity] = useState(props?.auth?.user?.address?.city)
    const [state, setState] = useState(props?.auth?.user?.address?.state)
    const [pincode, setPincode] = useState(props?.auth?.user?.address?.pincode)
    const navigate = useNavigate()

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
                {/* <div style={{ marginBottom: 20 }}>
                    <TextField
                        fullWidth
                        id='password'
                        name='password'
                        variant='outlined'
                        label='Password'
                        placeholder="Password"
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div> */}
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
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLoader, removeLoader })(EditDetails)
