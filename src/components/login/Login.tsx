import { SubmitHandler, useForm } from "react-hook-form";
import LoginInput from "./LoginInput";
import axios, { AxiosError } from "axios";
import { useBlogStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const { setAccessToken } = useBlogStore();
  const router = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginDataType> = async (
    data: LoginDataType
  ) => {
    try {
      const res = await axios.post("http://localhost:4000/auth/signin", {
        userId: data.email,
        password: data.password,
      });
      const { accessToken } = res.data;

      setAccessToken(accessToken);

      router("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error(err);
        if (err.response?.status === 401) {
          setErrorMessage("이메일 혹은 비밀번호가 틀렸습니다.");
        }
      } else {
        console.error(err);
      }
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center relative">
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
              type="password"
              name="password"
              errors={errors}
              register={register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
            />
            <div className="text-sm text-red-600 my-3">
              {errorMessage && errorMessage}
            </div>
            <button
              disabled={!isValid}
              className="w-full py-3 flex justify-center items-center bg-slate-600 text-white text-xl rounded-xl active:bg-slate-800 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 disabled:active:bg-slate-600"
              type="submit"
            >
              Login
            </button>
            <button
              className="w-full py-3 mt-4 flex justify-center items-center bg-slate-800 text-white text-xl rounded-xl "
              onClick={() => router("/")}
            >
              go to dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
