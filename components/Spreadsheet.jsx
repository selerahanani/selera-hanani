/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function Spreadsheet() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const form = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    form.append('email', email);
    form.append('phone', phone);
    fetch('https://script.google.com/macros/s/AKfycbxe1TgLL11kr1q8Dg3QhWZpO524VD9bRgf4Njdg1muNmH288RWvwQtO25TA7-5IK8hm-Q/exec', { method: 'POST', body: form })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
  };
  return (
    <form name="spreadsheet" onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <input name="phone" type="phone" placeholder="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
