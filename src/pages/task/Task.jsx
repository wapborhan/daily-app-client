import React, { Fragment, Component } from "react";

import AddTask from "./AddTask";
import TaskDash from "./TaskDash";
import IncomeList from "./TaskList";

export default class Income extends Component {
  render() {
    document.title = "Income - SR Book";
    return (
      <Fragment>
        <TaskDash />
        <div className="border shadow rounded mb-3">
          <AddTask />
        </div>
        <IncomeList data={this.props.data} />
      </Fragment>
    );
  }
}
