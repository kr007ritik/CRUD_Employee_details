import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ListEmp from "./component/ListEmp";
import AddEmp from "./component/AddEmp";
import ViewEmp from "./component/ViewEmp";

const listContext = createContext();

function App() {
  const [employeeList, SetEmployeeList] = useState([]);

  return (
    <>
      <listContext.Provider value={{ employeeList, SetEmployeeList }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ListEmp />}></Route>
            <Route path="/add" element={<AddEmp />}></Route>
            <Route path="/view/:id" element={<ViewEmp />}></Route>
          </Routes>
        </Router>
      </listContext.Provider>
    </>
  );
}
export { listContext };

export default App;
