import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const countries = [
  {
    value: 'USA',
    label: '+1',
  },
  {
    value: 'UK',
    label: '+44',
  },
  {
    value: 'Germany',
    label: '+49',
  },
];

const inquiries = [
  {
    value: 'General',
    label: 'General Enquiry',
  },
  {
    value: 'Support',
    label: 'Technical Support',
  },
  {
    value: 'Sales',
    label: 'Sales Enquiry',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

export default function InputForm() {
  const classes = useStyles();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inquiry, setInquiry] = useState('General');
  const [inquiryDetails, setInquiryDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fullName,
      email,
      countryCode,
      phoneNumber,
      inquiry,
      inquiryDetails,
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <TextField
        select
        label="Country Code"
        value={countryCode}
        onChange={(event) => setCountryCode(event.target.value)}
        required
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        required
      />
      <TextField
        select
        label="Enquiry"
        value={inquiry}
        onChange={(event) => setInquiry(event.target.value)}
        required
      >
        {inquiries.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Inquiry Details"
        multiline
        rows={4}
        value={inquiryDetails}
        onChange={(event) => setInquiryDetails(event.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
