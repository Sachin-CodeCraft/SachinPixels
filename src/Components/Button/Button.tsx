import React from 'react';
import { IProps } from './types';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import styled from 'styled-components/macro';

const Button = (props: IProps) => {
  return <Wrapper></Wrapper>;
};

/* Change this as per your component requirement */
const Wrapper = styled.div`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
  padding: 10px;
  @media ${QUERIES.lapTopAndBelow} {
    color: ${COLORS.white};
    padding: 8px;
  }
`;

export default Button;
