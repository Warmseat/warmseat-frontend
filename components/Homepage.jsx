import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const queryQuestion = 'give me about 20 words on what the video is about';
const HomePage = () => {
    const [isloading, setIsLoading] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [output, setOutput] = useState('');


  const handleUrlChange = (e) => {
    setYoutubeUrl(e.target.value);
  };
  
  // POST request using axios 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  axios.post('https://i5qz7415i0.execute-api.us-west-2.amazonaws.com/Production/queryvideo', {
    youtubeURL: youtubeUrl,
    query: queryQuestion,
  })
  .then((res) => {
    if (res.status === 200) {
        console.log('POST request went through', res.data);
        setOutput(res.data.body);
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WarmSeat</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/saved-videos">Saved Videos</Nav.Link>
            <Nav.Link href="/query-videos">Query Videos</Nav.Link>
            <Button variant="outline-light" onClick={() => alert('Log out clicked')}>Log Out</Button>
          </Nav>
        </Container>
      </Navbar>

      <Container style={{ marginTop: '20px' }}>
        <h1>Enter YouTube URL</h1>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter YouTube URL"
              value={youtubeUrl}
              onChange={handleUrlChange}
            />
          </Form.Group>
          <Button variant="primary" type='submit' onClick={handleSubmit}>
            Summarize
          </Button>
        <div>{isloading && 'Loading... Please Wait!'}</div>
        </Form>

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
        <div style={{paddingTop: 20}}>{output}</div>
      </Container>
    </div>
  );
};

export default HomePage;
