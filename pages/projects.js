import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { getProjects } from '../lib/firebase';

export async function getStaticProps() {
  const docs = await getProjects();
  const projects = docs.map((doc) => {
    return {
      name: doc.name,
      link: doc.link,
      img: doc.img,
    };
  });
  return {
    props: {
      projects,
    },
  };
}

const ProjectsWrapper = styled.div`
  min-height: calc(100vh - 5rem);
  /* background-color: rgba(0, 0, 0, 0.4); */
  background-color: ${(props) => props.theme.dark};
  .GridContainer {
    height: auto;
    display: grid;
    padding: 2rem 2rem;
    gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
    .Project {
      border-radius: 10px;
      height: 20rem;
      position: relative;
      &:hover .overlay {
        opacity: 1;
      }
      // img {
      //   display: block;
      //   width: 100%;
      //   height: 100%;
      // }
      .overlay {
        border-radius: 10px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        max-height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.5s ease;
        color: white;
        background-color: ${(props) => props.theme.secondary};
      }
      .text {
        color: white;
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .GridContainer {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 700px) {
    .GridContainer {
      grid-template-columns: 1fr 1fr;
      .Project {
        height: 10rem;
      }
    }
  }
`;

const Projects = ({ projects }) => {
  return (
    <Layout>
      <ProjectsWrapper>
        <div className='GridContainer'>
          {projects &&
            projects.map((item) => {
              return (
                <div
                  key={item.name}
                  className='Project'
                  style={{
                    background: `url("${item.img}") center center/cover`,
                  }}
                >
                  <a href={item.link} className='overlay'>
                    <div className='text'>{item.name}</div>
                  </a>
                </div>
              );
            })}
        </div>
      </ProjectsWrapper>
    </Layout>
  );
};

export default Projects;
