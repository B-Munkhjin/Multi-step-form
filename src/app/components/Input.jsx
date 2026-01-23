export const Input = (props) => {
  const { placeholder } = props;
  return (
    <input
      className="w-full h-11 rounded-lg border p-3 text-[#121316]"
      placeholder={placeholder}
    ></input>
  );
};
