import React ,{useState,useEffect} from "react";
import axios from "axios";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/addrupeeText.png"

function Sidebar({ openSidebarToggle, OpenSidebar }) {


  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_user_data")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/api/emp_logout")
      .then((res) => {
        // location.reload(true);
        if (res.data.Status === "Success") {
          navigate("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img style={{height:"40px",width:"130px"}} src={Logo} />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <div style={{marginLeft:"50px"}}>
      {auth ? (
        <div>
          <h4  >Welcome,</h4>
          <p style={{color:"white"}} >{name}</p>
          
          
        </div>
      ) : (
        <div>
          <p>{message}</p>
        </div>
      )}
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillArchiveFill className="icon" /> Leads
            </a>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/addlead">
                  AddLeads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/pending ">
                  Pending Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/approved">
                  Disbursal Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/reject">
                  Rejected
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="sidebar-list-item">
        <Link  to="/uploadcsv">
        <BsFillGrid3X3GapFill className="icon" />Reports
      </Link>
  
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Loan
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Credit Card
          </a>
        </li>
      </ul>
     <div style={{display:"flex",justifyContent:"center",marginTop:"100px"}} >
     {auth ? (
      <div>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    ) : (
      <div>
        <p>{message}</p>
        <p>Login First</p>
        <Link to={"/signin"} className="btn btn-primary">
          Login
        </Link>
      </div>
    )}
     </div>
    </aside>
    
  );
}

export default Sidebar;
