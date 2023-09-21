import { MenuList } from "../data/data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

const Menu = () => {
  const [showDetails, setShowDetails] = useState(false);
  const product = {
    name: "Product Name",
    price: "$10.99",
    quantity: 5
  };

  const handleBuyClick = () => {
    console.log("Buy button clicked");
    alert('Buy button clicked')
    setShowDetails(true);
  };
  

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2}} key={menu.id}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography variant="h5">Price: ${menu.price}</Typography>
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
                    <TrendingUpIcon sx={{ marginRight: "10px", marginTop: "8px" }} />
                  </b>{" "}
                  Buy
                </Button>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Link to="/cart">
        <Button variant="contained" color="primary" onClick={handleBuyClick} sx={{ width: "180px", height: "50px", fontSize: "18px", margin: "" }}>
          <ShoppingCartIcon sx={{ marginRight: "10px", marginTop: "0px" }} />
          View Cart
        </Button>
        {showDetails && <ProductDetails product={product} />}
      </Link>
    </Layout>
  );
};

export default Menu;
