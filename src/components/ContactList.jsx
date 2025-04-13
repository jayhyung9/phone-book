import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import usePhoneBookStore from './stores/usePhoneBookStore';


const ContactList = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const phoneBook = usePhoneBookStore((state) => state.phoneBook);

  const filteredContacts = phoneBook.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  


  return <div>

<Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={4}>
      <TextField
        label="이름 검색"
        variant="standard"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredContacts.map((contact) => (
        <Box key={contact.id}>
          {contact.name} - {contact.phoneNumber}
        </Box>
      ))}
    </Box>

{phoneBook.map((item)=>(
<div key={item.id}>
<p>{item.name}</p>
<p>{item.phoneNumber}</p>
</div>
))}
  </div>
}

export default ContactList;
