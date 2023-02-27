import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import { useSearchParams, useNavigate } from "react-router-dom";
import Finances from '../images/Finances.png';
import Analysis from './components/Analysis';
import './styles/RentalView.css'

function RentalView() {
  // variable definitions
  const [searchParams] = useSearchParams();
  const [unloaded, setUnloaded] = useState(true);
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  let number = 0;
  const navigate = useNavigate();
  const EPPM = searchParams.get('EPPM');
  const TPPM = searchParams.get('TPPM');

  // function definitions
  const handleReturnHome = (e) => {
    navigate({
      pathname: '/',
    })
  }

  // execute on component mount
  useEffect(() => {
    //axios call to backend to get the information and set the information
    console.log('using effect');
    axios.get('https://mortgagecalculatorapi.netlify.app/.netlify/functions/mortgagecalculator', {
      params: {
        amount: searchParams.get('amount'),
        percentage: searchParams.get('percentage'),
        interest: searchParams.get('interest'),
        propertyTax: Number(searchParams.get('propertyTax')) / 100,
        homeAssoc: searchParams.get('homeAssoc'),
        PMI: searchParams.get('PMI'),
        homeIns: searchParams.get('homeIns'),
      }})
      .then((response) => {
        setUnloaded(false);
        setData(response.data);
        for (let item in response.data) {
          if (EPPM - response.data[item] >= TPPM) {
            number++
          }
        }
        setCounter(number);
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
            height: '100%',
          }}
        >
          <img src={Finances} alt={Finances} className='photo finances' />
          {unloaded ? null : <Typography sx={{ fontSize: '1.2rem', mx: 'auto', mt: '-10px', mb: '5px' }}>{counter} out of 3 matching results</Typography>}
          {unloaded ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> :
          <div className='loadedContainer'>
          <Analysis timeframe='30' cost={data.thirtyYear} revenue={EPPM} target={TPPM} />
          <Analysis timeframe='15' cost={data.fifteenYear} revenue={EPPM} target={TPPM} />
          <Analysis timeframe='10' cost={data.tenYear} revenue={EPPM} target={TPPM} />
          <Button variant='outlined' sx={{ mx: 'auto', mt: '10px' }} onClick={handleReturnHome}>Return To Home Page</Button>
          </div>
          }
      </Box>
      </div>
    </div>
  )
}

export default RentalView