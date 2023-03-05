import React from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
const Task = () => {
  return (
    <Card
      style={{
        width: "100%",
      }}
      // className="shadow"
    >
      <CardHeader className="h4 fw-bold">Task</CardHeader>
      <CardBody className="p-0">
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>01/03/2023</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>01/03/2023</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>01/03/2023</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Task;
