import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import House from '../images/House.png';

function Home() {
  return (
    <div className='outerContainer'>
      <div className="container">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
          }}
        >
          <img src={House} alt={House} className='photo' />
          <TextField
            required
            id="standard-required"
            label="Amount"
            variant="standard"
            sx={{
              mt: -2,
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
            id="standard"
            label="Property Tax"
            variant='standard'
            sx={{
              mt: 1,
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
        </Box>
      </div>
    </div>
  )
}

export default Home;