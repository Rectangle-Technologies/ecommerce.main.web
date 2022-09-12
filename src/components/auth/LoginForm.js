import React, { useState } from 'react'
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/services/actions/authActions';
import { Box, Link, TextField, Typography } from '@mui/material';
import textStyle from '../../helpers/textStyle';

const LoginForm = (props) => {
    const [loginState, setLoginState] = useState({})
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        props.login(
            { email: loginState.email, password: loginState.password, navigateUrl: props?.navigateUrl },
            enqueueSnackbar,
            navigate,
        );
    };
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
                        onChange={(e) => setLoginState({ ...loginState, email: e.target.value })}
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <TextField
                        fullWidth
                        id='password'
                        name='password'
                        variant='outlined'
                        label='Password'
                        placeholder="Password"
                        type='password'
                        onChange={(e) => setLoginState({ ...loginState, password: e.target.value })}
                    />
                </div>
            </div>
            <div style={{ width: '80%', maxWidth: 200, margin: 'auto', marginTop: 15 }}>
                <Link style={{ cursor: 'pointer' }} onClick={handleLogin}>
                    <div style={{
                        backgroundColor: '#FA861B',
                        padding: '10px 30px',
                        borderRadius: 30
                    }}>
                        <Typography style={{ ...textStyle, color: '#F8F5CC', textAlign: 'center' }}>Login</Typography>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default connect(null, { login })(LoginForm)
