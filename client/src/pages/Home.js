import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import House from '../images/House.png';

function Home() {
  // variable definitions
  const [boxOneSlider, setBoxOneSlider] = useState('0');
  const [boxTwoSlider, setBoxTwoSlider] = useState('750');

  // function definitions
  const handleClick = (e) => {
    e.preventDefault();
    setBoxOneSlider('-750');
    setBoxTwoSlider('0');
  }
  return (
    <div className='outerContainer'>
      <div className="container">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className='slidebox'
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
              mt: -1,
            }}
          >Required Fields</Typography>
          <TextField
            required
            id="standard-required"
            label="Amount"
            variant="standard"
            sx={{
              mt: 0,
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Percentage"
            variant='standard'
            sx={{
              mt: 1,
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Interest"
            variant='standard'
            sx={{
              mt: 1,
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Estimated Rent"
            variant="standard"
            sx={{
              mt: 1,
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Target Profit Per Month"
            variant='standard'
            sx={{
              mt: 1,
            }}
          />
          <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
              mt: 3,
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
              mt: -1,
            }}
          >Optional Fields</Typography>
          <TextField
            id="standard"
            label="Property Tax"
            variant='standard'
            sx={{
              mt: -2,
            }}
          />
          <TextField
            id="standard"
            label="Home Association"
            variant='standard'
            sx={{
              mt: 1,
            }}
          />
          <TextField
            id="standard"
            label="Home Insurance"
            variant='standard'
            sx={{
              mt: 1,
            }}
          />
          <TextField
            id="standard"
            label="Private Mortgage Insurance"
            variant='standard'
            sx={{
              mt: 1,
            }}
          />
          <Button
            variant="outlined"
            sx={{
              mt: 3,
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