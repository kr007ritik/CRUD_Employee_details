import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { listContext } from "../App";

const ListEmp = () => {
  const { employeeList, SetEmployeeList } = useContext(listContext);
  // console.log(employeeList);
  const navigate = useNavigate();

  const handleView = (index) => {
    navigate(`/view/${index + 1}`);
  };

  const handleDelete = (ind) => {
    const afterDelete = employeeList?.filter((_, index) => index !== ind);
    SetEmployeeList(afterDelete);
  };

  const handleEdit = (emp, index) => {
    navigate("/add", { state: { data: emp, ind: index } });
  };

  return (
    <div className="constaner-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card mx-4 my-5">
            <div className="card-header d-flex justify-content-between">
              <h3>Employee List</h3>
              <NavLink to={"/add"} className="btn btn-primary">
                Create New
              </NavLink>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead className="text-center">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Performace</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Joining Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {employeeList?.map((employee, index) => {
                    return (
                      <tr key={index + 1}>
                        <th>{index + 1}</th>
                        <td>{employee.Name}</td>
                        <td>{employee.Id}</td>
                        <td>{employee.Designation}</td>
                        <td>{employee.Performance}</td>
                        <td>{employee.Salary}</td>
                        <td>{employee.JoiningDate}</td>
                        <td>
                          <i
                            className="fa-solid fa-eye px-2 pointer scale-1 text-primary"
                            onClick={() => handleView(index)}
                          ></i>
                          <i
                            className="fa-solid fa-pen-to-square px-2 pointer scale-1 text-success"
                            onClick={() => handleEdit(employee, index)}
                          ></i>
                          <i
                            className="fa-solid fa-trash px-2 pointer scale-1 text-danger"
                            onClick={() => handleDelete(index)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
