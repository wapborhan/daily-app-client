import { useDroppable } from "@dnd-kit/core";

const DroppableTask = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    backgroundColor: isOver ? "rgba(0, 255, 0, 0.3)" : undefined,
  };
  return (
    <div ref={setNodeRef} className="droppable-container" style={style}>
      {children}
    </div>
  );
};

export default DroppableTask;
