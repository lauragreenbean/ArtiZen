import React from "react";
import { Dropdown, Container } from "react-bootstrap";
class Header extends React.Component {
    render() {
        return (
            <div id="header">
                     

                <nav id="nav">
                    
                    <h1>Artizen</h1>
                <Container id="dropDown">
                    <Dropdown >
                        <Dropdown.Toggle variant=" primary" id="dropdown-basic" >
                            Drawing Mode
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/" class="active">Simple Line</Dropdown.Item>
                            <Dropdown.Item href="/DrawingMode2">Ellipses</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>

                </nav>
                </div>
            
        );
    }
}

export default Header;

