export default function Input({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  variant,
}) {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full px-4 md:px-6 py-1.5 lg:py-[10px] border-[1px] border-neutral-200 rounded-lg text-sm md:text-base font-poppins outline-orange-500 placeholder:text-gray-500 text-gray-700 ${variant}`}
      />
    </>
  );
}
