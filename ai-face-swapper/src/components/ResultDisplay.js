// components/ResultDisplay.js

import React from 'react';

const ResultDisplay = ({ videoUrl }) => {
  return (
    <div>
      {videoUrl ? (
        <video width="600" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video available to display.</p>
      )}
    </div>
  );
};

export default ResultDisplay;
