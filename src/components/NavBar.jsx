import { Container, Box } from '@chakra-ui/react'
import { motion } from "framer-motion"

const NavBar = () => {
    return (
        <Box width='100%'>
            
            <Container 
                display='flex' 
                justifyContent='center'
            >
                {/* <Logo src=''/> */}
                <motion.button
                    whileHover={{ scale: 1.2, floodColor: 'pink' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'tween' }}
                >
                    About
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2, floodColor: 'pink' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'tween' }}
                >
                    Contact
                </motion.button>
            </Container>
        </Box>
    )
}

export default NavBar
