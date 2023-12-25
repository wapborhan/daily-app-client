import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import DraggableTask from "./DraggableTask";
import DroppableTask from "./DroppableTask";
import "./task.css";

const lists = [
  {
    id: 1,
    listName: "Start",
    type: "start",
  },
  {
    id: 2,
    listName: "In Process",
    type: "process",
  },
  {
    id: 3,
    listName: "On Hold",
    type: "hold",
  },
  {
    id: 4,
    listName: "Done",
    type: "done",
  },
];

const initialTasks = [
  { id: 1, name: "Learning JS", type: "start" },
  { id: 2, name: "Learning React.js", type: "start" },
  { id: 3, name: "Learning Express.js", type: "process" },
  { id: 4, name: "Learning MongoDB", type: "hold" },
  { id: 5, name: "Becoming a fullstack developer", type: "done" },
];

const Task = () => {
  const [tasks, setTasks] = useState([...initialTasks]);
  const onDragEnd = (event) => {
    const { over, active } = event;
    // console.log({ over, active });
    setTasks(
      tasks.map((item) => {
        if (item.id === active.id) {
          return {
            ...item,
            type: over.id,
          };
        }

        return item;
      })
    );
  };

  const getTasks = (list) => tasks.filter((item) => item.type === list.type);

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="containers">
        {lists.map((item) => (
          <DroppableTask key={item.id} id={item.type}>
            <h1>{item.listName}</h1>
            {getTasks(item).map((task) => (
              <DraggableTask key={task.id} id={task.id}>
                {task.name}
              </DraggableTask>
            ))}
          </DroppableTask>
        ))}
      </div>
    </DndContext>
  );
};

export default Task;
