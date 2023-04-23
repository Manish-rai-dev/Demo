import { TextField, InputAdornment, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { countries } from './countries'; 

export default function Form() {
  const [country, setCountry] = useState('US');
  const [enquiry, setEnquiry] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleEnquiryChange = (event) => {
    setEnquiry(event.target.value);
  };

  return (
    <form>
      <TextField label="Full Name" fullWidth />
      <TextField label="Email" fullWidth type="email" />
      <TextField
        label="Your phone number with country code"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
                value={country}
                onChange={handleCountryChange}
                label="Country"
                disableUnderline
              >
                {countries.map(({ code, name }) => (
                  <MenuItem key={code} value={code}>
                    <img src={`https://www.countryflags.io/${code.toLowerCase()}/flat/24.png`} alt={name} />
                    {`+${code}`}
                  </MenuItem>
                ))}
              </Select>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Enquiry for"
        fullWidth
        select
        value={enquiry}
        onChange={handleEnquiryChange}
        InputLabelProps={{ shrink: true }}
      >
        <MenuItem value="sales">Sales</MenuItem>
        <MenuItem value="support">Support</MenuItem>
        <MenuItem value="general">General</MenuItem>
      </TextField>
      <TextField label="Your inquiry" fullWidth multiline rows={4} />
    </form>
  );
}
