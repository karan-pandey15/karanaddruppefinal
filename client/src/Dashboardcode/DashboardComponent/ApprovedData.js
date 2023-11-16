import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
// const [approvedData,setApprovedData] = useState([]);
// const [rejectData,setRejectedData] = useState([])

export default function ApprovedData() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [allData, setData] = useState([]);

  const fetchAlldata = async () => {
    let data = await fetch("http://localhost:5000/api/approved-data", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    let result = await data.json();
    setData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchAlldata();
  }, []);

  return (

    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar
      openSidebarToggle={openSidebarToggle}
      OpenSidebar={OpenSidebar}
    />
 
    <div className="container" >
    <div className="table-responsive" >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Phone No</th>
            <th scope="col">Applied Bank</th>
            <th scope="col">Pan No</th>
            <th scope="col">Loan Amount</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        {allData.map((data) => {
          return (
            <tbody>
              <tr>

                <td>{data.Customer_Name}</td>
                <td>{data.Father_Name}</td>
                <td>{data.Mobile}</td>
                <td>{data.Bank_Name}</td>
                <td>{data.panNo}</td>
                <td>{data.Disbursal_Loan_Amount}</td>
                <td>{data.Customer_Location}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
    </div>
    </div>
  );
}
