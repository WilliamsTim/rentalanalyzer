import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { useSearchParams } from "react-router-dom";
import Finances from '../images/Finances.png';

function RentalView() {
  // variable definitions
  const [searchParams] = useSearchParams();
  const [loaded, setLoaded] = useState(false);
  const EPPM = searchParams.get('EPPM');
  const TPPM = searchParams.get('TPPM');

  useEffect(() => {
    //axios call to backend to get the information and set the information
    axios.get('http://localhost:3001/api/mortgagecalculator', { params: {
      amount: searchParams.get('amount'),
      percentage: searchParams.get('percentage'),
      interest: searchParams.get('interest'),
      propertyTax: Number(searchParams.get('propertyTax')) / 100,
      homeAssoc: searchParams.get('homeAssoc'),
      PMI: searchParams.get('PMI'),
      homeIns: searchParams.get('homeIns'),
    }})
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // returned component
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
          <img src={Finances} alt={Finances} className='photo finances' />
      </Box>
      </div>
    </div>
  )
}

export default RentalView