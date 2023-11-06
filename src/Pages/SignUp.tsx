import React, { useRef } from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';

const SignUp = () => {
  // const [showPassword, setShowPassword] = useState(false);

  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Warapper>
      <FristContainer>
        <Img>
          <Spline scene="https://prod.spline.design/GS8eIr1xAh29Gwdc/scene.splinecode" />
        </Img>
      </FristContainer>
      <SecondContainer>
        <StyledStack spacing={4}>
          <StyledHeading>
            Join our community
            <TextA as="span">!</TextA>
          </StyledHeading>
          <StyledText>
            We are connecting the world, be a part of our community by
            registering on our website.
          </StyledText>
          <div>
            <FormControl isRequired>
              <FormLabel>Firstname</FormLabel>
              <Input type="text" ref={firstname} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Lastname</FormLabel>
              <Input type="text" ref={lastname} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={email} />
            </FormControl>
            <FormControl id="passwords" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  ref={password}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              fontFamily={'heading'}
              variant="primary"
              mt={8}
              w={'full'}
              bgGradient="linear-gradient(to right, #594bb7, #2c1848)"
              color={'white'}
              transition="all 0.4s ease"
              _hover={{
                bgGradient: 'linear-gradient(to right, #964fdc, #3e1077)',
                boxShadow: 'xl',
                transition: 'all 0.4s ease',
              }}
              onClick={handleSubmit}
            >
              Signup
            </Button>
            <Text textAlign="center" fontSize="12px" py="6px">
              Already registered? &nbsp;
              <Link to="/login">
                <span
                  style={{
                    color: 'purple',
                    textDecoration: 'underline',
                    fontSize: '14px',
                  }}
                >
                  Login
                </span>{' '}
              </Link>
            </Text>
          </div>
        </StyledStack>
      </SecondContainer>
    </Warapper>
  );
};

const Warapper = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border-radius: 20px;
`;

const FristContainer = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SecondContainer = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  justify-content: center;
  padding: 56px 105px;
`;

const StyledStack = styled(Stack)`
  // Add your custom styles here
`;

const StyledHeading = styled(Heading)`
  color: gray.800;
  line-height: 1.1;
  font-size: 2.5rem;

  @media (min-width: 30em) {
    font-size: 1.875rem;
  }
  @media (min-width: 48em) {
    font-size: 2.25rem;
  }
`;

const TextA = styled(Text)`
  background-image: linear-gradient(to right, #9f7aea, #fbb6ce);
  color: transparent;
  -webkit-background-clip: text;
  font-size: sm;
  @media (min-width: 30em) {
    background-image: linear-gradient(to right, #9f7aea, #fbb6ce);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const StyledText = styled(Text)`
  color: #718096;
  font-size: 1rem;
  @media (min-width: 30em) {
    font-size: 1.125rem;
  }
`;

export default SignUp;
