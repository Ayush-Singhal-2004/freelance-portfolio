import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar({selected}) {

    const selectedStyle = { "color": "#f0f0f0" }

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                {/* <Navbar.Brand href="#">Eduford</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="/"
                    style={selected=="home"?selectedStyle:{}}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link href="/services"
                    style={selected=="services"?selectedStyle:{}}
                    >
                        Services
                    </Nav.Link>
                    <Nav.Link href="/team"
                    style={selected=="team"?selectedStyle:{}}
                    >
                        Team
                    </Nav.Link>
                    <Nav.Link href="/blogs"
                    style={selected=="blogs"?selectedStyle:{}}
                    >
                        Blogs
                    </Nav.Link>
                    <Nav.Link href="/about"
                    style={selected=="about"?selectedStyle:{}}
                    >
                        About us
                    </Nav.Link>
                    <Nav.Link href="/contact"
                    style={selected=="contact"?selectedStyle:{}}
                    >
                        Contact us
                    </Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
}

export default NavigationBar