import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  // useToast,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  // const toast = useToast()

  // submit login reqest to server

  const handleSubmit = () => {};

  return (
    <Box position={'relative'} py={{ base: 10, sm: 20, lg: 16 }}>
      <Flex
        as={SimpleGrid}
        maxW={'70rem'}
        margin="auto"
        boxShadow=" rgba(0, 0, 0, 0.4) 0px 30px 90px"
        h="40rem"
        borderRadius="20px"
      >
        <Stack
          w={['0', '0', '40rem', '40rem']}
          borderLeftRadius="20px"
          overflow="hidden"
          zIndex="10"
          cursor="pointer"
        >
          <Img>
            <Spline scene="https://prod.spline.design/GS8eIr1xAh29Gwdc/scene.splinecode" />
          </Img>
        </Stack>
        <Stack
          bg={'gray.50'}
          borderRadius="20px"
          borderLeftRadius="0"
          overflow="hidden"
          px={{ base: 4, sm: 6, md: 20 }}
          py={{ base: 4, sm: 6, md: 14 }}
          spacing={{ base: 8 }}
          w="32rem"
          zIndex="200"
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Login
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.600,pink.200)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We are connecting the world, be a part of our community by signing
              in on our website.
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <FormControl id="email" isRequired>
              <TextLabel>Email address</TextLabel>
              <Input type="email" ref={email} />
            </FormControl>
            <FormControl id="passwordLogin" isRequired>
              <TextLabel>Password</TextLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  ref={password}
                />
                <InputRightElement h={'full'}>
                  <ButtonIcon
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </ButtonIcon>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <TextLabel>Confirm password</TextLabel>
              <InputGroup>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  ref={confirmPassword}
                />
                <InputRightElement h={'full'}>
                  <ButtonIcon
                    onClick={() =>
                      setShowConfirmPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </ButtonIcon>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              variant="primary"
              bgGradient="linear-gradient(to right, #a539c1, #671371)"
              color={'white'}
              transition="all 0.4s ease"
              _hover={{
                bgGradient: 'linear-gradient(to right, #dc4fc9, #771072)',
                boxShadow: 'xl',
                transition: 'all 0.4s ease',
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Text textAlign="center" fontSize="12px" py="12px">
              Don&apos;t have an account?{' '}
              <Link to="/">
                <span
                  style={{
                    color: 'purple',
                    textDecoration: 'underline',
                    fontSize: '14px',
                  }}
                >
                  Signup
                </span>
              </Link>
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

const TextLabel = styled(FormLabel)`
  margin-top: 10px;
  margin-bottom: 0 !important;
`;

const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  padding-right: 10px;
  padding-bottom: 5px;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default Login;
