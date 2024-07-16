import { SubmitHandler, useForm } from "react-hook-form";
import LoginInput from "./LoginInput";

type LoginDataType = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginDataType>();

  const onSubmit: SubmitHandler<LoginDataType> = (data: LoginDataType) => {
    console.log(data);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center">
        <div className="text-2xl lg:text-4xl font-bold mb-10 text-center">
          Dashboard Login
        </div>
        <div className="w-full flex justify-center">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <LoginInput
              labelText="Email"
              htmlForm="email"
              type="text"
              name="email"
              errors={errors}
              register={register("email", {
                required: "이메일을 입력해주세요.",
              })}
            />

            <LoginInput
              labelText="Password"
              htmlForm="password"
              type="text"
              name="password"
              errors={errors}
              register={register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
            />

            <button
              disabled={!isValid}
              className="w-full py-3 flex justify-center items-center bg-slate-600 text-white text-xl rounded-xl active:bg-slate-800 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 disabled:active:bg-slate-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
