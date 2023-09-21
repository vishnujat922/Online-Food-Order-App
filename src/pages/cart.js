import React, { useState } from "react";
import { MenuList } from "../data/data";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Layout from "../components/layouts/layouts";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const handleAddClick = (menu) => {
    const itemInCart = {
      image: menu.image,
      name: menu.name,
      quantity: 1,
      price: menu.price,
    };
    setCart([...cart, itemInCart]);
  };

  const handleBuyClick = () => {
    window.alert('Buy button clicked');
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.id}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography variant="h5">
                  Price: ${menu.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddClick(menu)}
                  sx={{ width: '180px', height: '50px', fontSize: '18px' }}
                >
                  <b><ShoppingCartIcon sx={{ marginRight: '10px', marginTop: '8px' }} /></b> Add
                </Button>
                <Button variant="contained" color="primary" onClick={handleBuyClick} sx={{ width: '180px', height: '50px', marginLeft: '10px', fontSize: '18px' }}>
                  <b><TrendingUpIcon sx={{ marginRight: '10px', marginTop: '8px' }} /></b> Buy
                </Button>
              </Box>
              <Typography variant="body1">{menu.description}</Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;