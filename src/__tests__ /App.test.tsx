import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/login/Login";

describe("라우터 테스트 App", () => {
  test(" / 경로일 때 나타나는 컴포넌트 확인", () => {
    render(<App />);
    const dashboardEl = screen.getByText(
      "Dashboard with nestjs and react created by lee"
    );
    expect(dashboardEl).toBeInTheDocument();
  });

  test(" /login 경로일 때 나타나는 컴포넌트 확인", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Dashboard Login")).toBeInTheDocument();
  });
});
