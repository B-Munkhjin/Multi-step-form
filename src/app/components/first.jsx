import { Button } from "./Button";
import { Input } from "./Input";
export const First = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <h1 className="font-semibold text-sm text-[#334155]">First name</h1>
          <h1 className="font-semibold text-sm text-[#E14942]">&nbsp; *</h1>
        </div>
        <Input placeholder="First Name" />

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h1 className="font-semibold text-sm text-[#334155]">Last name</h1>
            <h1 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h1>
          </div>
          <Input placeholder="Last Name" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h1 className="font-semibold text-sm text-[#334155]">Username</h1>
            <h1 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h1>
          </div>
          <Input placeholder="Username" />
        </div>
      </div>
      <div>
        <Button
          className="text-base rounded-md bg-[#121316] w-full text-white py-2.5 px-3 flex justify-center"
          text="Continue 2/3&nbsp; &gt;"
        />
      </div>
    </div>
  );
  //input oruulaad bolson bol border color tsenher bolno
  //boloogui bol ulaan bolno
};
