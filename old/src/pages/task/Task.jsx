import React, { Fragment, Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

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
              <NavLink to="/add-task">
                <button className="btn btn-success">+ Add task</button>
              </NavLink>
            </h4>
          </div>
          <TaskList data={this.props.data} />
        </div>
      </Fragment>
    );
  }
}
