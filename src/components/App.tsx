import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DpcNtwkPanel from './DpcNtwkPanel/DpcNtwkPanel';

const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row></Row>
      <DpcNtwkPanel />
    </Container>
  );
};

export default App;
