import DashboardMenu from "./DashboardMenu";
import DashboardMain from "./DashboardMain";
import { useState } from "react";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState<string>("Blog list");
  return (
    <div className="w-full h-full flex items-center">
      <DashboardMenu setCurrentPage={setCurrentPage} />
      <DashboardMain currentPage={currentPage} />
    </div>
  );
};

export default Dashboard;