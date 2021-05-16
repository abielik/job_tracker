import React from 'react';

import AuthenticationButton from './AuthenticationButton';
import { signInWithGoogle } from '../firebase/authentication';

export default function SignIn() {
  return (
    <AuthenticationButton
      onClick={signInWithGoogle}
      text='Sign In'
      color='inherit'
      variant='contained'
    />
  );
}
