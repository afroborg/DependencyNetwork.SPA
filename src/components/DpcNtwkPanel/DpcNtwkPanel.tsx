import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import config from '../../config/config';
import { IColumn } from '../../models/IColumn';
import DpcNtwkColumn from './DpcNtwkColumn';
import './dpcNtwkPanel.sass';

const DpcNtwkPanel: React.FC = () => {
  const [columns, setColumns] = useState([] as IColumn[]);
  useEffect(() => {
    axios
      .get(config.apiUrl + 'columns')
      .then(response => setColumns(response.data))
      .catch(err => console.log(err));
  }, []);
  console.log(columns);
  return (
    <Row className="dependency-network-panel w-100 p-4">
      {columns.map((column: IColumn) => (
        <DpcNtwkColumn {...column} key={column.id} />
      ))}
    </Row>
  );
};

export default DpcNtwkPanel;
