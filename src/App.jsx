import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Products from "./pages/Products";
import OrderHistory from "./pages/OrderHistory";
import CustomerData from "./pages/CustomerData";
import Profile from "./pages/Accounts/Profile";
import HelpAndSupport from "./pages/HelpAndSupport";
import CommunicationLog from "./pages/CommunicationLog";
import SignIn from "./pages/Accounts/SignIn";
import SignUp from "./pages/Accounts/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/CustomerData" element={<CustomerData />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
        <Route path="/CommunicationLog" element={<CommunicationLog />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
