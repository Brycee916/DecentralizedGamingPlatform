import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      width: "100%",
      backgroundColor: "#007bff",
      padding: "15px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "1000",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    navbarLogo: {
      fontSize: "24px",
      color: "#fff",
      fontWeight: "bold",
      textDecoration: "none",
      marginLeft: "20px",
    },
    navbarLinks: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      marginRight: "20px",
    },
    navbarLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "8px 15px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
    },
    navbarLinkHover: {
      backgroundColor: "#0056b3",
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.navbar}>
      <Link to="/user/home" style={styles.navbarLogo}>
        Game Marketplace
      </Link>
      <div style={styles.navbarLinks}>
        <Link
          to="/user/home"
          style={styles.navbarLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.navbarLinkHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent")
          }
        >
          Home
        </Link>
        <Link
          to="/user/wallet"
          style={styles.navbarLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.navbarLinkHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent")
          }
        >
          Wallet
        </Link>
        <Link
          to="/user/profile"
          style={styles.navbarLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.navbarLinkHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent")
          }
        >
          Profile
        </Link>
        <Link
          to="/user/transaction-history"
          style={styles.navbarLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.navbarLinkHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent")
          }
        >
          Transaction History
        </Link>
        <Link
          to="/"
          style={styles.navbarLink}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.navbarLinkHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "transparent")
          }
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;