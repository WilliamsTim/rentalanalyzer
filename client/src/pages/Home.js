import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate, createSearchParams } from 'react-router-dom';
import House from '../images/House.png';

function Home() {
  // variable definitions
  const [boxOneSlider, setBoxOneSlider] = useState('0');
  const [boxTwoSlider, setBoxTwoSlider] = useState('750');
  const [helperText, setHelperText] = useState(['', '', '', '', '']);
  const [error, setError] = useState([false, false, false, false, false])
  const formOne = useRef(null);
  const formTwo = useRef(null);
  const navigate = useNavigate();

  // function definitions
  const handleClick = () => {
    setBoxOneSlider('-750');
    setBoxTwoSlider('0');
  }
  const toggleError = (index) => {
    let helper = ['', '', '', '', ''];
    let err = [false, false, false, false, false];
    helper[index] = 'This Field Is Required';
    err[index] = true;
    setHelperText(helper);
    setError(err);
  }
  const validateBoxOne = (e) => {
    e.preventDefault();
    for (let i = 0; i < 5; i++) {
      if (formOne.current[i].value === '') {
        toggleError(i);
        return;
      }
    }
    handleClick();
    // the form doesn't count the image, text or button, so it is just indexes 0-4 that have the necessary info
  }
  const handleRedirect = (e) => {
    const params = {
      amount: formOne.current[0].value,
      percentage: formOne.current[1].value,
      interest: formOne.current[2].value,
      EPPM: formOne.current[3].value,
      TPPM: formOne.current[4].value,
      propertyTax: formTwo.current[0].value || '1',
      homeAssoc: formTwo.current[1].value,
      homeIns: formTwo.current[2].value,
      PMI: formTwo.current[3].value,
    }
    navigate({
      pathname: '/rentalview',
      search: `?${createSearchParams(params)}`
    })
  }
  return (
    <div className='outerContainer'>
      <div className="container">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className='slidebox'
          ref={formOne}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            width: '100%',
            position: 'absolute',
            left: `${boxOneSlider}px`,
          }}
        >
          <img src={House} alt={House} className='photo' />
          <Typography
            sx={{
              mx: 'auto',
              mt: -1.5,
            }}
          >Required Fields</Typography>
          <TextField
            required
            id="standard-required"
            label="House Price"
            variant="standard"
            helperText={helperText[0]}
            error={error[0]}
            type="number"
            placeholder='E.g. 200000'
            defaultValue='200000'
            sx={{
              mt: 0.5,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Down Payment Percentage"
            variant='standard'
            helperText={helperText[1]}
            error={error[1]}
            type="number"
            placeholder='E.g. 20'
            defaultValue='20'
            sx={{
              mt: 1.5,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Interest On Loan"
            variant='standard'
            helperText={helperText[2]}
            error={error[2]}
            type="number"
            placeholder='E.g. 6.5'
            defaultValue='6.5'
            sx={{
              mt: 1.5,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Estimated Rent Per Month"
            variant="standard"
            helperText={helperText[3]}
            error={error[3]}
            type="number"
            placeholder='E.g. 1500'
            defaultValue='1500'
            sx={{
              mt: 1.5,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Target Profit Per Month After Expenses"
            variant='standard'
            helperText={helperText[4]}
            error={error[4]}
            type="number"
            placeholder='E.g. 500'
            defaultValue='0'
            sx={{
              mt: 1.5,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
          />
          <Button
            variant="outlined"
            onClick={validateBoxOne}
            sx={{
              mt: 3,
              mb: 4,
              borderRadius: 10,
            }}
          >
            Next
          </Button>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className='slidebox'
          ref={formTwo}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            width: '100%',
            position: 'absolute',
            left: `${boxTwoSlider}px`,
          }}
        >
          <img src={House} alt={House} className='photo' />
          <Typography
            sx={{
              mx: 'auto',
              mt: -1.5,
            }}
          >Optional Fields</Typography>
          <TextField
            id="standard"
            label="Property Tax Percentage"
            variant='standard'
            type="number"
            placeholder='E.g. 1'
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>
            }}
            sx={{
              mt: 0.5,
            }}
          />
          <TextField
            id="standard"
            label="Home Association Per Year"
            variant='standard'
            type="number"
            placeholder="E.g. 650"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            sx={{
              mt: 1,
            }}
          />
          <TextField
            id="standard"
            label="Home Insurance Per Year"
            variant='standard'
            type="number"
            placeholder='E.g. 1500'
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            sx={{
              mt: 1,
            }}
          />
          <TextField
            id="standard"
            label="Private Mortgage Insurance Per Year"
            variant='standard'
            type="number"
            placeholder='E.g. 1000'
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            sx={{
              mt: 1,
            }}
          />
          <Button
            onClick={handleRedirect}
            variant="outlined"
            sx={{
              mt: 3,
              mb: 4,
              borderRadius: 10,
            }}
          >
            Go
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default Home;