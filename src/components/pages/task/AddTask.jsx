const AddTask = () => {
  const handleSubmit = () => {};
  return (
    <div className="form">
      <div className="card">
        <div className="card-header">Add Task</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row  mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder={new Date()}
                  disabled
                />
              </div>
              <div className="col-md-8">
                <input
                  className="mb-2 form-control"
                  id="income-detail"
                  type="text"
                  placeholder="Title"
                  name="taskTitle"
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
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <select
                  className="form-select align-self-baseline "
                  name="status"
                >
                  <option selected disabled>
                    Status
                  </option>
                  <option value="One">One</option>
                  <option value="two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select align-self-baseline"
                  name="priority"
                >
                  <option selected disabled>
                    Priority
                  </option>
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
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
