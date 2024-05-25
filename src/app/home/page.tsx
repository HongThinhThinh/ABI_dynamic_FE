"use client";
import { Navbar } from "@/components/layout/navbar";
import { SignInForm } from "@/components/layout/signinForm";
import { PinContainer } from "@/components/ui/3d-pin";
import Button from "@/components/ui/button/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import FormCreateProject from "@/components/ui/form-create-project";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Modal } from "antd";
import React, { useRef, useState } from "react";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const formRef = useRef(null);
  const handleOk = () => {``
    if (formRef.current) {
      formRef.current.submit();
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      />

      <Modal
        title="New Project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormCreateProject ref={formRef} />
      </Modal>

      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Hồng Thịnh
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-[url('https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/412980114_122139388646064706_1075762386281454902_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aVbpSB4t0S4Q7kNvgFaIfAq&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYDstpqttiQm5eYZjyRyoVe78H3srtYE_IE-kBfsuqkGIw&oe=66576E84')]" />
          </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://www.facebook.com/thinh.hong.790256/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Test Card
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-[url('https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/hinh-nen-de-thuong.jpg')]" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export default HomePage;
