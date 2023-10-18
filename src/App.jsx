import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <>
      <meta https-equiv="Content-Security-Policy" content="script-src * 'sha256-fWEffNYGDN+XQ+YrsU/LKDZAnOcnSlra1fOIm+7oskM=';" />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
