import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import LoggedInRoute from "../components/LoggedInRoute";
import Login from "../components/login/Login";

// APP 컴포넌트 및 router 테스트
describe("라우터 테스트 App", () => {
  test(" / 경로일 때 나타나는 컴포넌트 확인", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/*" element={<Dashboard />}></Route>
          <Route
            path="/login"
            element={
              <LoggedInRoute>
                <Login />
              </LoggedInRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const dashboardEl = screen.getByText("데이터가 없습니다.");

    expect(dashboardEl).toBeInTheDocument();
  });

  test("/login 경로 테스트", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/*" element={<Dashboard />}></Route>
          <Route
            path="/login"
            element={
              <LoggedInRoute>
                <Login />
              </LoggedInRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const loginEl = screen.getByText("Dashboard Login");
    expect(loginEl).toBeInTheDocument();
  });
});
