import React from 'react';
import { typography } from '@mui/system';
import positiveHouse from '../../images/positiveHouse.png';
import negativeHouse from '../../images/negativeHouse.png';
import House from '../../images/House.png';
import { Typography } from '@mui/material';

function Analysis({ timeframe, cost, revenue, target }) {
  // variable declarations
  const positive = revenue - cost >= target;
  // function declarations
  
  // on component mount

  // returned component
  return (
    <div className='analysis'>
      <img src={positive ? positiveHouse : negativeHouse} alt={House} className='images' />
      <div className='timespan'>
        <p>
          {timeframe}
        </p>
        <p>
          Year
        </p>
        {/* Now I just need to add expenses, revenue, profit, target */}
      </div>
    </div>
  )
}

export default Analysis