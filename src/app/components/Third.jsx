"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Third = ({ data, handleChange, onSubmit, onBack }) => {
  //   const [data, setData] = useState({
  //     date: "",
  //     img: "",
  //   });
  const [error, setError] = useState({
    date: "",
    img: "",
  });
  const handleSubmit = () => {
    if (data.date === "") {
      setError((prev) => ({
        ...prev,
        date: "Please select a date.",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        date: "",
      }));
    }

    if (data.img === "") {
      setError((prev) => ({
        ...prev,
        img: "Image cannot be blank. ",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        img: "",
      }));
    }
    if (data.img === "" && data.date === "") {
      setStep(step + 1);
    }
  };

  const [preview, setPreview] = useState(null);

  const image = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <h3 className="font-semibold text-sm text-[#334155]">
            Date of birth
          </h3>
          <h3 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h3>
        </div>
        <Input
          className="w-full h-11 rounded-lg border p-3 text-[#121316] "
          type="date"
          placeholder="2000.01.01"
          inputName="date"
          onChange={handleChange}
        />
        <p className="text-[#E14942] text-sm">{error.date}</p>
      </div>
      <div className="flex w-full">
        <h3 className="font-semibold text-sm text-[#334155]">Profile image</h3>
        <h3 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h3>
      </div>
      <div className=" flex flex-col w-104 h-45 rounded-lg gap-2 border p-3 w-min-20 bg-[#7F7F800D] text-center items-center justify-center">
        <div className="flex size-7 rounded-full bg-white items-center justify-center">
          <img src="./upload.png"></img>
        </div>
        <h3 className="text-sm text-black">Add image</h3>
        <Input
          hidden
          type="file"
          inputName="image"
          accept="image/*"
          onChange={image}
          className="absolute w-104 h-45 rounded-lg text-transparent"
        />
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="absolute w-104 h-45 rounded-lg object-cover"
          />
        )}
      </div>
      <p className="text-[#E14942] text-sm">{error.img}</p>

      <div className="flex gap-2 ">
        <div className="flex justify-center bg-white text-black w-32 text-base rounded-md border border-[#CBD5E1] font-medium">
          <Button text="&lt; Back" onClick={onBack} />
        </div>
        <div className="flex justify-center bg-[#121316] text-white w-70 py-2.5 px-1 text-base rounded-md font-medium">
          <Button text="Continue 3/3&nbsp; &gt;" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
