import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

const HomePage = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [videoList, setVideoList] = useState([]);

  const handleUrlChange = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const handleAddVideo = () => {
    if (youtubeUrl.trim() !== '') {
      setVideoList([...videoList, youtubeUrl]);
      setYoutubeUrl('');
    }
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
        <h1>Enter YouTube URLs</h1>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter YouTube URL"
              value={youtubeUrl}
              onChange={handleUrlChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddVideo}>
            Add
          </Button>
        </Form>

        <h2>Added Videos:</h2>
        <ul>
          {videoList.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default HomePage;
