import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component

const UserHome = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      const gameList = [
        {
            id: 1,
            title: "Grand Theft Auto VI",
            price: "0.1 ETH",
            description: "Coming Next Year",
            image: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg",
        },
        {
            id: 2,
            title: "Grand Theft Auto V",
            price: "0.2 ETH",
            description: "A thrilling Game experience.",
            image: "https://wallpapers.com/images/featured/gta-5-qpjtjdxwbwrk4gyj.jpg",
        },
        {
            id: 3,
            title: "Call of Duty: Black Ops 6",
            price: "0.1 ETH",
            description: "Newest Call of Duty",
            image: "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blackops6/meta/BO6_LP-meta_image.jpg",
        },
        {
            id: 4,
            title: "Fortnite",
            price: "0.2 ETH",
            description: "Crank 90's, double pump",
            image: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
        },
        {
            id: 5,
            title: "Super Smash Bros",
            price: "0.2 ETH",
            description: "Mario, Luigi",
            image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9",
        },
        {
            id: 6,
            title: "Minecraft",
            price: "0.2 ETH",
            description: "Chemistry 101",
            image: "https://i.pinimg.com/originals/2f/2f/77/2f2f77db59300fc7f48c6ad650790192.jpg",
        },        {
            id: 7,
            title: "Fallout 4",
            price: "0.1 ETH",
            description: "Fallout 4 is a 2015 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks.",
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2502/rB3GRFvdPmaALiGt89ysflQ4.jpg",
        },
        {
            id: 8,
            title: "Red Dead Redemption 2",
            price: "0.2 ETH",
            description: "Cowboy",
            image: "https://assets.xboxservices.com/assets/f2/09/f2093a9f-81ef-4ddd-9128-7e409ab3e6ad.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg",
        },  
      ];
      setGames(gameList);
    };
    fetchGames();
  }, []);

  const handlePurchase = (gameId) => {
    console.log("Purchasing game with ID:", gameId);
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
    searchBar: {
      width: "60%",
      padding: "10px",
      margin: "80px 0 20px 0",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "16px",
    },
    gameList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "15px", 
        justifyContent: "center", 
        width: "100%",
        maxWidth: "1000px", 
    },
    gameCard: {
      backgroundColor: "#ffffff",
      width: "250px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      textAlign: "center",
      padding: "10px",
    },
    gameImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    gameTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    gameDescription: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "10px",
    },
    gamePrice: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    purchaseButton: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <Navbar /> 
      <input
        style={styles.searchBar}
        type="text"
        placeholder="Search games..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div style={styles.gameList}>
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <div key={game.id} style={styles.gameCard}>
              <img
                src={game.image}
                alt={game.title}
                style={styles.gameImage}
              />
              <h2 style={styles.gameTitle}>{game.title}</h2>
              <p style={styles.gameDescription}>{game.description}</p>
              <p style={styles.gamePrice}>{game.price}</p>
              <button
                style={styles.purchaseButton}
                onClick={() => handlePurchase(game.id)}
              >
                Purchase
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserHome;
