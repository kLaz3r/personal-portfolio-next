import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
`;

const Footer = () => {
  return <Wrapper>Copyright &copy; Stefan Nasturas 2022</Wrapper>;
};

export default Footer;
