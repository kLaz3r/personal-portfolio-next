import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  border-bottom: 2px solid ${(props) => props.theme.secondary};
  height: 5rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.dark},
    ${(props) => props.theme.primary}
  );
  // background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1rem;
  ul {
    margin-right: 3rem;
    display: flex;
    list-style-type: none;
    li {
      padding: 0.3rem 0.7rem;
      text-transform: uppercase;
      a {
        font-size: 1.2rem;
        color: ${(props) => props.theme.light};
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.secondary};
          font-weight: bold;
        }
        &.active {
          border-bottom: 1px solid ${(props) => props.theme.secondary};
        }
      }
    }
  }
  .logo-link {
    &:hover {
      opacity: 0.8;
    }
    transition: opacity 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3rem;
    height: 5rem;

    img {
      width: auto;
      height: 3rem;
      padding-bottom: 0rem;
      aspect-ratio: 670/289;
    }
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <Link exact href='/'>
        <a className='logo-link'>
          <Image src='/logo/logog.png' width='135px' height='50px' alt='logo' />
        </a>
      </Link>
      <ul>
        <li>
          <Link href='/photos'>Photos</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </NavBar>
  );
};

export default Navbar;
