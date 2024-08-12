import ButtonAuth from "../Button/ButtonAuth";

export default function Form({
  id,
  buttonText,
  children,
  onSubmit,
  isLoading,
}) {
  return (
    <>
      <form id={id} onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">{children}</div>
        <div className="flex items-center gap-2 mt-5">
          <input
            name="terms"
            type="checkbox"
            autoComplete="off"
            className="w-3 h-3"
            required
          />
          <p className="text-xs text-gray-700">
            Saya menyetujui syarat dan ketentuan yang berlaku.
          </p>
        </div>
        <ButtonAuth isLoading={isLoading} type="submit" text={buttonText} />
      </form>
    </>
  );
}
