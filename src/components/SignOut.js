import React from 'react';

import AuthenticationButton from './AuthenticationButton';
import { signOut } from '../firebase/authentication';

export default function SignOut() {
  return (
    <AuthenticationButton
      onClick={signOut}
      text='Sign Out'
      color='secondary'
      variant='contained'
    />
  );
}
