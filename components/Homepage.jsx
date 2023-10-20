import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


// const serverURL = 'https://i5qz7415i0.execute-api.us-west-2.amazonaws.com/Production/queryvideo';
const serverURL = 'https://warmseat-backend.onrender.com/queryvideo';
// const queryQuestion = 'give me about 20 words on what the video is about';

const HomePage = ({ user, signOut }) => {
  const [isloading, setIsLoading] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);
  const userEmail = user.attributes.email;

  const userName = userEmail.split('@')[0];

  useEffect(() => {
    const initialYoutubeUrl = localStorage.getItem('youtubeUrl') || '';
    const initialQuery = localStorage.getItem('query') || '';
    
    setYoutubeUrl(initialYoutubeUrl);
    setQuery(initialQuery);
  }, []);

  useEffect(() => {
    localStorage.setItem('youtubeUrl', youtubeUrl);
    localStorage.setItem('query', query);
  }, [youtubeUrl, query]);

  const handleUrlChange = (e) => {
    setYoutubeUrl(e.target.value);
  };
  
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  // POST request using axios 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

  axios.post(serverURL, {
    youtubeURL: youtubeUrl,
    query: query,
  })
  .then((res) => {
    if (res.status === 200) {
        console.log('POST request went through', res.data);
        setOutput(res.data.body);
        document.querySelector('.output-container', 'pre.queryOutput').classList.add('expanded');
        setHistory([...history, { youtubeUrl, query }]);
        // setYoutubeUrl(''); this clears out the url after submit
        setQuery('');
          // this clears out the query after submit
      } else {
        console.error('Post request didnt go through:', res.status, res.data);
    }
  })
  .catch((err) => {
    console.error('Post Request Error:');
  })
  .finally(() => {
    setIsLoading(false);
  });
  };
  return (
    <div>
      <Container style={{ marginTop: '20px' }}>
        <h1 className='app-title'>Welcome to WarmSeat, {userName}</h1>
        <div className='query-container'>
          <Form className='form-container'>
            <Form.Group className='form-container'>
              <Form.Label>YouTube URL.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter YouTube URL"                  value={youtubeUrl}
                onChange={handleUrlChange}
              />
            </Form.Group>
            <Form.Group className='form-container'>
              <Form.Label>Query</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your query"
                value={query}
                onChange={handleQueryChange}
              />
            </Form.Group>
            <button className='query-btn' onClick={handleSubmit}>
              Submit
            </button>
            <div className='history-container'>
              <h2 className='history-title'>History:</h2>
                <ul>
                  {history.map((item, index) => (
                    <li key={index}>
                      <strong>YouTube URL:</strong> {item.youtubeUrl},
                      <strong>Query:</strong> {item.query}
                    </li>
                  ))}
                </ul>
            </div>
          </Form>
          <div className='output-container'>
            <div style={{ paddingTop: 20 }}>
              <pre className='queryOutput'>
                {isloading ? ( 
                    <img className='loader-img' src='assets/duck-loading.gif' alt='this is loading....'/> 
                ) : ( output || 'No results available yet. Please enter the URL, your query/question, and then click "Submit" to see the results.' )}
              </pre>
            </div>
          </div>
        </div>

        {/* <h2>Added Videos:</h2>
        <ul>
          {videoList.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul> */}
      </Container>
    </div>
  );
};

export default withAuthenticator(HomePage);
