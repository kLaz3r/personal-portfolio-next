/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  .hero-container {
    display: flex;
    min-height: calc(100vh - 5rem);
    width: 100vw;
    justify-content: start;
    align-items: center;
    .heading {
      font-size: 1.5rem;
      width: 40%;
      text-align: start;
      margin-left: 10rem;
      margin-bottom: 3rem;
      .social {
        margin-top: 1rem;
        a {
          font-size: 1rem;
          &:hover {
            i {
              color: ${(props) => props.theme.dark};
              background-color: ${(props) => props.theme.secondary};
              border: 1px solid transparent;
            }
          }

          i {
            color: ${(props) => props.theme.secondary};
            border-radius: 50%;
            border: 1px solid ${(props) => props.theme.secondary};
            padding: 0.7rem;
            margin: 0.4rem 0.3rem;
          }
        }
      }
      .contact {
        a {
          display: flex;
          padding: 1rem 2rem;
          margin-top: 1rem;
          background-color: ${(props) => props.theme.secondary};
          color: ${(props) => props.theme.dark};
          cursor: pointer;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 20px;
          border: 1px solid transparent;
          max-width: 40%;
          min-width: 200px;
          font-size: 2rem;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          p {
            padding-right: 1rem;
          }
          &:hover {
            color: ${(props) => props.theme.secondary};
            background-color: transparent;
            border: 1px solid ${(props) => props.theme.secondary};
          }
          &:active {
            transform: translateY(5%);
          }
        }
      }
      h4 {
        color: ${(props) => props.theme.secondary};
        font-size: 2rem;
      }
      h2 {
        color: ${(props) => props.theme.light};
        font-size: 3rem;
      }
      p {
        line-height: 2rem;
      }
    }
    .portrait {
      position: relative;
      width: 50%;
      margin-right: 1rem;
      img {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 20px;
        width: 50%;
        &.stefan {
          transform: translateY(-50%) translateX(50%);
          z-index: 2;
          border-radius: 7rem;
        }
        &.blob {
          z-index: 0;
          transform: translateY(-49%) translateX(50%) scale(150%);
        }
      }
    }
  }
  .testimonials {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.dark};
    font-weight: bold;
    margin: 0 auto;

    padding: 5rem 10rem;
    text-align: start;
    .title {
      margin: 0 auto;
      text-align: center;
      width: 35%;
      margin-bottom: 1rem;
      h1 {
        padding-bottom: 1rem;
        font-size: 4rem;
      }
      .bottom-line {
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.dark};
      }
    }
    .review-container {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .review {
        width: 30%;
        .author {
          font-size: 3rem;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid ${(props) => props.theme.dark};
        }
        .quote {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .hero-container {
      min-height: calc(100vh - 8rem);
      display: block;
      justify-content: start;
      flex-direction: column;
      .heading {
        margin: 0 auto;
        width: auto;
        padding: 1rem 1rem;
        text-align: start;
        .social {
          text-align: center;
        }
        h2 {
          font-size: 2.5rem;
        }
        p {
          line-height: 2.5rem;
        }
      }
      .portrait {
        display: block;
        width: 100%;
        height: 17rem;
        img {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 20px;
          width: 50%;
          &.stefan {
            transform: translateY(0%) translateX(50%);
            z-index: 2;
            border-radius: 7rem;
          }
          &.blob {
            z-index: 0;
            transform: translateY(0%) translateX(50%) scale(150%);
          }
        }
      }
      .contact {
        a {
          margin: 0 auto;
        }
      }
    }
    .testimonials {
      margin: 0;
      padding: 0;
      padding-top: 7rem;
      .title {
        width: 100%;
        padding: 0 1rem;
        h1 {
          font-size: 2.5rem;
        }
      }
      .review-container {
        display: block;
        padding: 0 1rem;
        .review {
          width: 100%;
          padding-bottom: 3rem;
          .author {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <div
        style={{
          background: `url(/images/background.svg) center center/cover`,
        }}
        className='hero-container'
      >
        <div data-aos='fade-right' className='heading'>
          <h4>WELCOME!</h4>
          <h2>I am a Front End Web Developer</h2>
          <p>
            This is my personal portfolio, here you can take a look at my
            photography gallery and web projects.
            <br /> Don&apos;t hesitate to contact me using the button below!
          </p>
          <div className='social'>
            {/* <a href='https://www.instagram.com/_kingof_darkness_/'>
              <i className='fab fa-instagram fa-2x'></i>
            </a> */}
            <a aria-label='github' href='https://github.com/kLaz3r'>
              <i className='fab fa-github fa-2x'></i>
            </a>
            <a
              aria-label='discord'
              href='https://discord.com/users/240478370620506112'
            >
              <i className='fab fa-discord fa-2x'></i>
            </a>
            <a aria-label='reddit' href='https://www.reddit.com/user/kLaz3r'>
              <i className='fab fa-reddit fa-2x'></i>
            </a>
            <a
              aria-label='facebook'
              href='https://www.facebook.com/stefannasturas'
            >
              <i className='fab fa-facebook fa-2x'></i>
            </a>
            <a
              aria-label='linkedin'
              href='https://www.linkedin.com/in/stefan-nasturas-9bb019207/'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
            <a aria-label='fiverr' href='https://www.fiverr.com/klaz3r'>
              <i className='fas fa-briefcase fa-2x'></i>
            </a>
          </div>
          <div className='contact'>
            <a
              aria-label='contact email'
              href='mailto:nasturasstefan@outlook.com'
            >
              <p>Contact</p>
              <i className='fas fa-briefcase'></i>
            </a>
          </div>
        </div>
        <div data-aos='fade-left' className='portrait'>
          <img className='blob' src='/images/blob.svg' alt='' />
          <img className='stefan' src='/images/portrait.png' alt='' />
        </div>
      </div>
      <div className='testimonials'>
        <div data-aos='fade-down' className='title'>
          <h1>Satisfied Clients</h1>
          <div className='bottom-line'></div>
        </div>
        <div data-aos='fade-in' className='review-container'>
          <div className='review'>
            <div className='author'>Hamburghomie</div>
            <div className='quote'>
              Great seller. klaz3r turned a PSD file into a responsive design in
              a short time and for a very fair price. They even added CSS
              animations and effects as a bonus and supplied the example HTML
              files.
            </div>
          </div>
          <div className='review'>
            <div className='author'>Remus Baciu</div>
            <div className='quote'>
              NaPiesa Landing Page
              <br />
              <a href='https://napiesa.ro'>napiesa.ro</a>
            </div>
          </div>
          {/* <div className='review'>
            <div className='author'>lorem ipsum</div>
            <div className='quote'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              deleniti autem dicta mollitia quis minus expedita ipsum architecto
              nihil libero!
            </div>
          </div> */}
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
