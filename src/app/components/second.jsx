"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";

export const Second = () => {
  const text2 = "Continue 2/3&nbsp; &gt;";
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <h2 className="font-semibold text-sm text-[#334155]">Email</h2>
          <h2 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h2>
        </div>
        <Input placeholder="Email" type="" inputName="email" />

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h2 className="font-semibold text-sm text-[#334155]">
              Phone number
            </h2>
            <h2 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h2>
          </div>
          <Input
            placeholder="Phone number"
            type="number"
            inputName="phoneNumber"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h2 className="font-semibold text-sm text-[#334155]">Password</h2>
            <h2 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h2>
          </div>
          <Input placeholder="Password" type="number" inputName="password" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h2 className="font-semibold text-sm text-[#334155]">
              Confirm password
            </h2>
            <h2 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h2>
          </div>
          <Input
            placeholder="Confirm password"
            type="number"
            inputName="confirmPassword"
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex justify-center bg-white text-black w-32 text-base rounded-md border border-[#CBD5E1] font-medium">
          <Button text="&lt; Back" />
        </div>
        <div className="flex justify-center bg-[#121316] text-white w-70 py-2.5 px-1 text-base rounded-md font-medium">
          <Button text="Continue 2/3&nbsp; &gt;" />
        </div>
      </div>
    </div>
  );
  //input oruulaad bolson bol border color tsenher bolno
};
