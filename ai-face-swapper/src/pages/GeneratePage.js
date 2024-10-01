import React, { useState } from 'react';
import { Container, Button, Box, CircularProgress, Typography } from '@mui/material';
import ResultDisplay from '../components/ResultDisplay';
import Header from '../components/Header';

const GeneratePage = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setVideoUrl(null); // Reset video URL for new generation

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Set the video URL to a valid path
      setVideoUrl('/HOW TO FACE SWAP WITH VIDEO _ Face Replacement Tutorial - Wondershare Filmora Video Editor (240p, h264, youtube).mp4'); // Ensure this path is correct
      setLoading(false); // Reset loading state
    }, 2000);

    // Example of a real API call:
    // try {
    //   const response = await fetch('YOUR_API_URL', {
    //     method: 'POST',
    //     body: JSON.stringify({ /* your request body */ }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    //   const data = await response.json();
    //   setVideoUrl(data.videoUrl); // Assuming your API returns a video URL
    // } catch (error) {
    //   console.error('Error generating video:', error);
    //   setLoading(false); // Reset loading state
    // }
  };

  return (
    <div>
      <Header />
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Generate Your Swapped Video
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </Button>

        <Box sx={{ mt: 4 }}>
          {loading && <CircularProgress />} {/* Show loading spinner */}
          {videoUrl && <ResultDisplay videoUrl={videoUrl} />} {/* Display result if video URL exists */}
        </Box>
      </Container>
    </div>
  );
};

export default GeneratePage;
