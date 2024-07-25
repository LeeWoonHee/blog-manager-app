import { Link, useNavigate } from "react-router-dom";
import { useBlogStore } from "../../store/store";

const DashboardMenu = () => {
  const router = useNavigate();
  const { accessToken, removeAccessToken } = useBlogStore();

  const logout = () => {
    if (accessToken) {
      removeAccessToken();
      alert("로그아웃 되었습니다.");
      router("/");
    } else {
      router("/login");
    }
  };
  return (
    <div className="w-[20%] h-full border-r border-[#ccc] py-[50px] px-[20px] ">
      <div className="flex">
        <div className="w-full flex justify-start items-center">
          <div className="font-bold text-[1.2vw]">
            {" "}
            {accessToken && "admin"}
          </div>
        </div>
        <div className="text-[1vw]">
          {accessToken ? (
            <button onClick={logout}>logout</button>
          ) : (
            <button onClick={logout}>login</button>
          )}
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="text-center mt-5">
          <div>
            <Link to={"/"} className="mt-2">
              Blog list
            </Link>
          </div>
          <div>
            <Link to={"/create"} className="mt-2">
              Create blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
