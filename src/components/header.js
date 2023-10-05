import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function StickyHeader() {
  return (
    <>
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">FeedBack Form</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default StickyHeader;