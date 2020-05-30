import React from 'react';
import { Card, Form, Input, Button } from 'antd';

const layout = {
  labelCol: { lg: 8, xs: 24 },
  wrapperCol: { lg: 16, xs: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="ChangePassword">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Password"
          name="password"
          hasFeedback
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" size="middle">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChangePassword;
