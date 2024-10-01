import React, { useState } from 'react';
import { Box, Button, Input } from '@mui/material';

const FaceUploader = () => {
  const [face, setFace] = useState(null);

  const handleFaceUpload = (e) => {
    setFace(e.target.files[0]);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <h3>Upload Your Face</h3>
      <Input
        type="file"
        accept="image/*"
        onChange={handleFaceUpload}
        inputProps={{ accept: 'image/*' }}
      />
      {face && <p>{face.name}</p>}
    </Box>
  );
};

export default FaceUploader;
