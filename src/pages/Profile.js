import React from "react";
import Navbar from "../components/Navbar";

const Profile = ({ userType, walletAddress, games }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f9",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    walletInfo: {
      fontSize: "16px",
      marginBottom: "10px",
      color: "#007bff",
    },
    gamesContainer: {
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "80%",
    },
    gameTile: {
      borderBottom: "1px solid #ddd",
      padding: "10px 0",
    },
    gameTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    gameDescription: {
      fontSize: "14px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
        <Navbar />
      <h1 style={styles.header}>
        {userType === "developer" ? "Developer Profile" : "User Profile"}
      </h1>
      <p style={styles.walletInfo}>Wallet Address: {walletAddress}</p>
      <div style={styles.gamesContainer}>
        <h2>Your {userType === "developer" ? "Posted Games" : "Purchased Games"}</h2>
        {games && games.length > 0 ? (
          games.map((game, index) => (
            <div key={index} style={styles.gameTile}>
              <p style={styles.gameTitle}>{game.title}</p>
              <p style={styles.gameDescription}>{game.description}</p>
            </div>
          ))
        ) : (
          <p>No games available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;