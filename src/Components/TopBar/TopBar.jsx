import React, { useState } from 'react'
import { redirect, useNavigate, NavLink } from 'react-router-dom'
import './TopBar.css'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import GroupsIcon from '@mui/icons-material/Groups'

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const isLogged = () => {
    return localStorage.getItem('token') === null ? false : true
  }

  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    localStorage.clear()
    location.reload()
  }

  const handleMe = () => {
    return navigate('/user/me')
  }
  const handleHome = () => {
    if (localStorage.getItem('role') === 'admin') {
      return navigate('/admin')
    } else {
      return navigate('/')
    }
  }
  const handleAbout = () => {
    return navigate('/aboutus')
  }

  return (
    <Box
      sx={
        {
          // flexGrow: 1,
        }
      }
    >
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#000000',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            className="Aachen"
            variant="h6"
            component="div"
            onClick={handleHome}
            style={logoStyle}
          >
            MEDIAFAST
          </Typography>
          {isLogged() && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle
                  sx={{
                    color: 'primary.main',
                  }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  sx={{
                    color: 'primary.main',
                  }}
                  onClick={handleMe}
                >
                  <AccountBoxIcon />
                </MenuItem>
                <MenuItem onClick={handleAbout}>
                  <GroupsIcon />
                </MenuItem>
                <MenuItem
                  sx={{
                    color: 'secondary.main',
                  }}
                  onClick={handleLogOut}
                >
                  <LogoutIcon />
                </MenuItem>
                <button
                  onClick={() => {
                    localStorage.setItem('lang', '0')
                    location.reload()
                  }}
                >
                  🇪🇸
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem('lang', '1')
                    location.reload()
                  }}
                >
                  🇬🇧
                </button>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar

const logoStyle = {
  fontSize: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Aachen, sans seriff',
  flexGrow: 1,
  userSelect: 'none',
  cursor: 'pointer',
  color: '#ee9e09',
}
