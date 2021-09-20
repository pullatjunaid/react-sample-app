import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const HeaderComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="nav-container">
                    <Navbar.Brand href="#home">Tech Challenge</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">Details</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderComponent;