import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import "./Dashboard.css";
import HeaderIcon from "../../assests/comlogo.png";

const Dashboard = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

 const loginbtn = () => {
   var token = Date.now().toString();
   localStorage.setItem("token", token);
   window.location.replace("/home");
 };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={HeaderIcon} />
        </div>
        <Form
          name="login-form"
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h2 className="form-title">Welcome back to Vinayan</h2>
          <p>Sign in to your account</p>
          <Form.Item
            name="username"
            rules={[{required: true, message: "Please input your username!"}]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: "Please input your password!"}]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item name="forget password" valuePropName="checked">
            <Checkbox>Forgot password</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              // htmlType="submit"
              className="login-form-button"
              onClick={loginbtn}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Dashboard;
