"use client";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  CodepenOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Card, Divider } from "antd";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupFrom() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Card className="w-[400px]">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-center text-xl font-semibold">Sign up Page</h1>
        <Form
          form={form}
          name="signup"
          initialValues={{ remember: true }}
          className="w-full"
          onFinish={onFinish}
        >
          <Form.Item
            name="Fullname"
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Fullname" />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="Zipcode"
            rules={[
              { required: true, message: "Please input your Zip code !" },
            ]}
          >
            <Input prefix={<CodepenOutlined />} placeholder="Zipcode" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value.length >= 8) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Enter at least 8 characters password")
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="Confirmpassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button block htmlType="submit">
              Sign up
            </Button>
            <Divider dashed />
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              block
              type="primary"
            >
              Google
            </Button>
            or <Link href="/login-page">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
}
