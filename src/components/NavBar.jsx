import { Container, Box, transition } from '@chakra-ui/react'
import { motion } from "framer-motion"
import styled from 'styled-components'

const Logo = styled.img`
    height: 6em
`

const NavBar = () => {
    return (
        <Box width='100%' borderWidth='2px'>
            
            <Container 
                display='flex' 
                justifyContent='center'
            >
                <Logo src='../assets/sheep.png'/>
                <motion.button
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
                </motion.button>
                <motion.button
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
                </motion.button>
            </Container>
        </Box>
    )
}

export default NavBar
