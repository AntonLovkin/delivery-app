function FormField({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  required }) {
  return (
    <div>
      <label htmlFor={name}>
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
}

export default FormField