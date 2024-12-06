import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const PortfolioNavbar = () => {
    return (
        <Navbar variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#" className="ms-2">
                    Shahad Al-kazzaz
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link href="#about">Om mig</Nav.Link>
                        <Nav.Link href="#skills">Kunskaper</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PortfolioNavbar
