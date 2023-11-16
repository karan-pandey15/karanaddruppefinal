import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function RejectedData() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [allData, setData] = useState([]);

  const fetchAlldata = async () => {
    let data = await fetch("http://localhost:5000/api/rejected-data", {
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

      <div className="container">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Phone No</th>
              <th scope="col">Bank Name</th>
              <th scope="col">Rejected date</th>
              <th scope="col">Rejected Reason</th>
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
                  <td>{data.Rejected_date}</td>
                  <td>{data.Rejected_reason}</td>
                  <td>{data.Customer_Location}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
