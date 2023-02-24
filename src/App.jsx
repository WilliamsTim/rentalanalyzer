import React from 'react'
import { styled } from '@mui/system';

const Flex = styled('div')({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
})
const MyComponent = styled('div')({
  color: 'black',
  backgroundColor: '#EAE0C8',
  padding: 8,
  borderRadius: 30,
  width: '28em',
  height: '32em',
});

function App() {
  return (
    <Flex>
      <MyComponent>App</MyComponent>
    </Flex>
  )
}

export default App