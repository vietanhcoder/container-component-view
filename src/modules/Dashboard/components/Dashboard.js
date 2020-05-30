import React from 'react';
import { Card } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';

import DashboardMember from '../containers/DashboardMember';
import DashboardProject from '../containers/DashboardProject';

const Dashboard = () => {
  const onChange = (value) => {
    console.log('Captcha value:', value);
  };

  return (
    <div>
      <Card title="Member">
        <DashboardMember />
      </Card>
      <Card title="Project">
        <DashboardProject />
      </Card>
      <ReCAPTCHA sitekey="6LfiLPMUAAAAANloVteYz2qluRP3akyY-walXLvo" onChange={onChange} />
    </div>
  );
};

export default Dashboard;
