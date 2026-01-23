import { Input } from "./Input";
export const Content = (props) => {
  const { name, placeholder, requirement, error, onchange } = props;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full">
        <h1 className="font-semibold text-sm text-[#334155]">{name}</h1>
        <h1 className="font-semibold text-sm text-[#E14942]">&nbsp;*</h1>
      </div>
      <Input placeholder={placeholder} />
    </div>
  );
};

//props damjuulj utgaa avna
// first second dtr bga buh yma content gdg component-eer bagasgaj bichne
