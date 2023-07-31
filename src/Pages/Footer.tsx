import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className=" w-full h-[100px] border-secondary border-t-[1px] font-firaCode text-secondary flex justify-center items-center">
      <h2>
        © Copyright 2023. Made by <span className=" text-primary">Khant</span>
      </h2>
    </div>
  );
}
