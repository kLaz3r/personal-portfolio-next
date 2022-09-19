/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding-top: 3rem;
  width: 100vw;
  margin: auto;
  min-height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    margin: auto;
    justify-content: center;
    .Logo {
      box-shadow: 0px 0px 50px 50px rgba(0, 0, 0, 0.5);
      width: 50%;
      padding-right: 2rem;
      background: rgba(0, 0, 0, 0.5);
      img {
        width: 100%;
      }
    }
    .Heading {
      width: 50%;
      border-radius: 0px 10px 10px 0px;
      max-width: 700px;
      background: rgba(0, 0, 0, 0.5);
      border-left: 4px solid ${(props) => props.theme.secondary};
      padding: 1rem;
      h3 {
        font-size: 2.5rem;
        text-align: start;
        a {
          text-decoration: none;
          color: ${(props) => props.theme.secondary};
        }
      }
      p {
        text-align: start;
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: 100;
        letter-spacing: 2;
      }
      .Certifications {
        border-top: 4px solid ${(props) => props.theme.secondary};
        margin-top: 1rem;
        h2 {
          padding: 1rem 0;
        }
        .Certification {
          padding-bottom: 1rem;
          h5 {
            font-size: 1rem;
            padding-bottom: 0.5rem;
          }
          span {
            margin-right: 2rem;
            padding-left: 1rem;
          }
          a {
            text-decoration: none;
            color: ${(props) => props.theme.dark};
            font-weight: bold;
            background-color: ${(props) => props.theme.secondary};
            padding: 0.5rem 1rem;
            border-radius: 10px;
            border: 1px solid transparent;
            &:hover {
              color: ${(props) => props.theme.secondary};
              background-color: transparent;
              transition: all 0.3s ease;
              border: 1px solid ${(props) => props.theme.secondary};
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    min-height: unset;
    width: 100%;
    padding: 0;
    .flex-container {
      display: block;
      width: 100%;
      .Logo {
        display: none;
      }
      .Heading {
        width: 100%;
        height: 100%;
        border-radius: 0;
        border-left: 0;
        h3 {
          font-size: 1.5rem;
        }
        .Certifications {
          .Certification {
            a {
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper
      style={{
        background: `url('/images/wave-haikei.svg') center center/cover`,
      }}
    >
      <div className='flex-container'>
        <div data-aos='fade-right' className='Logo'>
          <img src='/logo/logow.png' alt='logo' />
        </div>
        <div data-aos='fade-left' className='Heading'>
          <h3>
            Hello! My name is{' '}
            <span>
              <Link href='/admin'>Stefan</Link>
            </span>
            , I&apos;m a beginner front end dev from Romania.
          </h3>
          <p>I like designing websites and branding for clients.</p>
          <p>
            My key strengths are visual & interaction design, and also
            analytical thinking and coding.
          </p>
          <p>
            I don&apos;t have much experience as I am only a beginner but I am
            open to learning new things and tehnologies. Everything is changing
            in the tech world and a good developer should be up to date.
          </p>
          <div className='Certifications'>
            <h2>Certifications:</h2>
            <div className='Certification'>
              <h5>JavaScript Algorithms and Data Structures</h5>
              <span>freeCodeCamp</span>
              <a href='https://www.freecodecamp.org/certification/fcc9d52b9c9-b87a-495e-a687-fae1398226ef/javascript-algorithms-and-data-structures'>
                Learn More | Credential
              </a>
            </div>
            <div className='Certification'>
              <h5>Front End Development Libraries</h5>
              <span>freeCodeCamp</span>
              <a href='https://www.freecodecamp.org/certification/fcc9d52b9c9-b87a-495e-a687-fae1398226ef/front-end-development-libraries'>
                Learn More | Credential
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
