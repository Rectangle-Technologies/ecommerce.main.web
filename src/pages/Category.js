import { Box, FormControl, InputLabel, Link, Menu, MenuItem, Select, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import DoubleText from '../components/DoubleText'
import MenuIcon from '@mui/icons-material/Menu';
import textStyle from '../helpers/textStyle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import formatAmount from '../helpers/formatAmount';

function valuetext(value) {
    return formatAmount(value);
}

const Category = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState([500, 1500]);
    const open = Boolean(anchorEl);
    const marks = [
        {
            value: 0,
            label: formatAmount('0')
        },
        {
            value: 5000,
            label: formatAmount('5000')
        }
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ margin: 'auto', width: '80%' }}>
            <DoubleText frontText='KURTIS' backText='' />
            <hr style={{ backgroundColor: '#000000' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MenuIcon fontSize='small' />
                <Typography style={{ ...textStyle, fontWeight: 500, fontSize: 20, fontStyle: 'medium' }} ml={1}>Refined By:</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: 15 }}>
                <Link style={{ cursor: 'pointer' }} onClick={handleClick}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 15px',
                            border: '1px solid black',
                            minWidth: 180,
                            borderRadius: 10
                        }}>
                        <Typography style={{ ...textStyle, fontSize: 18, fontWeight: 500 }}>Price</Typography>
                        <ArrowDropDownIcon />
                    </div>
                </Link>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            padding: 20
                        }
                    }}
                >
                    <MenuItem onClick={handleClose} style={{ backgroundColor: 'white' }}>
                        <Box sx={{ width: 300 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={0}
                                max={5000}
                                marks={marks}
                            />
                        </Box>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Category
