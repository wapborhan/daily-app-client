import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/login.svg";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // const user = { email };

        if (loggedInUser) {
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="row content  vh-100 align-items-center">
        <div className="col-md-6 mb-3">
          <img src={ReactLogo} alt="" />
        </div>
        <div className="col-md-6">
          <h3 className="signin-text mb-5 text-center"> Sign In</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-5">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>

            <input
              className="btn btn-success w-100 "
              type="submit"
              value="Log In"
            />
          </form>{" "}
          <p className="my-4 text-center">
            Already Have an Account?
            <Link className="text-orange-600 font-bold" to="/signup">
              {" "}
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
