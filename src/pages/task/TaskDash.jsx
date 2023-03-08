import React, { Fragment } from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";

const data = [
  {
    title: "Total Tasks",
    taskam: "234k",
  },
  {
    title: "Pending Tasks",
    taskam: "234k",
  },
  {
    title: "Completed Tasks",
    taskam: "234k",
  },
];

const TaskDash = () => {
  return (
    <Fragment>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-md-4">
              <Card className="my-2">
                <CardHeader>{item.title}</CardHeader>
                <CardBody>{item.taskam} </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TaskDash;
