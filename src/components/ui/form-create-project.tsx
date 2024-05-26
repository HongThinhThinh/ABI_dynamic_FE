import React, { forwardRef, useState } from "react";
import type { FormInstance, FormProps } from "antd";
import { Form, Input } from "antd";
import UploadImg from "./uploadImg/UploadImg";

type FieldType = {
  name?: string;
  apiPrefix?: string;
};

type FormCreateProjectProps = {
  onSubmit: (values: FieldType) => void;
};

const FormCreateProject = forwardRef<FormInstance, FormCreateProjectProps>(
  ({ onSubmit }, ref) => {
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      console.log("Success:", values);
      onSubmit(values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
      errorInfo
    ) => {
      console.log("Failed:", errorInfo);
    };

    const [file, setFile] = useState(
      "https://api-private.atlassian.com/users/62ebe5ece9e887b64753f5587dac8926/avatar"
    );
    return (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        style={{ maxWidth: 500 }}
        initialValues={{ name: "", apiPrefix: "" }} // Default initial values
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        ref={ref}
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          labelCol={{ span: 24 }}
          rules={[
            { required: true, message: "Please input your Project Name!" },
          ]}
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
        <Form.Item
          label="Project Img"
          name="Project Img"
          labelCol={{ span: 24 }}
          // onChange={(e) => setFile(e.target.files[0])}
        >
          <UploadImg />
        </Form.Item>
      </Form>
    );
  }
);

FormCreateProject.displayName = "FormCreateProject";

export default FormCreateProject;
