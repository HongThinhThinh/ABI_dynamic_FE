import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { Meteors } from "../ui/meteors";

interface Props {
  title?: string;
  apiPrefix?: string;
  img?: string;
}

function CardCustom(props: Props) {
  const { title, apiPrefix, img } = props;

  return (
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          {title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500">{apiPrefix}</span>
        </div>
        <div
          className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <Meteors number={10} />
    </PinContainer>
  );
}

export default CardCustom;
