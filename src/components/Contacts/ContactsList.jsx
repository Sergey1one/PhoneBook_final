import PropTypes from 'prop-types';
// import { useVisibleContacts } from 'components/hooks/useVisibleContacts';
import { ContactItem } from './Contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';




const ContactsList = () => {
  
   
  
    const filteredContacts = useSelector(selectVisibleContacts)
    
 

    return (<List>
        {filteredContacts.map(contact => {
            return (
                <ContactItem  key={contact.id} contact={contact}/>)
        })}
    </List>)
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default ContactsList