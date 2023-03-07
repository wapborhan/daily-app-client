import React, { Fragment, Component } from "react";

import AddTask from "./AddTask";
import TaskDash from "./TaskDash";
import TaskList from "./TaskList";

export default class Income extends Component {
  render() {
    document.title = "All Task";
    return (
      <Fragment>
        <TaskDash />
        {/* <div className="border shadow rounded mb-3">
          <AddTask />
        </div> */}
        <div className="card border mt-3">
          <div className="card-header">
            <h4 className="card-title d-flex justify-content-between">
              <span>All Task</span>{" "}
              <button className="btn btn-success">+ Add task</button>
            </h4>
          </div>
          <TaskList data={this.props.data} />
        </div>
      </Fragment>
    );
  }
}
