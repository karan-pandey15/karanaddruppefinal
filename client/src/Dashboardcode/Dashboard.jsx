import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [allData, setData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectData, setRejectedData] = useState([]);

  const fetchAlldata = async () => {
    let data = await fetch("http://localhost:5000/api/pendingdata", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    let result = await data.json();
    setData(result);
    console.log(result);
  };

  const fetchApprovedData = async () => {
    let data = await fetch("http://localhost:5000/api/approved-data", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    let result = await data.json();
    setApprovedData(result);
    console.log(result);
  };

  const fetchRejectedData = async () => {
    let data = await fetch("http://localhost:5000/api/rejected-data", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    let result = await data.json();
    setRejectedData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchAlldata();
    fetchApprovedData();
    fetchRejectedData();
  }, []);

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <main className="main-container">
        <div className="main-title">
          <h3 className="fs-3 text-dark ">Dashboard</h3>
        </div>

        <div className="main-cards">
     
            <div className="dash_card">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">LOGIN LEADS</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h3 className="text-white fs-3">{allData.length}</h3>
            </div>
       
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/pending">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">PENDING</h3>
                <BsFillGrid3X3GapFill
                  className="card_icon"
                  style={{ color: "white" }}
                  
                />
              </div>
              <h1 className="text-white fs-3">{allData.length}</h1>
            </Link>
          </div>
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/approved">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">DISBURSED</h3>
                <BsPeopleFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
            </Link>
            <h1 className="text-white fs-3">{approvedData.length}</h1>
          </div>
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/reject">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">REJECTED</h3>
                <BsFillBellFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{rejectData.length}</h1>
            </Link>
          </div>
        </div>

        <h1 className="text-dark fs-3">Credit Card</h1>
        <div className="main-cards">
          <div className="dash_card">
            <div className="card-inner">
              <h3 className="fs-5 fs-bold p-3 text-white">LOGIN LEADS</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h3 className="text-white fs-3">0</h3>
          </div>
          <div className="dash_card">
            <div className="card-inner">
              <h3 className="fs-5 fs-bold p-3 text-white">PENDING</h3>
              <BsFillGrid3X3GapFill className="card_icon" />
            </div>
            <h1 className="text-white fs-3">0</h1>
          </div>
          <div className="dash_card">
            <div className="card-inner">
              <h3 className="fs-5 fs-bold p-3 text-white">DISBURSED</h3>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1 className="text-white fs-3">0</h1>
          </div>
          <div className="dash_card">
            <div className="card-inner">
              <h3 className="fs-5 fs-bold p-3 text-white">REJECTED</h3>
              <BsFillBellFill className="card_icon" />
            </div>
            <h1 className="text-white fs-3">0</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
