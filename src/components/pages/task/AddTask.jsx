import { useForm, Controller, useFieldArray } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
const AddTask = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmitAddMeal = (data) => {
    const inputData = {
      // distributor_name: user?.displayName,

      ...data,
    };

    console.log(inputData);

    // axios.post("/menu", inputData).then((res) => {
    //   if (res.status === 200) {
    //     reset();

    //   }
    // });
  };
  return (
    <div className="form mb-5">
      <div className="container">
        <header className="header">
          <h1 id="title" className="text-center mb-5">
            Add Task
          </h1>
        </header>
        <div className="form-wrap">
          <form id="survey-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="text"
                    {...register("date")}
                    className="form-control"
                    defaultValue={new Date()}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Enter your email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Deadline <small>(optional)</small>
                  </label>
                  <input
                    type="date"
                    {...register("deadline", { required: true })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>current role</label>
                  <select
                    id="dropdown"
                    name="role"
                    className="form-control"
                    required
                  >
                    <option disabled selected value>
                      Select
                    </option>
                    <option value="student">Student</option>
                    <option value="job">Full Time Job</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Leave Message</label>
                  <textarea
                    id="comments"
                    className="form-control"
                    name="comment"
                    placeholder="Enter your comment here..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <button
                  type="submit"
                  id="submit"
                  onClick={handleSubmit(onSubmitAddMeal)}
                  className="btn btn-primary btn-block"
                >
                  Submit Survey
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
