import { Link, Box, List, ListItem, Divider, Button } from '@mui/material'
import React, { useState } from 'react'
import PriceMenu from './PriceMenu'
import SizeMenu from './SizeMenu'
import SortIcon from '@mui/icons-material/Sort';
import { styled } from "@mui/material/styles";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const FiltersDrawer = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState('0%')
  const CustomButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#eb31e2",
    "&:hover": {
      backgroundColor: "#fc03cf",
    },
  });

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
    if (width === '0%') {
      setWidth('80%')
    } else {
      setWidth('0%')
    }
  }

  const list = () => (
    <Box
      sx={{ width: '65vw', margin: 2 }}
      role="presentation"
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem>
          <PriceMenu value={props?.priceRange} setValue={props?.setPriceRange} />
        </ListItem>
        <Divider />
        <ListItem>
          <SizeMenu sizes={props?.sizes} setSizes={props?.setSizes} />
        </ListItem>
        <ListItem>
          <CustomButton variant='contained' onClick={() => props?.handleFilter(setIsOpen)}>Apply</CustomButton>
        </ListItem>
      </List>
    </Box >
  )
  return (
    <div>
      <Link style={{ cursor: 'pointer' }} onClick={toggleDrawer}>
        <SortIcon fontSize='small' />
      </Link>
      {isOpen && <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: '80vw',
        zIndex: 2147483646,
        height: '100vw',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ margin: '15px 10px' }}>
          <PriceMenu value={props?.priceRange} setValue={props?.setPriceRange} />
        </div>
        <div style={{ margin: '15px 10px' }}>
          <SizeMenu sizes={props?.sizes} setSizes={props?.setSizes} />
        </div>
        <div style={{ margin: '15px 10px' }}>
          <CustomButton variant='contained' onClick={() => props?.handleFilter(setIsOpen)}>Apply</CustomButton>
        </div>
      </div>
      }
    </div>
  )
}

export default FiltersDrawer
