import { Route, Routes } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import BlogDetail from "./BlogDetail";
import { useEffect } from "react";
import { useBlogStore } from "../../store/store";
import ModifyBlog from "./ModifyBlog";

const Dashboard = () => {
  const { fetchBlogList, blogList } = useBlogStore();

  useEffect(() => {
    fetchBlogList();
  }, [blogList]);
  return (
    <div className="w-full h-full flex items-center">
      <DashboardMenu />
      <div className="w-[80%] h-full p-[50px] relative">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/modify/:id" element={<ModifyBlog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
