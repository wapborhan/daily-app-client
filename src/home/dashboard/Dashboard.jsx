import React from "react";
import TaskDash from "../../pages/task/TaskDash";

const Dashboard = (props) => {
  document.title = "Daily App";
  return (
    <section>
      <div className="dashboards">
        <TaskDash />
      </div>
    </section>
  );
};

export default Dashboard;
