import React from 'react';
import './App.css';
import { Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,NavLink,Nav } from 'reactstrap';

function Navigator1() {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <Navbar color="light" light expand="md">
            <NavbarToggler onClick={() => {  setIsOpen(!isOpen)}} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#1">Experience</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Formation</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        );
}

export default Navigator1;