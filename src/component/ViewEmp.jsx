import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { listContext } from "../App";

const ViewEmp = () => {
  const { employeeList, SetEmployeeList } = useContext(listContext);
  // console.log(`EMPList`, employeeList);

  const [viewData, setViewData] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const filtered = employeeList?.filter((_, index) => index + 1 == id);
      setViewData(filtered[0]);
      // console.log(`filtered-data`, filtered);
    }
  }, [id]);

  return (
    <div className="constaner-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card mx-4 my-5">
            <div className="card-header">
              <h3>Employee Details</h3>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Employee Email</th>
                    <th scope="col">Employee Education</th>
                    <th scope="col">Employee Designation</th>
                    <th scope="col">Employee Address</th>
                    <th scope="col">Employee Salary</th>
                    <th scope="col">Employee Joining Date</th>
                    <th scope="col">Employee Performance</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <th>{viewData?.Name}</th>
                    <td>{viewData?.Id}</td>
                    <td>{viewData?.Email}</td>
                    <td>{viewData?.Education}</td>
                    <td>{viewData?.Designation}</td>
                    <td>{viewData?.Address}</td>
                    <td>{viewData?.Salary}</td>
                    <td>{viewData?.JoiningDate}</td>
                    <td>{viewData?.Performance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
