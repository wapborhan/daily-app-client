import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      status: "",
      priority: "",
      taskTitle: "",
      taskDesc: "",
      isSubmitDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    this.setState(
      {
        // use dynamic name value to set our state object property
        [event.target.name]: event.target.value,
      },
      function () {
        this.canSubmit();
      }
    );
  }

  canSubmit() {
    const { taskTitle, taskDesc, status, priority } = this.state;
    // If Input Value is blank Button are Disable
    if (
      taskTitle.length > 0 &&
      taskDesc.length > 0 &&
      status.length > 0 &&
      priority.length > 0
    ) {
      this.setState({
        isSubmitDisabled: false,
      });
    } else {
      this.setState({
        isSubmitDisabled: true,
      });
    }
  }
  // triggered on submit
  handleSubmit = (event) => {
    // get our const values by destructuring state
    event.preventDefault();
    const { taskTitle, taskDesc, status, priority } = this.state;
    // regular javascript alert function
    alert(`Your type detail: \n 
           Title: ${taskTitle} \n 
           Description: ${taskDesc} \n
           Status: ${status} \n
           Priority: ${priority} \n
           `);
  };
  render() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const time = d.getDate() + "/" + month + "/" + d.getFullYear();

    console.log(this.state);
    return (
      <div className="form">
        <Card>
          <CardHeader>Add Task</CardHeader>
          <CardBody>
            <form onSubmit={this.handleSubmit}>
              <div className="row  mb-3">
                <div className="col-md-4">
                  <input type="text" placeholder={time} disabled />
                </div>
                <div className="col-md-8">
                  <input
                    className="mb-2"
                    id="income-detail"
                    type="text"
                    placeholder="Title"
                    name="taskTitle"
                    value={this.state.taskTitle}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea
                    className="mb-2 form-control"
                    rows="3"
                    id="incamount"
                    type="text"
                    placeholder="Description"
                    name="taskDesc"
                    value={this.state.taskDesc}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <select
                    class="form-select align-self-baseline"
                    onChange={this.handleChange}
                    name="status"
                  >
                    <option value="">Status</option>
                    <option value="One">One</option>
                    <option value="two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    class="form-select align-self-baseline"
                    onChange={this.handleChange}
                    name="priority"
                  >
                    <option value="">Priority</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-success"
                    id="income-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#incomemodal"
                    disabled={this.state.isSubmitDisabled}
                  >
                    আপডেট{" "}
                  </button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
