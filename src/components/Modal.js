import React, { useState } from 'react';
import {  Button, Dialog,DialogContent,DialogTitle,TextField} from "@mui/material"
const Modal = ({ cv }) => { 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <Dialog open={selectedProduct !== null} onClose={handleCloseModal}>
    <DialogTitle>{selectedProduct?.name}</DialogTitle>
    <DialogContent>
      <p>Price: {selectedProduct?.price}</p>
      <p>Detail: {selectedProduct?.detail}</p>
      <TextField
        label="Quantity"
        type="number"
        variant="outlined"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCloseModal}
      >
        Close
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Handle the purchase here with selectedProduct and quantity
          alert(`You are purchasing ${quantity} ${selectedProduct?.name}`);
          handleCloseModal();
        }}
      >
        Purchase
      </Button>
    </DialogContent>
  </Dialog>
  );
}

export default Modal;