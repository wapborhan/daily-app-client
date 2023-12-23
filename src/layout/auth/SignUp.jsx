import { Link, useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/login.svg";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("created user", user);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="row content  vh-100 align-items-center">
        <div className="col-md-6">
          <h3 className="signin-text mb-5 text-center"> Sign In</h3>
          <form onSubmit={handleSignUp}>
            <div className="form-group mb-5">
              <label htmlFor="name">Photo URL</label>
              <input type="text" name="photoURL" className="form-control" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <button className="btn btn-success w-100 ">Login</button>
          </form>{" "}
          <p className="my-4 text-center">
            Already Have an Account?
            <Link className="text-orange-600 font-bold" to="/signin">
              {" "}
              Login
            </Link>
          </p>
        </div>
        <div className="col-md-6 mb-3">
          <img src={ReactLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
