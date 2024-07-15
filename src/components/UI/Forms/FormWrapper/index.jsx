import FormError from "./FormError";
import FormLabel from "./FormLabel";

export default function FormWrapper({ label, error, children, id }) {
  return (
    <div>
      <label htmlFor={id} className="form-control w-full">
        <FormLabel label={label} />
        {children}
        {error && <FormError error={error} />}
      </label>
    </div>
  );
}
