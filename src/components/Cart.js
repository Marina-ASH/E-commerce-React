import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import "../styles/Cart.css";
import { Button, Card, Row, Col } from "react-bootstrap";


const Cart = () => {
    const {cart, deleteItem, incrementAmount, decrementAmount} = useContext(GlobalContext);

    const handleDeleteItem = (item) => {
        deleteItem(item);
    };

    const handleIncrementItem = (item) => {
        item.amount += 1;
        incrementAmount(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const handleDecrementItem = (item) => {
        if (item.amount > 1) {
            item.amount -= 1;
            decrementAmount(item)
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    };

    const isEmpty = Object.keys(cart).length === 0;

    const totalAmount = Object.values(cart).reduce((total, item) => total + (item.amount * parseFloat(item.price)), 0);
    const totalQuantity = Object.values(cart).reduce((total, item) => total + item.amount, 0);

    return (
        <div className="container">
            {isEmpty ? (
                <p className="empty-cart-message">No Item Selected</p>
            ) : (
                <div className="row justify-content-center">
                    {Object.values(cart).map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <Card>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>Price: {item.price}</Card.Text>
                                    <Row>
                                        <Col xs={2}>
                                            <Button variant="outline-success" onClick={() => handleDecrementItem(item)}>-</Button>
                                        </Col>
                                        <Col xs={2}>
                                            <p className="text-center">{item.amount}</p>
                                        </Col>
                                        <Col xs={4}>
                                            <Button variant="outline-success" onClick={() => handleIncrementItem(item)}>+</Button>
                                        </Col>
                                        <Col xs={30} className="mt-3">
                                            <Button variant="danger" onClick={() => handleDeleteItem(item)}>Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            )}

            <div className="total-summary p-3 bg-light">
                <p className="mb-0">Total Quantity: {totalQuantity}</p>
                <p className="mb-0">Total Price: {totalAmount.toFixed(2)} €</p>
            </div>
        </div>
    );
}

export default Cart;
