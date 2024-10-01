import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';

const VideoUploader = () => {
  const [video, setVideo] = useState(null);

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <h3>Upload Lecture Video</h3>
      <Input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        inputProps={{ accept: 'video/*' }}
      />
      {video && <p>{video.name}</p>}
    </Box>
  );
};

export default VideoUploader;
