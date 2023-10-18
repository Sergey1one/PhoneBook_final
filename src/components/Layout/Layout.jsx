import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import UserMenu from "components/UserMenu/UserMenu"
import { Suspense } from "react"
import { useSelector } from "react-redux"
import {Outlet} from 'react-router-dom'
import { selectIsLoggedIn } from "redux/auth/auth-Selectors"
import { AuthNav } from "./AuthNav"
import { Navigation } from "./Navigation"




export const Layout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  
    return (
        <Box sx={{
            width: '100%',
            
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,mt:8}}>
            <AppBar>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton>
                          <MenuIcon/>  
                        </IconButton>

                    </Box>   
              
                        
                        <Navigation/>
                    {isLoggedIn?<UserMenu/>:<AuthNav />}
          
                 
                    
                  
                    </Toolbar>
            </AppBar>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
                </Suspense>
        </Box>
    )
}