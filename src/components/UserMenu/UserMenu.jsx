
import { useDispatch, useSelector } from "react-redux"
import { authLogOut } from "redux/auth/auth-operations";
import { selectUserName } from "redux/auth/auth-Selectors";
import Button from '@mui/material/Button'
import { Avatar, Box, Typography } from "@mui/material";

export default function UserMenu() {
    const dispatch = useDispatch();

     const name=useSelector(selectUserName);
    return (
        <Box component='div' sx={{display:'flex', gap:2}}>
            <Avatar>{name[0].toUpperCase()}</Avatar>
            <Typography sx={{my:'auto'}}>Hello, {name}</Typography>
            <Button variant='contained' onClick={()=>dispatch(authLogOut())} >Quit</Button>
           
            
            {/* < Button  onClick={()=>dispatch(authLogOut())}>Log Out<Button/> */}
        </Box>
    )
}