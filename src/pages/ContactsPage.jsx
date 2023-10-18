import { ToastContainer } from 'react-toastify';
 import { GlobalStyle } from 'components/Global Styles';
import 'react-toastify/dist/ReactToastify.css';
import Section from 'components/Section';
import ContactsList from 'components/Contacts/ContactsList';
import Filter from 'components/Filter';
import { FormContact } from 'components/Form/Form';

import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from "react-redux";
import {  selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { Box } from '@mui/material';


export  default function ContactPage() {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error=useSelector(selectError)
  
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
    
  return (<Box sx={{ width: 500, mx:'auto'}}> <Section title={'Phonebook'}>
                 
        <FormContact 
        />
         {isLoading && !error && <b>Request in progress...</b>}
      </Section>
      
       <Section title="Contacts">

        <Filter/>
          
        <ContactsList/>
          
        </Section>
        <GlobalStyle/>
      <ToastContainer />
      </Box>)
}