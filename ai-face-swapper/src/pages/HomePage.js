import React from 'react';
import VideoUploader from '../components/VideoUploader';
import CelebrityLibrary from '../components/CelebrityLibrary';
import FaceUploader from '../components/FaceUploader';
import Header from '../components/Header';
import { Container, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ my: 5, textAlign: 'center' }}>
          <Typography variant="h4">AI-Powered Face Swap</Typography>
          <Typography variant="body1">
            Upload your lecture video, choose a face, and create a fun face-swap video!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 4 }}>
          <VideoUploader />
          <FaceUploader />
        </Box>

        <CelebrityLibrary />

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button variant="contained" color="primary" size="large" component={Link} to="/generate">
            Generate Video
          </Button>
        </Box>

        {/* Add navigation buttons for Login and Signup */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button variant="outlined" color="secondary" component={Link} to="/login" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/signup">
            Signup
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
