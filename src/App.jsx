import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Homepage";
import About from "../components/About";
import Header from '../components/Header';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  console.log('user object:', user.attributes.email);
  return (
    <>
        {/* <h1>Hello {user.attributes.email}</h1>
        <button style={{ color: 'white' }} onClick={signOut}>Sign out</button> */}
        <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home user={user} signOut={signOut} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default withAuthenticator(App);
