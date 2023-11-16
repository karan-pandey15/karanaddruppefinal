// import Carousel from "./Components/Carousel";
// import NavbarComp from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import TopNav from "./Components/TopNav";
import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PersoanlLoan from "./Pages/PersonalLoan";
import BusinessLoan from "./Pages/BusinessLoan";
import HomeLoan from "./Pages/HomeLoan";
import LoanAgainstProperty from "./Pages/LoanAgainstProperty";
import CreditCard from "./Pages/CreditCard";
import UsedCarLoan from "./Pages/UsedCarLoan";
import OdCcWorkingCapital from "./Pages/OD_CC_WorkingCapital";
import Blog from "./Pages/Blog";
import HealthInsurance from "./Pages/HealthInsurance";
import EmiCalculator from "./Pages/EmiCalculator";
import MutualFund from "./Pages/MutualFund";
import Cibil from "./Pages/Cibil";
import ApplyNow from "./Pages/ApplyNow";
import Contact from "./Pages/Contact";
import GeneralInsurance from "./Pages/GeneralInsurance";
import BecomePartner from "./Pages/BecomePartner";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Dashboardcode/Dashboard";
import ApprovedData from "./Dashboardcode/DashboardComponent/ApprovedData";
import PendingData from "./Dashboardcode/DashboardComponent/PendingData";
import RejectedData from "./Dashboardcode/DashboardComponent/RejectedData";
import AddleadForm from "./Dashboardcode/DashboardComponent/AddleadForm";
import UploadCSV from "./Dashboardcode/DashboardComponent/UploadCSV";
import CustomerSignIn from "./customerFolder/CustomerSignIn";
import CustomerSignUp from "./customerFolder/CustomerSignUp";
import CustomerLoanApply from "./customerFolder/CustomerLoanApply";
import CustomerCardApply from "./customerFolder/CustomerCardApply";
import CustomerApply from "./customerFolder/CustomerApply";
import CustomerDashboard from "./customerFolder/CustomerDashboard";
import CustomerCibilIssue from "./customerFolder/CustomerCibilIssue";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {
            // Employee Paths
          }

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addlead" element={<AddleadForm />} />
          <Route path="/approved" element={<ApprovedData />}></Route>
          <Route path="/pending" element={<PendingData />}></Route>
          <Route path="/reject" element={<RejectedData />}></Route>
          <Route path="/uploadcsv" element={<UploadCSV />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {
            // Pages Paths
          }

          <Route path="/" element={<Home />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/personal-loan" element={<PersoanlLoan />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route
            path="/loan-against-property"
            element={<LoanAgainstProperty />}
          />
          <Route path="/car-loan" element={<UsedCarLoan />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/general-insurance" element={<GeneralInsurance />} />
          <Route path="/mutal-funds" element={<MutualFund />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/emi-calc" element={<EmiCalculator />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cibil-issue" element={<Cibil />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route
            path="/od-cc-workingCapital"
            element={<OdCcWorkingCapital />}
          />

          {
            // customer Paths
          }
          <Route path="/customer_signin" element={<CustomerSignIn />} />
          <Route path="/customer_signup" element={<CustomerSignUp />} />
          <Route path="/cust_loan_apply" element={<CustomerLoanApply />} />
          <Route path="/cust_card_apply" element={<CustomerCardApply />} />
          <Route path="/customer_apply" element={<CustomerApply />} />
          <Route path="/customer_dashboard" element={<CustomerDashboard />} />
          <Route path="/cust_cibil_issue" element={<CustomerCibilIssue />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
