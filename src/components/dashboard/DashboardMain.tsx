import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";

type Props = {
  currentPage: string;
};
const DashboardMain = ({ currentPage }: Props) => {
  return (
    <div className="w-[80%] h-full p-[50px]">
      <div className="font-bold text-2xl">
        Dashboard with nestjs and react created by lee
      </div>
      <div className="mt-5">{currentPage !== "home" ? currentPage : null}</div>
      <div className="mt-5 w-full h-full flex justify-center items-center">
        {currentPage === "Blog list" ? <BlogList /> : <CreateBlog />}
      </div>
    </div>
  );
};

export default DashboardMain;
