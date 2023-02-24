import React from 'react'
import { styled } from '@mui/system';

const Flex = styled('div')({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
})
const Container = styled('div')({
  color: 'black',
  backgroundColor: 'white',
  padding: 8,
  borderRadius: 30,
  width: '28em',
  height: '32em',
});

function RentalView() {
  return (
    <Flex>
      <Container className="container">Rental view</Container>
    </Flex>
  )
}

export default RentalView