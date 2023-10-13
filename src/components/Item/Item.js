import React, {useContext, useState} from "react";
import { Modal, Button } from "react-bootstrap";
import {GlobalContext} from "../GlobalContext";
import "../../styles/Item.css";

function Item({ item }) {

  const [isModalVisible, setModalVisible] = useState(false);
  const { cart, addToCart } = useContext(GlobalContext);
  const [quantityLocal, setQuantityLocal] = useState(1);
  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  const incrementQuantityLocal = () => {
    setQuantityLocal(prevQuantity=>prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantityLocal(prevQuantity => {
      if(prevQuantity === 0){
        return 0;
      }
      return prevQuantity -1
    });
  }

  const handleClick = () => {
    item.amount = quantityLocal;
    addToCart(item);
    handleCloseModal()
  }

  return (
      <div className="item-container text-center">
        <img src={item.img} width="200" height="200" alt={item.name} />
        <h5>{item.name}</h5>
        <button className="btn btn-dark" variant="dark" onClick={handleShowModal}>
          See More
        </button>

        <Modal show={isModalVisible} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Description :</h4>
            <p>{item.description}</p>
            <p>Price : {item.price}</p>
            <div className="quantity-input">
              <label>Quantity :</label>
              <Button className="button" variant="danger" onClick={decrementQuantity}>-</Button>
              <span>{quantityLocal}</span>
              <Button className="button" variant="danger" onClick={incrementQuantityLocal}>+</Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Exit
            </Button>
            <Button variant="success" onClick={handleClick}>
              Add to cart
            </Button>
            <Button variant="success" href="/cart" onClick={handleShowModal}>
              Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  );
}


export default Item;