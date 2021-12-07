/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  Modal, Box, Typography, Button, TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('store', 'true');
  };

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

  useEffect(() => {
    const isStored = JSON.parse(localStorage.getItem('store'));
    if (!isStored) {
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Subscribe
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form name="spreadsheet" onSubmit={handleSubmit} className="spreadsheet" autoComplete="off">
              <TextField id="outlined-basic" label="Name" variant="filled" value={name} small="true" onChange={(e) => setName(e.target.value)} />
              <TextField id="filled-basic" label="Email" variant="filled" value={email} small="true" onChange={(e) => setEmail(e.target.value)} />
              <TextField id="filled-basic" label="Phone" variant="filled" value={phone} small="true" onChange={(e) => setPhone(e.target.value)} />
              <Button type="submit" variant="contained">
                Send
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
