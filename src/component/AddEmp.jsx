import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmp = () => {
  const { employeeList, SetEmployeeList } = useContext(listContext);
  const [isUpdating, SetIsUpdating] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  // console.log("location", state);

  const [formValue, setFormValue] = useState({
    Name: "",
    Id: "",
    Email: "",
    Education: "",
    Designation: "",
    Address: "",
    Salary: "",
    JoiningDate: "",
    Performance: "Normal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name:", name);
    // console.log("value:", value);
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUpdating) {
      SetEmployeeList([...employeeList, formValue]);
      setFormValue({
        Name: "",
        Id: "",
        Email: "",
        Education: "",
        Designation: "",
        Address: "",
        Salary: "",
        JoiningDate: "",
        Performance: "normal",
      });
    } else {
      const updating = employeeList?.map((item, index) => {
        return index === state?.ind ? { ...item, ...formValue } : item;
      });
      SetEmployeeList(updating);
      SetIsUpdating(false);
      navigate("/");
      // console.log(`updating`, updating);
    }
  };

  useEffect(() => {
    if (state?.data) {
      SetIsUpdating(true);
      setFormValue({ ...state?.data });
    }
  }, [state?.data]);

  // console.log("employee Value:", employeeList);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card mx-4 my-5">
            <div className="card-header">
              <h3 className="m-0">Add Employee</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Name
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee name"
                      name="Name"
                      value={formValue?.Name}
                      onChange={handleChange}
                      className="form-input "
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee id"
                      name="Id"
                      value={formValue?.Id}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Email
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee email"
                      name="Email"
                      value={formValue?.Email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Education
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee education"
                      name="Education"
                      value={formValue?.Education}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Designation
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee designation"
                      name="Designation"
                      value={formValue?.Designation}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Address
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee address"
                      name="Address"
                      value={formValue?.Address}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Salary
                    </label>
                    <input
                      type="text"
                      placeholder="enter employee salary"
                      name="Salary"
                      value={formValue?.Salary}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Joining Date
                    </label>
                    <input
                      type="date"
                      name="JoiningDate"
                      value={formValue?.JoiningDate}
                      className="form-input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-14 ">
                      Employee Performance
                    </label>
                    <select
                      id=""
                      name="Performance"
                      value={formValue?.Performance}
                      className="form-input "
                      onChange={handleChange}
                    >
                      <option value="Normal">Normal</option>
                      <option value="Average">Average</option>
                      <option value="Excellent">Excellent</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
