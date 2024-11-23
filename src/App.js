import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import DeveloperHome from "./pages/DeveloperHome";
import WalletIntegration from "./pages/WalletIntegration";
import Profile from "./pages/Profile";
import TransactionHistory from "./pages/TransactionHistory";

const App = () => {
  // Sample data for TransactionHistory
  const transactions = [
    {
      title: "Space Invaders",
      price: "0.05",
      date: "2024-11-15T10:30:00Z",
      walletAddress: "0x1234567890abcdef...",
    },
    {
      title: "Alien Adventure",
      price: "0.08",
      date: "2024-11-16T14:45:00Z",
      walletAddress: "0xabcdef1234567890...",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/developer/home" element={<DeveloperHome />} />
        <Route path="/user/wallet" element={<WalletIntegration />} />
        <Route path="/user/profile" element={<Profile userType="user" walletAddress="0x123..." games={[]} />} />
        <Route path="/user/transaction-history" element={<TransactionHistory transactions={transactions} userType="user" />} />
      </Routes>
    </Router>
  );
};

export default App;

