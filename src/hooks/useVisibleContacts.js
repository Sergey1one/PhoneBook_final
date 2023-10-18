import { useSelector }from "react-redux";
const { selectFilter, selectContacts } = require("redux/selectors");

 


export const useVisibleContacts = () => {

    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
   
     
  }