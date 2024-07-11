import { useNavigate } from "react-router-dom";

type Props = {
  setCurrentPage: (page: string) => void;
};
const DashboardMenu = ({ setCurrentPage }: Props) => {
  const router = useNavigate();
  const logout = () => {
    router("/");
  };
  return (
    <div className="w-[20%] h-full border-r border-[#ccc] py-[50px] px-[20px] ">
      <div className="w-full flex justify-between items-center">
        <div className="font-bold text-2xl"> Test Member</div>
        <div>
          <button onClick={logout}>logout</button>
        </div>
      </div>

      <div className="w-full mt-5">
        <div className="text-center mt-5">
          <div>
            <button
              onClick={() => setCurrentPage("Blog list")}
              className="mt-2"
            >
              Show blog list
            </button>
          </div>
          <div>
            <button
              onClick={() => setCurrentPage("Create blog")}
              className="mt-2"
            >
              Create blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
