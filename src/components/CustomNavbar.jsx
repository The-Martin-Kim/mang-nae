import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function CustomNavbar() {
    return (
        <Navbar bg="light" fixed="top">
            <Container>
                <Navbar.Brand href="/"
                              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <>
                        <img
                            alt=""
                            src="/logo.png"
                            width={"30"}
                            height={"30"}
                            className="d-inline-block align-top"
                        />
                        <div className="GowunDodum-Regular" style={{textAlign: 'center', marginLeft: "10px"}}>
                            <strong>개발하는 꼬망이</strong>
                        </div>
                    </>
                </Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/" className="GowunDodum-Regular">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" className="GowunDodum-Regular">Profile</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;