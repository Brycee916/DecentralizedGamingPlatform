import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === "Developer") {
      navigate("/developer/home");
    } else if (userType === "Gamer") {
      navigate("/user/home");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f9",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "300px",
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333333",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Game Marketplace Login</h1>
        <select
          style={styles.select}
          onChange={(e) => setUserType(e.target.value)}
          value={userType}
        >
          <option value="">Select User Type</option>
          <option value="Gamer">Gamer</option>
          <option value="Developer">Developer</option>
        </select>
        <button
          style={styles.button}
          onClick={handleLogin}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
