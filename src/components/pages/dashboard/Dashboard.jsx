const Dashboard = () => {
  return (
    <div>
      <div className="container-xxl">
        <div className="row g-3 mb-3 row-deck">
          <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card ">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                    <i className="bi bi-journal-check fs-4"></i>
                  </div>
                  <div className="flex-fill ms-4">
                    <div className="">Total Task</div>
                    <h5 className="mb-0 ">122</h5>
                  </div>
                  <a
                    href="task.html"
                    title="view-members"
                    className="btn btn-link text-decoration-none  rounded-1"
                  >
                    <i className="icofont-hand-drawn-right fs-2 "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card ">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult">
                    <i className="bi bi-list-check fs-4"></i>
                  </div>
                  <div className="flex-fill ms-4">
                    <div className="">Completed Task</div>
                    <h5 className="mb-0 ">376</h5>
                  </div>
                  <a
                    href="task.html"
                    title="space-used"
                    className="btn btn-link text-decoration-none  rounded-1"
                  >
                    <i className="icofont-hand-drawn-right fs-2 "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card ">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult">
                    <i className="bi bi-clipboard-data fs-4"></i>
                  </div>
                  <div className="flex-fill ms-4">
                    <div className="">Progress Task</div>
                    <h5 className="mb-0 ">74</h5>
                  </div>
                  <a
                    href="task.html"
                    title="renewal-date"
                    className="btn btn-link text-decoration-none  rounded-1"
                  >
                    <i className="icofont-hand-drawn-right fs-2 "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
