interface LoginProps {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
}

export default function LoginInputComponent({
  id,
  label,
  name,
  type = "text",
  required = false,
}: LoginProps) {
  return (
    <div>
      <label className="text text-gray-800 mb-1 font-bold">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        className="w-full text-sm bg-gray-50 border border-gray-300 rounded-sm px-1 text-gray-800 placeholder-gray-300 transition duration-200 ease-in-out"
        required={required}
      />
    </div>
  );
}
