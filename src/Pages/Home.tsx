import React from 'react';
import Navbar from '../Components/NavbarComponents/Navbar';
import { Flex } from '@chakra-ui/react';
import '@lottiefiles/lottie-player';

const Home = () => {
  // Create a React element for lottie-player dynamically
//   const LottiePlayer = React.createElement('lottie-player', {
//     src: "https://assets7.lottiefiles.com/packages/lf20_hmdwlaed.json",
//     background: "transparent",
//     speed: "1",
//     style: {
//       width: "100%",
//       height: "800px",
//       padding: "0",
//       margin: "0",
//     },
//     loop: true,
//     autoplay: true,
//   });

 

  const HomeImg = React.createElement('lottie-player', {
    src: " https://assets9.lottiefiles.com/packages/lf20_g3dzz0wz.json",
    background: "transparent",
    speed: "1",
    style: {
      width: "100%",
      height: "100vh",
      padding: "0",
      margin: "0",
    },
    loop: true,
    autoplay: true,
  });


  return (
    <div>
      <Navbar />
      Home
      <Flex mt={["-2rem", "6rem"]} flex="1">
        {/* {LottiePlayer} */}
        {HomeImg}
      </Flex>
    </div>
  );
};

export default Home;
