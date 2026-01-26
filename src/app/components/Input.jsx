export const Input = (props) => {
  const { placeholder, type, inputName, onChange } = props;
  return (
    <input
      className="w-full h-11 rounded-lg border p-3 text-[#121316] "
      placeholder={placeholder}
      type={type}
      name={inputName}
      onChange={onChange}
    ></input>
  );
};
