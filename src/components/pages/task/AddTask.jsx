import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmitAddMeal = (data) => {
    const inputData = {
      name: user?.displayName,
      email: user?.email,
      type: "start",
      ...data,
    };

    console.log(inputData);

    axiosPublic.post("/task", inputData).then((res) => {
      if (res.status === 200) {
        reset();
      }
    });
  };
  return (
    <div className="form mb-5">
      <div className="container">
        <div className="form-wrap">
          <form id="survey-form">
            <div className="row">
              <header className="header">
                <h1 id="title" className="text-center mb-5">
                  Add Task
                </h1>
              </header>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label" htmlFor="date">
                    Date
                  </label>
                  <Controller
                    control={control}
                    name="date"
                    defaultValue={new Date()}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <ReactDatePicker
                        showIcon
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        className="form-control"
                        disabled
                      />
                    )}
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
                    Deadline
                  </label>
                  <Controller
                    control={control}
                    name="deadline"
                    className="d-flex align-items-center"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <ReactDatePicker
                        showIcon
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        className="form-control"
                        placeholderText={"Deadline"}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Priority</label>
                  <Controller
                    name="priority"
                    control={control}
                    defaultValue="" // Set default value if needed
                    rules={{ required: "This field is required" }} // Add validation rules if needed
                    render={({ field }) => (
                      <select {...field} className="form-control">
                        <option value="" disabled hidden>
                          Priority
                        </option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                      </select>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    {...register("description", { required: true })}
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
                  className="btn btn-primary w-full"
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
