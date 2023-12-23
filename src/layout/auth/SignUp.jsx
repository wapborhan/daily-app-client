import ReactLogo from "../../assets/login.svg";

const SignUp = () => {
  return (
    <div className="container">
      <div className="row content  vh-100 align-items-center">
        <div className="col-md-6">
          <h3 className="signin-text mb-5 text-center"> Sign In</h3>
          <form>
            <div className="form-group mb-5">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <button className="btn btn-success w-100 ">Login</button>
          </form>
        </div>
        <div className="col-md-6 mb-3">
          <img src={ReactLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
