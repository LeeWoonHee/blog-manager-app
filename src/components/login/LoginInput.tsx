import React, { InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
type Props = {
  htmlForm: string;
  labelText: string;
  errors: FieldErrors;
  name: string;
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;
const LoginInput = ({
  htmlForm,
  labelText,
  errors,
  register,
  name,
  ...options
}: Props) => {
  const error = errors[name];
  return (
    <div className="w-full flex flex-col gap-2 my-2">
      <label className="text-lg text-slate-500" htmlFor={htmlForm}>
        {labelText}
      </label>
      <input
        className="p-4 border-2 rounded-lg focus:ring ring-0 focus:ring-slate-700 transition-shadow"
        id={htmlForm}
        {...options}
        {...register}
      />
      {error && <p>{error.message?.toString()}</p>}
    </div>
  );
};

export default LoginInput;
