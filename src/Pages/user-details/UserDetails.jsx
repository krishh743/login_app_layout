import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserDetails() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedUsersData = chunkArray(usersData, 3)

  return (
    <div>
      {chunkedUsersData.map((chunk, chunkIndex) => (
        <div key={chunkIndex} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {chunk.map((user) => (
            <Card key={user.id} sx={{ width: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" // Replace with actual image URL
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small">Share</Button>
                <Button variant="contained" size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
