"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";

export const First = ({ data, handleChange, onSubmit }) => {
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  // (/^[а-яА-ЯӨөҮүЁё\s-]+$/.test(formData.firstName))
  const handleSubmit = () => {
    let valid = true;
    if (data.firstName === "") {
      setError((prev) => ({
        ...prev,
        firstName: "First name cannot be empty.",
      }));
      valid = false;
    } else if (/[^a-zA-Z]/.test(data.firstName)) {
      setError((prev) => ({
        ...prev,
        firstName: "First name cannot contain special characters or numbers.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        firstName: "",
      }));
    }

    if (data.lastName === "") {
      setError((prev) => ({
        ...prev,
        lastName: "Last name cannot be empty.",
      }));
      valid = false;
    } else if (/[^a-zA-Z]/.test(data.lastName)) {
      setError((prev) => ({
        ...prev,
        lastName: "Last name cannot contain special characters or numbers.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        lastName: "",
      }));
    }

    if (data.userName === "") {
      setError((prev) => ({
        ...prev,
        userName: "Username cannot be empty.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        userName: "",
      }));
    }
    if (valid === true) onSubmit();
  };

  return (
    <div className="flex flex-col justify-between h-108.5">
      <div className="flex flex-col gap-2 ">
        <div className="flex w-full">
          <h1 className="font-semibold text-sm text-[#334155]">First name</h1>
          {error.date && (
            <h1 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h1>
          )}
        </div>
        <Input
          className={`w-full h-11 rounded-lg border p-3  ${error.firstName ? " text-[#E14942]" : "text-[#121316]"}`}
          placeholder="First Name"
          type="text"
          inputName="firstName"
          onChange={handleChange}
        />
        <p className="text-[#E14942] text-sm">{error.firstName}</p>

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h1 className="font-semibold text-sm text-[#334155]">Last name</h1>
            {error.date && (
              <h1 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h1>
            )}
          </div>
          <Input
            className={`w-full h-11 rounded-lg border p-3  ${error.lastName ? " text-[#E14942]" : "text-[#121316]"}`}
            placeholder="Last Name"
            type="text"
            inputName="lastName"
            onChange={handleChange}
          />
          <p className="text-[#E14942] text-sm">{error.lastName}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h1 className="font-semibold text-sm text-[#334155]">Username</h1>
            {error.date && (
              <h1 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h1>
            )}
          </div>
          <Input
            className={`w-full h-11 rounded-lg border p-3  ${error.userName ? " text-[#E14942]" : "text-[#121316]"}`}
            placeholder="Username"
            type="text"
            inputName="userName"
            onChange={handleChange}
          />
          <p className="text-[#E14942] text-sm mb-8">{error.userName}</p>
        </div>
      </div>
      <div>
        <div className=" bg-[#121316] w-full text-white py-2.5 px-3 flex justify-center text-base rounded-md mb-8">
          <Button text="Continue 1/3&nbsp; &gt;" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
  //input oruulaad bolson bol border color tsenher bolno
  //boloogui bol ulaan bolno
};
