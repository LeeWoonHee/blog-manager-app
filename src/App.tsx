import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import LoggedInRoute from "./components/LoggedInRoute";

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
