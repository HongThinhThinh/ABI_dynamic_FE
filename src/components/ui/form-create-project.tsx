import React, { forwardRef, useState } from "react";
import type { FormInstance, FormProps } from "antd";
import { Form, Input, Upload } from "antd";
import UploadImg from "./uploadImg/UploadImg";
import ImgCrop from "antd-img-crop";
import uploadFile from "../../hooks/useUpload";
import { BackgroundGradient } from "./background-gradient";
import { Meteors } from "./meteors";
type FieldType = {
  name?: string;
  apiPrefix?: string;
  project_img?: string;
  setIsLoading?: any;
};

type FormCreateProjectProps = {
  onSubmit: (values: FieldType) => void;
  setIsLoading: (values: any) => void;
};
const FormCreateProject = forwardRef<FormInstance, FormCreateProjectProps>(
  ({ onSubmit, setIsLoading }, ref) => {
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
      setIsLoading(true);
      const linkImg = await uploadFile(fileList[0].originFileObj);
      console.log(linkImg);
      values.project_img = linkImg;
      onSubmit(values);
      form.resetFields();
      setFileList([]);
      setIsLoading(false);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
      errorInfo
    ) => {
      console.log("Failed:", errorInfo);
    };

    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }: any) => {
      console.log(newFileList);
      setFileList(newFileList);
    };
    const onPreview = async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };

    return (
      <Form
        form={form}
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
        <Form.Item<FieldType>
          label="Project Image"
          name="project_img"
          labelCol={{ span: 24 }}
        >
          <ImgCrop rotationSlider>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList?.length < 1 && "+ Upload"}
            </Upload>
          </ImgCrop>
        </Form.Item>
      </Form>
    );
  }
);

FormCreateProject.displayName = "FormCreateProject";

export default FormCreateProject;
