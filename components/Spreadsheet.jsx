/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function Spreadsheet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('phone', phone);
    fetch('https://script.google.com/macros/s/AKfycbxe1TgLL11kr1q8Dg3QhWZpO524VD9bRgf4Njdg1muNmH288RWvwQtO25TA7-5IK8hm-Q/exec', { method: 'POST', body: form })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
  };
  return (
    <form name="spreadsheet" onSubmit={handleSubmit} className="spreadsheet" autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="filled" value={name} small="true" onChange={(e) => setName(e.target.value)} />
      <TextField id="filled-basic" label="Email" variant="filled" value={email} small="true" onChange={(e) => setEmail(e.target.value)} />
      <TextField id="filled-basic" label="Phone" variant="filled" value={phone} small="true" onChange={(e) => setPhone(e.target.value)} />
      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
}
