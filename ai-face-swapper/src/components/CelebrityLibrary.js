import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const celebrities = [
  { name: 'Leonardo DiCaprio', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQox10iIeVc0FBff3lmlCeeoJYOu_xDf0Di9Q&s' },
  { name: 'Scarlett Johansson', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRN5xh6sZuYcS2Z0shrNJCZmh57KWoAGFoYA&s' },
  { name: 'Dwayne Johnson', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3c0m9N0pjOefQl6P9RzSEB4TMh--t42fSA&s' },
];

const CelebrityLibrary = () => {
  const [selectedCelebrity, setSelectedCelebrity] = useState('');

  const handleSelection = (name) => {
    setSelectedCelebrity(name);
  };

  return (
    <div>
      <h3>Select a Celebrity</h3>
      <Grid container spacing={3}>
        {celebrities.map((celebrity) => (
          <Grid item xs={12} sm={6} md={4} key={celebrity.name}>
            <Card onClick={() => handleSelection(celebrity.name)}>
              <CardMedia
                component="img"
                height="200"
                image={celebrity.img}
                alt={celebrity.name}
              />
              <CardContent>
                <Typography variant="h6">{celebrity.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedCelebrity && <p>Selected Celebrity: {selectedCelebrity}</p>}
    </div>
  );
};

export default CelebrityLibrary;
