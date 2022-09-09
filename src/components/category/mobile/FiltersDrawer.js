import { Link, Drawer, Box, List, ListItem, Divider, Button } from '@mui/material'
import React, { useState } from 'react'
import PriceMenu from './PriceMenu'
import SizeMenu from './SizeMenu'
import SortIcon from '@mui/icons-material/Sort';
import { styled } from "@mui/material/styles";
import zIndex from '@mui/material/styles/zIndex';

const FiltersDrawer = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const CustomButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#eb31e2",
    "&:hover": {
      backgroundColor: "#fc03cf",
    },
  });

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
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
          <CustomButton variant='contained' onClick={props?.handleFilter}>Apply</CustomButton>
        </ListItem>
      </List>
    </Box >
  )
  return (
    <div>
      <Link style={{ cursor: 'pointer' }} onClick={toggleDrawer}>
        <SortIcon fontSize='small' />
      </Link>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {list()}
      </Drawer>
    </div>
  )
}

export default FiltersDrawer
