import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { IColumn } from '../../models/IColumn';
import DpcNtwkCard from './DpcNtwkCard';

const DpcNtwkColumn: React.FC<IColumn> = column => {
  return (
    <Col md={{ span: column.width }}>
      <Card className="w-100 p-2">
        <Card.Header>
          <span>
            {column.title}{' '}
            <OverlayTrigger
              overlay={
                <Popover id="popover">
                  <Popover.Content>
                    <div
                      dangerouslySetInnerHTML={{ __html: column.description }}
                    />
                  </Popover.Content>
                </Popover>
              }
              trigger="hover"
              placement="bottom-start"
            >
              <FontAwesomeIcon icon={faInfoCircle} size="sm" />
            </OverlayTrigger>
          </span>
        </Card.Header>
        <Card.Body>
          {column.cards.map(card => (
            <DpcNtwkCard {...card} key={card.id} />
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DpcNtwkColumn;
