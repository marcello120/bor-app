import React from 'react';
import { Container, Button } from 'react-bootstrap';

function ButtonExample() {
  return (
    <Container
      className="d-flex justify-content-between align-items-end"
      style={{ height: '100vh' }}
    >
      <Button variant="primary">Left Button</Button>
      <Button variant="secondary">Right Button</Button>
    </Container>
  );
}

export default ButtonExample;