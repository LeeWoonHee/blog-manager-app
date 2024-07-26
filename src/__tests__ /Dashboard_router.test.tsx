// Dashboard 컴포넌트 및 router 테스트
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DashboardMenu from "../components/dashboard/DashboardMenu";
import BlogList from "../components/dashboard/BlogList";
import CreateBlog from "../components/dashboard/CreateBlog";
import ModifyBlog from "../components/dashboard/ModifyBlog";
import BlogDetail from "../components/dashboard/BlogDetail";
import { render, screen } from "@testing-library/react";

describe("Dashboard component, router test", () => {
  test("/ path on dashboard , test dashboardMenu", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
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
      </MemoryRouter>
    );

    const dashboardMenuEl = screen.getByText("Blog list");
    const dashboardMenuSecEl = screen.getByText("Create blog");

    expect(dashboardMenuEl).toBeInTheDocument();
    expect(dashboardMenuSecEl).toBeInTheDocument();
  });

  test("/ path on dashboard , test dashboardMenu", () => {
    render(
      <MemoryRouter initialEntries={["/blog/:id"]}>
        <div className="w-full h-full flex items-center">
          <DashboardMenu />
          <div className="w-[80%] h-full p-[50px] relative">
            <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
          </div>
        </div>
      </MemoryRouter>
    );

    const blogItemEl = screen.getByText("블로그 게시물을 찾을 수 없습니다.");

    expect(blogItemEl).toBeInTheDocument();
  });
});
