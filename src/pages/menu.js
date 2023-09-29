import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Layout from "../components/layouts/layouts";

const Menu = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleBuyClick = (item) => {
    setSelectedProduct(item);
    // Reset quantity to 1 when a new product is selected
    setQuantity(1);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          console.log("data", data);
          setData(data.products);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {data.map((cv, idx) => {
        return (
          <div
            key={cv.id}
            style={{ display: "inline-block", width: "30%", margin: "1%" }}
          >
            <Card key={cv.id}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={cv.images[0]}
                  alt={"image"}
                />

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
                    sx={{
                      width: "180px",
                      height: "50px",
                      marginLeft: "10px",
                      fontSize: "18px",
                    }}
                    onClick={() => handleBuyClick(cv)}
                  >
                    Buy
                  </Button>
                </Box>
              </CardActionArea>
            </Card>
          </div>
        );
      })}

      {/* Product Modal */}
      <Dialog
        open={selectedProduct !== null}
        onClose={handleCloseModal}
      >
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={selectedProduct?.images[0]}
              alt="Related product image"
              style={{ width: "80%",height:'60%' }}
            />
          </Box>
          <p>
            <b>Product Name:</b> {selectedProduct?.title}
          </p>
          <br />
          <p>
            <b>Product Detail:</b> {selectedProduct?.description}
          </p>
          <br />
          <p>
            <b>Price:</b> {selectedProduct?.price}
          </p>
          <br />
          <TextField
            label="Quantity"
            type="number"
            variant="outlined"
            value={quantity}
            onChange={handleQuantityChange}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseModal}
              sx={{ marginLeft: "20px", width: '120px', height: '40px' }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (quantity >= 1) {
                  alert(
                    `You are buying Item ${quantity} ${selectedProduct?.title}`
                  );
                  handleCloseModal();
                } else {
                  alert("Quantity must be at least 1.");
                }
              }}
              sx={{ marginLeft: "20px", width: '120px', height: '40px' }}
            >
              Buy
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Menu;
