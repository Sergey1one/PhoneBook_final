import { deleteContact } from 'redux/operations';
import {useDispatch } from 'react-redux';
import { Button, ListItem,  ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'


export const ContactItem = ({ contact }) => {

  const dispatch = useDispatch();
    const { id, name, number } = contact;
     const deleteItem =()=> {

      dispatch(deleteContact(id))
    }

    return(<ListItem ><ListItemText>{name}: {number}</ListItemText>
               <Button variant="outlined" color='secondary' startIcon={<DeleteIcon />}
                onClick={deleteItem}
               >Delete</Button>
           </ListItem>)
}

