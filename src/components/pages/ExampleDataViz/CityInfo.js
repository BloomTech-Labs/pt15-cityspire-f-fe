import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

function CityInfo(props) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="City, State" bordered={false} style={{ width: 300 }}>
        <p>Average Rent Price:</p>
        <p>Overall Crime Rate:</p>
        <p>Walkability Score:</p>
      </Card>
    </div>
  );
}
export default CityInfo;
