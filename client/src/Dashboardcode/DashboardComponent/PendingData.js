import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "../App.css";
import axios from "axios";
export default function PendingData() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [allData, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState(""); // To track whether it's "Approved" or "Rejected"

  const fetchAlldata = async () => {
    let data = await fetch("http://localhost:5000/api/pendingdata", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    let result = await data.json();
    setData(result);
  };

  const handleOpenModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
    setFormType(""); // Reset formType when opening the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFormData({}); // Clear the form data when changing form type
  };

  const handleSubmit = () => {
    if (selectedData && formType === "Approved") {
      const approvedData = {
        ...selectedData,
        ...formData,
      };

      // Make a POST request to your backend API
      axios
        .post("http://localhost:5000/api/submit-approved-data", approvedData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            // Handle success, e.g., show a success message or update UI
            console.log("Data submitted successfully");
            handleCloseModal(); // Close the modal after submission
          } else {
            // Handle any errors or display an error message
            console.error("Error submitting data");
          }
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    } else {
      // Handle validation or show an error message
      console.error("Invalid data for submission");
    }
  };

  const handleRejectSubmit = () => {
    if (selectedData && formType === "Rejected") {
      const approvedData = {
        ...selectedData,
        ...formData,
      };

      // Make a POST request to your backend API
      axios
        .post("http://localhost:5000/api/submit-rejct-data", approvedData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            // Handle success, e.g., show a success message or update UI
            console.log("Data submitted successfully");
            handleCloseModal(); // Close the modal after submission
          } else {
            // Handle any errors or display an error message
            console.error("Error submitting data");
          }
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    } else {
      // Handle validation or show an error message
      console.error("Invalid data for submission");
    }
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
        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Phone No</th>
              <th scope="col">Applied Bank</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data.id}>
                <td>{data.Customer_Name}</td>
                <td>{data.Father_Name}</td>
                <td>{data.Mobile}</td>
                <td>{data.Bank_Name}</td>
                <td>{data.Customer_Location}</td>
                <td>
                  <div
                    className="btn btn-primary m-2"
                    onClick={() => handleOpenModal(data)}
                  >
                    Pending
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Loan Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="firstDiv">
              <p>Name: {selectedData ? selectedData.Customer_Name : ""}</p>
              <p>Father Name: {selectedData ? selectedData.Father_Name : ""}</p>
              <p>Phone No: {selectedData ? selectedData.Mobile : ""}</p>
              <p>Applied Bank: {selectedData ? selectedData.Bank_Name : ""}</p>
              <p>
                Customer Location:{" "}
                {selectedData ? selectedData.Customer_Location : ""}
              </p>
            </div>

            {/* Buttons for selecting form type (Approved or Rejected) */}
            <div className="mb-3">
              <Button
                variant="primary"
                className="mr-3"
                onClick={() => handleFormTypeChange("Approved")}
              >
                Approved
              </Button>
              <Button
                variant="danger"
                onClick={() => handleFormTypeChange("Rejected")}
              >
                Rejected
              </Button>
            </div>

            {formType === "Approved" && (
              <div>
                <input
                  type="text"
                  name="Rejected_date"
                  placeholder="Application Number"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Rejected_reason"
                  placeholder="Application Date"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Approved_Amount"
                  placeholder="Approved Amount"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Disbursal_Loan_Amount"
                  placeholder="Disbursal Loan Amount"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Inhand_Disb_Account"
                  placeholder="Inhand Disbursement Account"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Bt_Disb_Amount"
                  placeholder="BT Disbursement Amount"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Top_Up"
                  placeholder="Top-Up"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Cibil"
                  placeholder="CIBIL"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Tenure_Disbursal"
                  placeholder="Tenure Disbursal"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Roi"
                  placeholder="ROI"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Pf"
                  placeholder="PF"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Insurance"
                  placeholder="Insurance"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Emi"
                  placeholder="EMI"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="First_Emi_Date"
                  placeholder="First EMI Date"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Disb_Status"
                  placeholder="Disbursement Status"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Login_Bank"
                  placeholder="Login Bank"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Disbursal_Date"
                  placeholder="Disbursement Date"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Dsa_Channel_Name"
                  placeholder="DSA Channel Name"
                  onChange={handleInputChange}
                />
                <Button variant="primary" onClick={handleSubmit}>
                  SubmitA
                </Button>
              </div>
            )}

            {formType === "Rejected" && (
              <div>
                <input
                  type="text"
                  name="Rejected_date"
                  placeholder="Rejected Date"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="Rejected_reason"
                  placeholder="Rejected Reason"
                  onChange={handleInputChange}
                />
                <Button variant="primary" onClick={handleRejectSubmit}>
                  Submit
                </Button>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
