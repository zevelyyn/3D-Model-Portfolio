import { React } from 'react'
import styled from 'styled-components'
import { Container, Box } from '@chakra-ui/react'
import './App.css'
import Models from "./components/Models"
import NavBar from "./components/NavBar"

const Left = styled.div`
  flex: 1;
  align-items: center;
  width: 40vw;
  padding-top: 5em;
`
const Title1 = styled.div`
  font-size: 75px;
  font-weight: bold;
  text-align: right;
  line-height: 65px;
`

const Title2 = styled.div`
  font-size: 60px;
  text-align: right;
`

const App = () => {
  return (
    
      <Container display='flex' alignItems='center'>
        <Left>
          <Box height='90vh' margin='2'>
            <NavBar/>
            <Container paddingTop='20%' height='100%'>
              <Title1>3D Model</Title1>
              <Title2>Portfolio</Title2>
              <p className="subheading">
                I'm Evelyn and this is my 3D model portfolio
              </p> 
            </Container>
          </Box>
        </Left>
        <div className='right'>
          <Models />
        </div>
      </Container>
    
  )
}

export default App
