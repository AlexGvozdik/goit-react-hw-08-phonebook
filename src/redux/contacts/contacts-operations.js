import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch(error) {
      toast.error('There are no contacts');
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      toast.error("Cann't add contact");
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId=> {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      toast.error("Cann't delete contact");
    }
  },
);


// export const updateContacts = createAsyncThunk(
//   'contacts/updateContacts',
//   async ({ contactId, ...contacts }) => {
//     try{
//       const {data}=  await axios.patch(`/contacts/${contactId}`, {...contact});
//       return data
//     }catch{
//       toast.error("Cann't update contacts");
//     }
//   },
// )

