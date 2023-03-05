import React from "react";
import Task from "../../pages/task/Task";

const Dashboard = (props) => {
  document.title = "Daily App";
  return (
    <section>
      <div className="dashboards">
        <Task />
      </div>
    </section>
  );
};

export default Dashboard;
