import axios from 'axios';

axios.defaults.baseURL = 'https://620f63c9ec8b2ee2833dfa15.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(name, phone) {
  const { data } = await axios.post('/contacts', { name, phone });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
