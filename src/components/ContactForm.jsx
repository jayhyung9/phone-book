import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import usePhoneBookStore from './stores/usePhoneBookStore'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const {addContact} = usePhoneBookStore()
    const handleAddContact=()=>{
        if(!name.trim()||!phoneNumber.trim()) return
        addContact(name,phoneNumber)
    }
  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
      <TextField id="name" label="이름" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="phone-number" label="연락처" variant="standard" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <Button variant="outlined" size="large" onClick={handleAddContact}>추가</Button>
    </Box>
  )
}

export default ContactForm;
