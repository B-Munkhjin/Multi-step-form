export const Second = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <h className="font-semibold text-sm text-[#334155]">Email</h>
          <h className="font-semibold text-sm text-[#E14942]">&nbsp; *</h>
        </div>
        <input
          className="w-full h-11 rounded-lg border p-3 text-[#121316]"
          placeholder="First Name"
        ></input>

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h className="font-semibold text-sm text-[#334155]">Phone number</h>
            <h className="font-semibold text-sm text-[#E14942]">&nbsp;*</h>
          </div>
          <input
            className="w-full h-11 rounded-lg border p-3 text-[#121316]"
            placeholder="Last Name"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h className="font-semibold text-sm text-[#334155]">Password</h>
            <h className="font-semibold text-sm text-[#E14942]">&nbsp;*</h>
          </div>
          <input
            className="w-full h-11 rounded-lg border p-3 text-[#121316]"
            placeholder="Username"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full">
            <h className="font-semibold text-sm text-[#334155]">
              Confirm password
            </h>
            <h className="font-semibold text-sm text-[#E14942]">&nbsp;*</h>
          </div>
          <input
            className="w-full h-11 rounded-lg border p-3 text-[#121316]"
            placeholder="Username"
          ></input>
        </div>
      </div>
      <div>
        <button className="bg-[#121316] w-full text-base text-white py-2.5 px-3 rounded-md">
          Continue 1/3&nbsp; &gt;
        </button>
      </div>
    </div>
  );
  //input oruulaad bolson bol border color tsenher bolno
};
