export const Input = (props) => {
  const { placeholder, type, inputName, onChange, className } = props;
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      name={inputName}
      onChange={onChange}
    ></input>
  );
};
