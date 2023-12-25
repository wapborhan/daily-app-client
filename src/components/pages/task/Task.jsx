import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Taskcard from "./TaskCard";

import DraggableTask from "./DraggableTask";
import DroppableTask from "./DroppableTask";
import "./task.css";
import useTask from "../../../hooks/useTask";

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
  const [task, refetch] = useTask();
  const [tasks, setTasks] = useState([...task]);

  const onDragEnd = (event) => {
    const { over, active } = event;

    if (!over || !active) {
      return;
    }

    // Assuming you have a function in useTask to update the task type
    const updateTaskType = async (taskId, newType) => {
      console.log(taskId, newType);
      try {
        const response = await fetch(`http://localhost:3300/task/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: newType }),
        });

        if (!response.ok) {
          throw new Error("Failed to update task type");
        }

        // Assuming your useTask hook handles refetching data
        refetch();
      } catch (error) {
        console.error("Error updating task type:", error);
      }
    };

    // setTasks(
    //   tasks.map((item) => {
    //     refetch();
    //     if (item.id === active.id) {
    //       return {
    //         ...item,
    //         type: over.id,
    //       };
    //     }

    //     return item;
    //   })
    // );

    setTasks((prevTasks) =>
      prevTasks.map((item) => {
        if (item.id === active.id) {
          // Update the type in the local state
          const updatedTask = { ...item, type: over.id };
          // Update the type in the backend
          updateTaskType(item.id, over.id);
          return updatedTask;
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
            <h3 className="mb-3">{item.listName}</h3>
            {getTasks(item).map((task) => (
              <DraggableTask key={task._id} id={task._id}>
                <Taskcard task={task} />
              </DraggableTask>
            ))}
          </DroppableTask>
        ))}
      </div>
    </DndContext>
  );
};

export default Task;
