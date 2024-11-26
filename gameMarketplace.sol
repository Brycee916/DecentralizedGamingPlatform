// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GameMarketplace {
    
    // Struct to store game details
    struct Game {
        string name;        // Name of the game
        uint price;         // Price in wei
        address creator;    // Creator of the game
        address owner;      // Current owner of the game
    }
    
    // Mapping to store games by unique ID
    mapping(uint => Game) public games;

    // Event to log game registration
    event GameRegistered(uint gameId, string name, uint price, address creator);
    
    // Event to log game purchase
    event GamePurchased(uint gameId, address newOwner);
    
    // Event to log game transfer
    event GameTransferred(uint gameId, address from, address to);

    // Counter to generate unique game IDs
    uint public gameCounter = 0;

    // Function to register a new game on the marketplace
    function registerGame(string memory _name, uint _price) public {
        require(bytes(_name).length > 0, "Game name is required");
        require(_price > 0, "Price must be greater than 0");

        // Create a unique game ID using the counter
        uint gameId = gameCounter;
        gameCounter++;

        // Store the game in the mapping
        games[gameId] = Game({
            name: _name,
            price: _price,
            creator: msg.sender,
            owner: msg.sender
        });

        // Emit an event for the registration
        emit GameRegistered(gameId, _name, _price, msg.sender);
    }

    // Function to purchase a game from the marketplace
    function purchaseGame(uint _gameId) public payable {
        // Retrieve the game from the mapping
        Game storage game = games[_gameId];

        // Ensure the game exists and that the buyer sends the correct price
        require(msg.value == game.price, "Incorrect payment amount");
        require(game.owner != address(0), "Game does not exist");
        require(game.owner != msg.sender, "Cannot purchase your own game");

        // Transfer the payment to the current owner
        payable(game.owner).transfer(msg.value);

        // Update the game’s owner to the buyer
        game.owner = msg.sender;

        // Emit an event for the purchase
        emit GamePurchased(_gameId, msg.sender);
    }

    // Function to transfer a game to another user
    function transferGame(uint _gameId, address _newOwner) public {
        // Ensure the new owner address is valid
        require(_newOwner != address(0), "Invalid address");

        // Retrieve the game from the mapping
        Game storage game = games[_gameId];

        // Ensure that the sender is the current owner
        require(game.owner == msg.sender, "You are not the owner of this game");

        // Transfer the game to the new owner
        game.owner = _newOwner;

        // Emit an event for the transfer
        emit GameTransferred(_gameId, msg.sender, _newOwner);
    }
}
