import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { useSearchParams } from "react-router-dom";

function RentalView() {
  // variable definitions
  const [searchParams] = useSearchParams();
  const [loaded, setLoaded] = useState(false);
  const amount = searchParams.get('amount');
  const percentage = searchParams.get('percentage');
  const interest = searchParams.get('interest');
  const EPPM = searchParams.get('EPPM');
  const TPPM = searchParams.get('TPPM');
  const propertyTax = Number(searchParams.get('propertyTax'));
  const homeAssoc = searchParams.get('homeAssoc');
  const homeIns = searchParams.get('homeIns');
  const PMI = searchParams.get('PMI');
  console.log(propertyTax);

  useEffect(() => {
    //axios call to backend to get the information and set the information
    axios.get('http://localhost:3001/api/mortgagecalculator', { params: {
      amount,
      percentage,
      interest,
      propertyTax: propertyTax / 100,
      homeAssoc,
      PMI,
      homeIns
    }})
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // retuend component
  return (
    <div className='outerContainer'>
      <div className="container">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            width: '100%',
            position: 'absolute',
            left: `0px`,
          }}
        >
          Rental View!
      </Box>
      </div>
    </div>
  )
}

export default RentalView