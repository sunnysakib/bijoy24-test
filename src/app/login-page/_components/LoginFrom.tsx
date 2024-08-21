"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Card, Divider } from "antd";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback } from "react";
export default function LoginForm() {
  // const { data, status } = useSession();
  
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Card className="w-[400px]">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-center text-xl font-semibold">Login Page</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          className="w-full"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link href="/login-page">Forgot password</Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button  block  htmlType="submit">
              Log in
            </Button>
            <Divider dashed />
            <Button onClick={() => signIn("google", { callbackUrl: "/" })} block type="primary">
              Google
            </Button>
            or <Link href="/signup-page">
            
            Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
}
