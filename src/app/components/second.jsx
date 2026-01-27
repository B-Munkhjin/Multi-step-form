"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { use, useState } from "react";

export const Second = () => {
  const [data, setData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  console.log("error: ", error);
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = () => {
    console.log("button daragdaj bn");

    if (data.email === "") {
      setError((prev) => ({
        ...prev,
        email: "Email cannot be empty.",
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      //email requirement @gmail.com
      setError((prev) => ({
        ...prev,
        email: "Please provide a valid email address.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (data.phoneNumber === "") {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Phone number cannot be empty.",
      }));
    } else if (!/^\+?\d{8}$/.test(data.phoneNumber)) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        phoneNumber: "",
      }));
    }

    if (data.password === "") {
      setError((prev) => ({
        ...prev,
        password: "Password cannot be empty.",
      }));
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6}$/.test(data.password)) {
      setError((prev) => ({
        ...prev,
        password:
          "Password must be exact 6 character with at least one letter and one number.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }
    if (data.confirmPassword === "") {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Please confirm password.",
      }));
    } else if (data.password !== data.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match. Please try again.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }
  };
  // const [hide, setHide] = useState();
  // const onHide = () => {};
  // hidden and visible pictures are downloaded if i want to i would do that show password thing
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <h2 className="font-semibold text-sm text-[#334155]">Email</h2>
          <h2 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h2>
        </div>
        <Input
          className="w-full h-11 rounded-lg border p-3 text-[#121316] "
          placeholder="Email"
          type="text"
          inputName="email"
          onChange={handleChange}
        />
        <p className="text-[#E14942] text-sm">{error.email}</p>

        <div className="flex w-full">
          <h2 className="font-semibold text-sm text-[#334155]">Phone number</h2>
          <h2 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h2>
        </div>
        <Input
          className="w-full h-11 rounded-lg border p-3 text-[#121316] "
          placeholder="Phone number"
          type="number"
          inputName="phoneNumber"
          onChange={handleChange}
        />
        <p className="text-[#E14942] text-sm">{error.phoneNumber}</p>

        <div className="flex w-full">
          <h2 className="font-semibold text-sm text-[#334155]">Password</h2>
          <h2 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h2>
        </div>
        <div className="flex justify-between px-2 items-center">
          <Input
            className="w-full h-11 rounded-lg border p-3 text-[#121316] "
            placeholder="Password"
            type="password"
            inputName="password"
            onChange={handleChange}
          />
          {/* <span onClick={onHide}>
            <img src="/passwordHidden"></img>
          </span> */}
        </div>
        <p className="text-[#E14942] text-sm">{error.password}</p>

        <div className="flex w-full">
          <h2 className="font-semibold text-sm text-[#334155]">
            Confirm password
          </h2>
          <h2 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h2>
        </div>
        <Input
          className="w-full h-11 rounded-lg border p-3 text-[#121316] "
          placeholder="Confirm password"
          type="password"
          inputName="confirmPassword"
          onChange={handleChange}
        />
        <p className="text-[#E14942] text-sm">{error.confirmPassword}</p>
      </div>
      <div className="flex gap-2 ">
        <div className="flex justify-center bg-white text-black w-32 text-base rounded-md border border-[#CBD5E1] font-medium">
          <Button text="&lt; Back" />
        </div>
        <div className="flex justify-center bg-[#121316] text-white w-70 py-2.5 px-1 text-base rounded-md font-medium">
          <Button text="Continue 2/3&nbsp; &gt;" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
  //input oruulaad bolson bol border color tsenher bolno
};
