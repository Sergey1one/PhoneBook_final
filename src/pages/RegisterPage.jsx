
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authRegister } from "redux/auth/auth-operations";
import { Box, Button, TextField } from "@mui/material";


 const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const nameInputId = nanoid();

    const onHandleChange = e => {
        const { name, value } = e.currentTarget
        switch (name) {
            case 'name':
                setName(value);
                break;
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
      dispatch(authRegister({name,email,password}))
        resetInput();
    }

    const resetInput = () => {
    setName('');
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
          name="name"
                label="Name"
                value={name}
                onChange={onHandleChange}
            />
                       <TextField
          name="email"
                label="Email"
                value={email}
                onChange={onHandleChange}
                />
                        <TextField
          name="password"
                label="Password"
                value={password}
                onChange={onHandleChange}
       
        />
          <Button variant="outlined" size='large' type="submit">LOGIN</Button> 
    </Box>
        
    )
}

export default RegisterPage


//  <Formik>
//              <FormContacts onSubmit={onFormSubmit} >
//             <label htmlFor={nameInputId}>
//               Name </label>
//             <Input
//                         type="text"
//                         id={nameInputId}
//                 name="name"
//                 value={name}
//                 onChange={onHandleChange}
//   required
//                 />
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