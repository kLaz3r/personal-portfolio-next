import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import AdminAuthForm from '../components/AdminAuthForm';
import AdminPhotoUpload from '../components/AdminPhotoUpload';
import AdminProjectUpload from '../components/AdminProjectUpload';
import Layout from '../components/Layout';

const AdminWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5rem);
  h3 {
    font-size: 3rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  .AdminAuthForm {
    width: 100%;
    max-width: 40%;
    form {
      background-color: ${(props) => props.theme.dark};
      color: white;
      padding: 2rem;
      display: block;
      border-radius: 15px;
      label {
        display: block;
        text-align: start;
        font-size: 2rem;
      }
      input {
        border-radius: 15px;
        display: block;
        width: 100%;
        padding: 1rem 0.5rem;
        background-color: ${(props) => props.theme.light};
        color: ${(props) => props.theme.dark};
        outline: none;
        border: 2px solid transparent;
        &:active {
          outline: none;
          border: 2px solid ${(props) => props.theme.secondary};
        }
        &:hover {
          outline: none;
          border: 2px solid ${(props) => props.theme.secondary};
        }
      }
      button {
        display: block;
        width: 100%;
        color: ${(props) => props.theme.secondary};
        background-color: ${(props) => props.theme.dark};
        border: 1px solid ${(props) => props.theme.secondary};
        font-size: 2rem;
        border-radius: 15px;
        padding: 1rem 2rem;
        margin-top: 2rem;
        transition: all 0.1s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.dark};
          background-color: ${(props) => props.theme.secondary};
          border: 1px solid ${(props) => props.theme.dark};
        }
        &:active {
          transform: translateY(5%);
        }
      }
    }
  }
  .AdminUpload {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 20px;
    background-color: ${(props) => props.theme.dark};
    .AdminPhotoUpload {
      width: 50%;
      padding: 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px solid ${(props) => props.theme.secondary};
      .output {
        width: 100%;
        .progress-bar {
          width: 100%;
          border-radius: 10px;
          background: ${(props) => props.theme.dark};
          height: 2rem;
          .progress-fill {
            background-color: ${(props) => props.theme.secondary};
            border-radius: 10px;
            color: ${(props) => props.theme.dark};
            font-size: 1.5rem;
            height: 100%;
          }
        }
      }
      input {
        margin-top: 2rem;
        border-radius: 15px;
        display: block;
        width: 100%;
        padding: 1rem 0.5rem;
        background-color: ${(props) => props.theme.light};
        color: ${(props) => props.theme.dark};
        outline: none;
        border: 2px solid transparent;

        &:active {
          outline: none;
          border: 2px solid ${(props) => props.theme.secondary};
        }
        &:hover {
          outline: none;
          border: 2px solid ${(props) => props.theme.secondary};
        }
      }
    }
    .AdminProjectUpload {
      width: 50%;
      padding: 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid ${(props) => props.theme.secondary};
      .output {
        width: 100%;
        .progress-bar {
          width: 100%;
          border-radius: 10px;
          background: ${(props) => props.theme.dark};
          height: 2rem;
          .progress-fill {
            background-color: ${(props) => props.theme.secondary};
            border-radius: 10px;
            color: ${(props) => props.theme.dark};
            font-size: 1.5rem;
            height: 100%;
          }
        }
      }
      form {
        background-color: ${(props) => props.theme.dark};
        color: white;
        padding: 1rem;
        display: block;
        border-radius: 15px;
        label {
          padding-top: 1rem;
          display: block;
          text-align: start;
          font-size: 2rem;
        }
        input {
          border-radius: 15px;
          display: block;
          width: 100%;
          padding: 1rem 0.5rem;
          background-color: ${(props) => props.theme.light};
          color: ${(props) => props.theme.dark};
          outline: none;
          border: 2px solid transparent;

          &:active {
            outline: none;
            border: 2px solid ${(props) => props.theme.secondary};
          }
          &:hover {
            outline: none;
            border: 2px solid ${(props) => props.theme.secondary};
          }
        }
        button {
          display: block;
          width: 100%;
          color: ${(props) => props.theme.secondary};
          background-color: ${(props) => props.theme.dark};
          border: 1px solid ${(props) => props.theme.secondary};
          font-size: 2rem;
          border-radius: 15px;
          padding: 1rem 2rem;
          margin-top: 2rem;
          transition: all 0.1s ease-in-out;
          &:hover {
            color: ${(props) => props.theme.dark};
            background-color: ${(props) => props.theme.secondary};
            border: 1px solid ${(props) => props.theme.dark};
          }
          &:active {
            transform: translateY(5%);
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 0;
    padding: 0;
    margin: 0;
    min-height: calc(100vh - 8rem);
    .AdminAuthForm {
      min-width: 100%;
      border-radius: 0;
      min-height: 100%;
      display: block;
      form {
        border-radius: 0;
      }
    }
    .AdminUpload {
      border-radius: 0;
      flex-direction: column;
      .AdminPhotoUpload {
        border: none;
        width: 100%;
      }
      .AdminProjectUpload {
        width: 100%;
        border: none;
        border-top: 1px solid ${(props) => props.theme.secondary};
        form {
          padding: 1rem 0;
        }
      }
    }
  }
`;

const Admin = () => {
  const [auth, setAuth] = useState(false);
  let display;
  if (!auth) {
    display = <AdminAuthForm setAuth={setAuth} />;
  } else {
    display = (
      <div className='AdminUpload'>
        <AdminPhotoUpload />
        <AdminProjectUpload />
      </div>
    );
  }
  return (
    <Layout>
      <Head>
        <title>Admin | Stefan Nasturas Web Dev</title>
      </Head>
      <AdminWrapper>
        <h3>Admin Panel</h3>
        {display}
      </AdminWrapper>
    </Layout>
  );
};

export default Admin;
