import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/layouts';
import { Link } from 'react-router-dom';
import Banner from '../Images/banner.jpeg';
import '../styles/homeStyle.css';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          console.log('data', data.products);
          setData(data.products)
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>
            Our First Food<br /> Order Website
          </h1>
          <p>Best & Fresh Fastfood in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
      {/* <Menu /> */}
      {
        data.map((cv,idx)=>{
          return(
            <div key={cv.id} style={{ display: 'inline-block', width: '30%', margin: '1%' }}>
              <Card key={cv.id}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={cv.images[0]}
                alt={'image'}
              />
              <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" component="div">
                  {cv.title}
                </Typography>
                <Typography variant="h5">Price: ${cv.price}</Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "180px", height: "50px", marginLeft: "10px", fontSize: "18px" }}
                >
                  <b>
                    
                  </b>{" "}
                  Buy
                </Button>
              </Box>
            </CardActionArea>
          </Card>
            </div>
            
          )
        })
      }
    </Layout>
  );
};

export default Home;
