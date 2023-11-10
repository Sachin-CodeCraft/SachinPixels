import React from 'react';
import Navbar from '../Components/NavbarComponents/Navbar';
import { Flex, Box, Text } from '@chakra-ui/react';
import '@lottiefiles/lottie-player';
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar';
import RightSidebar from '../Components/RightSidebar/RightSidebar';

const Home = () => {
  const HomeImg = React.createElement('lottie-player', {
    src: ' https://assets9.lottiefiles.com/packages/lf20_g3dzz0wz.json',
    background: 'transparent',
    speed: '1',
    style: {
      width: '100%',
      height: '100vh',
      padding: '0',
      margin: '0',
    },
    loop: true,
    autoplay: true,
  });

  return (
    <div>
      <Navbar />

      <Flex mt={['-2rem', '6rem']} flex="1">
        <Box w={['0', '0', '60', '60']} className="leftSideBox"></Box>
        <LeftSidebar />

        <Box mt={['0rem', '8rem']} flex="1">
          <Text
            mt={['0', '-4rem']}
            mb={['0', '-6rem']}
            p="0"
            textAlign={'center'}
            fontSize={['20px', '40px']}
            textTransform="uppercase"
            fontWeight="700"
            color="#3b3b3b"
          >
            Login To{' '}
            <span style={{ color: '#007cf7', fontSize: '50px' }}>
              continue{' '}
            </span>{' '}
            <span style={{ color: 'tomato', fontSize: '45px' }}>!</span>{' '}
          </Text>
          <Box
            mt={['-18rem', '0']}
            w="100%"
            overflow="hidden"
            height="100vh"
            // border="2px solid black"
          >
            {HomeImg}
          </Box>
        </Box>
        <Box w={['0', '0', '0', '0', '80']} className="rightSideBox"></Box>
        <RightSidebar />
      </Flex>
    </div>
  );
};

export default Home;
