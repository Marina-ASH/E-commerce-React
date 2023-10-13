import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import {useContext} from "react";
import {GlobalContext} from "./GlobalContext";
import "../App.css";
const Router = () =>{
    const { cart } = useContext(GlobalContext);
    return <BrowserRouter>
        <Navbar expand="lg" className="navBar">
            <Container>
                <Navbar.Brand> RareBeauty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto container-navlink">
                        <Nav.Link href="/home" className="navLink">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            Home
                        </Nav.Link>
                        <Nav.Link href="/cart" className="navLink">
                            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                            <li className="number">{Object.values(cart).reduce((acc, it)=>acc+it.amount, 0)}</li>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route index element={<Home />} />
            <Route render={() => <h1>404: page not found</h1>} />
        </Routes>
    </BrowserRouter>
}
export default Router;