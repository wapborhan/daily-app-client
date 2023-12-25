import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, logOut } = useAuth();
  const location = useNavigate();

  const toggle = () => {
    setIsActive(!isActive);
  };
  const signOut = () => {
    logOut()
      .then(() => {
        location("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl justify-content-end">
          {/* <!-- header rightbar icon --> */}
          <div className="h-right d-flex align-items-center mr-5 mr-lg-0 ">
            <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center">
              <div className="u-info me-2">
                <p className="mb-0 text-end line-height-sm ">
                  <span className="font-weight-bold">{user?.displayName}</span>
                </p>
                <small>Admin Profile</small>
              </div>
              <a
                className={
                  isActive
                    ? `nav-link dropdown-toggle pulse p-0 show`
                    : "nav-link dropdown-toggle pulse p-0"
                }
                onClick={toggle}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isActive ? "true" : "false"}
                data-bs-display="static"
              >
                <img
                  className="avatar lg rounded-circle img-thumbnail"
                  src={user?.photoURL}
                  alt="profile"
                />
              </a>
              <div
                className={
                  isActive
                    ? "dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0 show"
                    : "dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0"
                }
                data-bs-popper={isActive && "static"}
              >
                <div className="card border-0 w280">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <img
                        className="avatar rounded-circle"
                        src={user?.photoURL}
                        alt="profile"
                      />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="font-weight-bold">
                            {user?.displayName}
                          </span>
                        </p>
                        <small className="">{user?.email}</small>
                      </div>
                    </div>

                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                  </div>
                  <div className="list-group m-2 ">
                    <Link
                      to="/dashboard/task/my"
                      onClick={toggle}
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-tasks fs-5 me-3"></i>My Task
                    </Link>
                    <a
                      href="/"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-ui-user-group fs-6 me-3"></i>members
                    </a>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                    <button
                      onClick={signOut}
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-logout fs-6 me-3"></i>Signout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- menu toggler --> */}
          <button
            className="navbar-toggler p-0 border-0 menu-toggle order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainHeader"
          >
            <span className="fa fa-bars"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
