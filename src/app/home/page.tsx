"use client";

import CardCustom from "@/components/layout/card-custom";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Button from "@/components/ui/button/button";
import FormCreateProject from "@/components/ui/form-create-project";

import { Modal } from "antd";
import React, { useRef, useState } from "react";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Hong Thinh",
      apiPrefix: "Hihi",
      img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/406534560_1295561694488229_5721930519039440287_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9hW9UL5cfwMQ7kNvgHGhZjz&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYDkBeBqS3goy6hC1QypUwQelUZYWaY1XgtYypSbP8aFxQ&oe=6657BD6E",
    },
  ]);

  const formRef = useRef(null);

  const handleOk = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setIsModalOpen(false);
  };

  const handleFormSubmit = (newData: any) => {
    const dataWithImg = {
      ...newData,
      img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/406534560_1295561694488229_5721930519039440287_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9hW9UL5cfwMQ7kNvgHGhZjz&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYDkBeBqS3goy6hC1QypUwQelUZYWaY1XgtYypSbP8aFxQ&oe=6657BD6E",
    };
    setData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, ...dataWithImg },
    ]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="">
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal
          title="New Project"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <FormCreateProject ref={formRef} onSubmit={handleFormSubmit} />
        </Modal>

        {data?.length > 0 ? (
          <div className="flex w-100 items-center justify-center mt-10 ">
            <BackgroundGradient
              className="flex items-center justify-start flex-wrap rounded-[22px] w-[100] gap-0 h-fit pb-20 bg-white dark:bg-zinc-900"
              containerClassName="w-[85%]"
            >
              {data.map((item) => (
                <CardCustom
                  key={item.id}
                  title={item.name}
                  apiPrefix={item.apiPrefix}
                  img={item.img}
                  handleDelete={() => handleDelete(item.id)}
                />
              ))}
            </BackgroundGradient>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default HomePage;
