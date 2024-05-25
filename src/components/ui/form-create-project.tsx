import React, { forwardRef } from "react";
import type { FormInstance, FormProps } from "antd";
import { Form, Input } from "antd";

type FieldType = {
  name?: string;
  apiPrefix?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormCreateProject = forwardRef<FormInstance, {}>((props, ref) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    style={{ maxWidth: 500 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    ref={ref}
  >
    <Form.Item<FieldType>
      label="Name"
      name="name"
      labelCol={{ span: 24 }}
      rules={[{ required: true, message: "Please input your Project Name!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="API Prefix"
      name="apiPrefix"
      labelCol={{ span: 24 }}
      rules={[{ required: true, message: "Please input your API Prefix!" }]}
    >
      <Input />
    </Form.Item>
  </Form>
));

FormCreateProject.displayName = "FormCreateProject";

export default FormCreateProject;
