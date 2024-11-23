import React, { useState } from "react";

const DeveloperHome = () => {
  const [game, setGame] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Game Posted:", game);
    // Implement logic to interact with the blockchain or backend here
    setGame({ title: "", price: "", description: "", image: "" });
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "400px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "16px",
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
      <h1 style={styles.header}>Developer Home</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="Game Title"
          value={game.title}
          onChange={handleInputChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="price"
          placeholder="Price (in ETH)"
          value={game.price}
          onChange={handleInputChange}
          required
        />
        <textarea
          style={styles.input}
          name="description"
          placeholder="Game Description"
          value={game.description}
          onChange={handleInputChange}
          rows="4"
          required
        />
        <input
          style={styles.input}
          type="text"
          name="image"
          placeholder="Image URL"
          value={game.image}
          onChange={handleInputChange}
          required
        />
        <button
          style={styles.button}
          type="submit"
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Post Game
        </button>
      </form>
    </div>
  );
};

export default DeveloperHome;