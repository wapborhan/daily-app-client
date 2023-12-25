/* eslint-disable react/prop-types */

const TaskCard = ({ task }) => {
  const { name, type, id } = task;

  return (
    <div className="dd-item" data-id={id}>
      <div className="dd-handle">
        <div className="task-info d-flex align-items-center justify-content-between">
          <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
            {name}
          </h6>
        </div>
        <p className="py-2 mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec
          scelerisque massa.
        </p>
        <div className="tikit-info row g-3 align-items-center">
          <div className="col-sm">
            <div className="task-priority ">
              <div className="avatar-list avatar-list-stacked m-0">
                <img
                  className="avatar rounded-circle small-avt"
                  src="assets/images/xs/avatar1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-sm text-end">
            <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
              Priority
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
