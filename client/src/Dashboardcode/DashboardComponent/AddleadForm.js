import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

const AddleadForm = () => {
  const navigate =  useNavigate()
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };


  const allFields = [
    "Product_Loan",
    "Bank_Name",
    "Customer_Name",
    "Father_Name",
    "Mother_Name",
    "Mobile",
    "Personal_Email",
    "Pan_Card",
    "Customer_Location",
    "Company_Name",
    "Dob",
    "Login_Date",
    "Gender",
    "Religion",
    "Income_Source",
    "Marital_Status",
    "Spouse_Name",
    "Qualification",
    "Property_Status",
    "Aadhar_Card_No",
    "Current_Address_Line1",
    "Current_Address_Line2",
    "Current_City",
    "Current_Landmark",
    "Current_State",
    "Current_Pin",
    "Permanent_Address_Line1",
    "Permanent_Address_Line2",
    "Permanent_City",
    "Permanent_Landmark",
    "Permanent_State",
    "Permanent_Pin",
    "Designation",
    "Current_Company_Work_Experience",
    "Total_Work_Experience",
    "Company_Type",
    "Official_Mail",
    "Company_Address",
    "Company_City",
    "Company_State",
    "Company_Pin",
    "Salary_Account_BankName",
    "Annual_Ctc",
    "Net_Salary",
    "Obligations",
    "Scheme_Offered",
    "Loan_Amount_Applied",
    "Tenure_Of_Loan",
    "Credit_Card_Obligation",
    "Reference1_FullName_Relative",
    "Reference1_MobileNo",
    "Reference1_Address1",
    "Reference1_City",
    "Reference1_State",
    "Reference1_Pin",
    "Reference2_FullName_Friend",
    "Reference2_MobileNo",
    "Reference2_Address1",
    "Reference2_City",
    "Reference2_State",
    "Reference2_Pin",
    "Caller_Name",
    "TL_Name",
    "Manager_Name",
    "Disbursal_BankName",
    "Loan_Application_No",
    "Approved_Amount",
    "Disbursal_Loan_Amount",
    "Inhand_Disb_Account",
    "Bt_Disb_Amount",
    "Top_Up",
    "Cibil",
    "Tenure_Disbursal",
    "Roi",
    "Pf",
    "Insurance",
    "Emi",
    "First_Emi_Date",
    "Disb_Status",
    "Login_Bank",
    "Disbursal_Date",
    "Dsa_Channel_Name",
    "Not_Disburs_Reason",
    "Not_Disburs_Remark",
    "Rejection_Remark",
    "Description",
  ];

  const [formData, setFormData] = useState({
    Product_Loan: "",
    Bank_Name: "",
    Customer_Name: "",
    Father_Name: "",
    Mother_Name: "",
    Mobile: "",
    Personal_Email: "",
    Pan_Card: "",
    Customer_Location: "",
    Company_Name: "",
    Dob: "",
    Login_Date: "",
    Gender: "",
    Religion: "",
    Income_Source: "",
    Marital_Status: "",
    Spouse_Name: "",
    Qualification: "",
    Property_Status: "",
    Aadhar_Card_No: "",
    Current_Address_Line1: "",
    Current_Address_Line2: "",
    Current_City: "",
    Current_Landmark: "",
    Current_State: "",
    Current_Pin: "",
    Permanent_Address_Line1: "",
    Permanent_Address_Line2: "",
    Permanent_City: "",
    Permanent_Landmark: "",
    Permanent_State: "",
    Permanent_Pin: "",
    Designation: "",
    Current_Company_Work_Experience: "",
    Total_Work_Experience: "",
    Company_Type: "",
    Official_Mail: "",
    Company_Address: "",
    Company_City: "",
    Company_State: "",
    Company_Pin: "",
    Salary_Account_BankName: "",
    Annual_Ctc: "",
    Net_Salary: "",
    Obligations: "",
    Scheme_Offered: "",
    Loan_Amount_Applied: "",
    Tenure_Of_Loan: "",
    Credit_Card_Obligation: "",
    Reference1_FullName_Relative: "",
    Reference1_MobileNo: "",
    Reference1_Address1: "",
    Reference1_City: "",
    Reference1_State: "",
    Reference1_Pin: "",
    Reference2_FullName_Friend: "",
    Reference2_MobileNo: "",
    Reference2_Address1: "",
    Reference2_City: "",
    Reference2_State: "",
    Reference2_Pin: "",
    Caller_Name: "",
    TL_Name: "",
    Manager_Name: "",
    Disbursal_BankName: "",
    Loan_Application_No: "",
    Approved_Amount: "",
    Disbursal_Loan_Amount: "",
    Inhand_Disb_Account: "",
    Bt_Disb_Amount: "",
    Top_Up: "",
    Cibil: "",
    Tenure_Disbursal: "",
    Roi: "",
    Pf: "",
    Insurance: "",
    Emi: "",
    First_Emi_Date: "",
    Disb_Status: "",
    Login_Bank: "",
    Disbursal_Date: "",
    Dsa_Channel_Name: "",
    Not_Disburs_Reason: "",
    Not_Disburs_Remark: "",
    Rejection_Remark: "",
    Description: "",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

 

  const handleSubmit = () => {
    fetch("http://localhost:5000/api/all_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json(), setFormData("") , navigate("/dashboard"))
      .then((data) => {
        navigate("/dashboard")
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div className="container">
        <div style={{marginTop:"50px", display:"flex", justifyContent:"ce" }} >
          <div className="input-row">
            {Object.keys(formData).map((fieldName, index) => (
              <div
                key={index}
                style={{ display: "inline-block", marginRight: "20px" }}
              >
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 20px",
                  }}
                >
                  {fieldName}
                </label>
                <input
                  style={{
                    margin: "0 20px",
                    padding: "10px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    width: "250px",
                    marginBottom: "30px",
                  }}
                  value={formData[fieldName] || ""}
                  onChange={(e) => handleChange(fieldName, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{marginBottom:'20px', marginLeft:"20px"}} onClick={handleSubmit} className="btn btn-info">   
              Submit
          </div>
      </div>
    </div>
  );
};


export default AddleadForm;
