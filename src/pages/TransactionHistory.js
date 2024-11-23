import React from "react";
import Navbar from "../components/Navbar";

const TransactionHistory = ({ transactions, userType }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f9f9fc",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    transactionContainer: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      width: "80%",
      maxWidth: "800px",
    },
    transaction: {
      display: "flex",
      flexDirection: "column",
      padding: "15px",
      borderBottom: "1px solid #ddd",
    },
    transactionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#007bff",
    },
    transactionDetails: {
      fontSize: "14px",
      color: "#555",
    },
    noTransactions: {
      textAlign: "center",
      fontSize: "16px",
      color: "#999",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
        <Navbar />
      <h1 style={styles.header}>
        {userType === "developer"
          ? "Developer Transaction History"
          : "User Transaction History"}
      </h1>
      <div style={styles.transactionContainer}>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <div key={index} style={styles.transaction}>
              <p style={styles.transactionTitle}>{transaction.title}</p>
              <p style={styles.transactionDetails}>
                {userType === "developer"
                  ? `Sold for ${transaction.price} ETH`
                  : `Purchased for ${transaction.price} ETH`}
              </p>
              <p style={styles.transactionDetails}>
                Date: {new Date(transaction.date).toLocaleDateString()}
              </p>
              <p style={styles.transactionDetails}>
                Wallet Address: {transaction.walletAddress}
              </p>
            </div>
          ))
        ) : (
          <p style={styles.noTransactions}>No transactions found</p>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;