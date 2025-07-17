import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material"
const Header = () => {
  return (
    <AppBar style={{background:"rgb(29,69,107)"}} >
        <Toolbar>
            <Typography  variant='h6' >
                CRUD
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header