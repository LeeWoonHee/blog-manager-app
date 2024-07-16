import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/login/Login";

describe("라우터 테스트 App", () => {
  test(" / 경로일 때 나타나는 컴포넌트 확인", () => {
    render(<App />);

    expect(screen.getByText("Dashboard Login")).toBeInTheDocument();
  });

  test(" /dashborad 경로일 때 나타나는 컴포넌트 확인", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const dashboardEl = screen.getByRole("heading", {
      level: 1,
      name: "dashboard",
    });
    expect(dashboardEl).toBeInTheDocument();
  });
});
