import { faPen, faTrash } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ICard } from '../../models/ICard';

const DpcNtwkCard: React.FC<ICard> = card => {
  return (
    <Row className="mb-3">
      <Card className="p-4 w-100">
        <Row>
          <Col md={{ span: 8 }}>
            <h4>{card.title}</h4>
          </Col>
          <Col
            md={{ span: 2, offset: 2 }}
            className="d-flex justify-content-between"
          >
            <FontAwesomeIcon icon={faPen} size="sm" />
            <FontAwesomeIcon icon={faTrash} size="sm" />
          </Col>
        </Row>
        <p>{card.description}</p>
      </Card>
    </Row>
  );
};
export default DpcNtwkCard;
