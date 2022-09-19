import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../lib/firebase';

const AdminAuthForm = ({ setAuth }) => {
  const authHandler = (e) => {
    e.preventDefault();
    console.log(e.target.children[1].value);
    console.log(e.target.children[3].value);
    signInWithEmailAndPassword(
      auth,
      e.target.children[1].value,
      e.target.children[3].value
    )
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        if (userCredential.user.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
          setAuth(true);
        } else {
          setAuth(false);
          console.log('not admin');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='AdminAuthForm'>
      <form onSubmit={authHandler}>
        <label htmlFor='Email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default AdminAuthForm;
