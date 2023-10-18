
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogIn } from "redux/auth/auth-operations";
import { Box, Button, TextField } from "@mui/material";


 const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


     const onHandleChange = e => {
        console.log(e.target)
        const { id, value } = e.currentTarget
        switch (id) {
       
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };
 const onFormSubmit = e => {
        e.preventDefault();
      dispatch(authLogIn({email,password}))
        resetInput();
    }

    const resetInput = () => {
   
        setEmail('');
        setPassword('');
  };


    return (
        <Box
            component="form"
            onSubmit={onFormSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',  
             alignItems:'center',
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
        >
            
                 <TextField
          id="email"
                label="Email"
                value={email}
                onChange={onHandleChange}
        
                />
                        <TextField
          id="password"
                label="Password"
                value={password}
                onChange={onHandleChange}
       
        />
          <Button variant="outlined" size='large' type="submit">LOGIN</Button> 
    </Box>
        
    )
}

export default LoginPage


//  <Formik>
//              <FormContacts onSubmit={onFormSubmit} >
          
//                  <label htmlFor={nameInputId}>
//              Email </label>
//                 <Input
//   type="email"
//                     name="email"
//                     value={email}
//                     onChange={onHandleChange}

//   required
//                 />
//                   <label htmlFor={nameInputId}>
//              Password </label>
//                 <Input
//   type="text"
//                     name="password"
//                     value={password}
//                     onChange={onHandleChange}

//   required
// />
//         <button type="submit" >Register</button>
//                 </FormContacts>
//                 </Formik>