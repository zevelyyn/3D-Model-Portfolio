import { Container, Box, transition } from '@chakra-ui/react'
import { motion } from "framer-motion"
import styled from 'styled-components'
import logo from '../assets/sheep-pink.png'

const Logo = styled.img`
    height: 6em
`

const NavBar = () => {
    return (
        <Box width='100%' borderWidth='2px' paddingBottom='5%'>
            
            <Container 
                display='flex' 
                justifyContent='right'
                // width="100%"
                // height="100%"
            >
                <Logo src={logo}/>
                {/* <motion.button
                    whileHover={{ 
                        scale: 1.2,
                        transition: { duration: .2 }
                    }}
                    whileTap={{ 
                        color: 'pink', 
                        scale: .9, 
                        transition: { duration: .2 }
                    }}
                    transition={{ type: 'spring' }}
                >
                    About
                </motion.button> */}
                <button>About</button>
                <button>Contact</button>
                {/* <motion.button
                    whileHover={{ 
                        scale: 1.2,
                        transition: { duration: .2 }
                    }}
                    whileTap={{ 
                        color: 'pink', 
                        scale: .9, 
                        transition: { duration: .2 }
                    }}
                    transition={{ type: 'tween' }}
                >
                    Contact
                </motion.button> */}
            </Container>
        </Box>
    )
}

export default NavBar
