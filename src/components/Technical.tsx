import React from 'react';
import { connectServer } from '../utils/TechnicalUtils';
import { TechnicalSchema } from '../types/TechnicalTypes';

interface TechnicalProps {
  technicalData: TechnicalSchema;
}

class Technical extends React.Component<TechnicalProps> {
  componentDidMount() {
    connectServer();
  }

  render() {
    const { technicalData } = this.props;

    return (
      <div id="technical-system">
        <h2>Technical System</h2>
        <p>Server Status: {technicalData.serverStatus}</p>
        <p>Database Status: {technicalData.databaseStatus}</p>
        <p>Security Measures: {technicalData.securityMeasures.join(', ')}</p>
      </div>
    );
  }
}

export default Technical;