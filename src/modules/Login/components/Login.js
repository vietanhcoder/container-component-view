import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { lg: 8, xs: 24 },
  wrapperCol: { lg: 16, xs: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({ history }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/dashboard');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__branch">
          <img src="images/logo.png" alt="Logo" title="Logo" />
          <h1>DASHBOARD</h1>
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            hasFeedback
            rules={[{ required: true, message: 'Please input your username!' }]}
            values="adas"
          >
            <Input placeholder="please enter admin" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="please enter 123" />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" size="middle">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
