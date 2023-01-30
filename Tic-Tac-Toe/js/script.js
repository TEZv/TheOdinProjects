const gameBoard = (function () {
  const gameElement = document.querySelector(".game");
  const tileElements = gameElement.querySelectorAll(".tile");
  const gameBoard = [];
  tileElements.forEach((tile) => {
    gameBoard.push(Tile(tile));
  });
  const lanes = [
    Lane(0, 1, 2),
    Lane(3, 4, 5),
    Lane(6, 7, 8),
    Lane(0, 4, 8),
    Lane(2, 4, 6),
    Lane(0, 3, 6),
    Lane(1, 4, 7),
    Lane(2, 5, 8),
  ];

  function Tile(tileElement) {
    return {
      id: tileElement.getAttribute("data-tile-id"),
      content: tileElement.textContent,
      value: 0,
      highlighted: false,
    };
  }

  function Lane(first, second, third) {
    return {
      first,
      second,
      third,
    };
  }

  function updateBoard() {
    gameBoard.forEach((tile) => {
      const currentTile = gameElement.querySelector(
        `[data-tile-id='${tile.id}']`
      );
      currentTile.textContent = tile.content;
      if (tile.highlighted) {
        currentTile.classList.add("highlighted");
      } else {
        currentTile.classList.remove("highlighted");
      }
    });
  }
  updateBoard();

  function checkAvailability(id) {
    if (gameBoard[id].content === "") {
      return true;
    } else {
      return false;
    }
  }

  function getAvailableTiles() {
    const availableTiles = [];
    gameBoard.forEach((tile) => {
      if (tile.content === "") {
        availableTiles.push(tile.id);
      }
    });
    return availableTiles;
  }

  function changeTile(id, newContent) {
    const available = checkAvailability(id);
    if (!available) {
      return;
    }
    gameBoard[id].content = newContent;
    updateBoard();
  }

  function highlightLane(lane) {
    gameBoard[lane.first].highlighted = true;
    gameBoard[lane.second].highlighted = true;
    gameBoard[lane.third].highlighted = true;

    updateBoard();
  }

  function getWinningLanes() {
    const winningLanes = [];
    lanes.forEach((lane) => {
      if (
        gameBoard[lane.first].content &&
        gameBoard[lane.second].content &&
        gameBoard[lane.third].content
      ) {
        if (
          gameBoard[lane.first].content === gameBoard[lane.second].content &&
          gameBoard[lane.second].content === gameBoard[lane.third].content
        ) {
          winningLanes.push({
            lane,
            symbol: gameBoard[lane.first].content,
          });
        }
      }
    });
    return winningLanes;
  }

  function getWinnableLanes(symbol) {
    const winnableLanes = [];
    lanes.forEach((lane) => {
      let emptyTiles = 0;
      let correctTiles = 0;
      let emptyTile;
      if (gameBoard[lane.first].content === symbol) {
        correctTiles++;
      } else if (gameBoard[lane.first].content === "") {
        emptyTiles++;
        emptyTile = gameBoard[lane.first].id;
      }
      if (gameBoard[lane.second].content === symbol) {
        correctTiles++;
      } else if (gameBoard[lane.second].content === "") {
        emptyTiles++;
        emptyTile = gameBoard[lane.second].id;
      }
      if (gameBoard[lane.third].content === symbol) {
        correctTiles++;
      } else if (gameBoard[lane.third].content === "") {
        emptyTiles++;
        emptyTile = gameBoard[lane.third].id;
      }

      if (correctTiles === 2 && emptyTiles === 1) {
        winnableLanes.push({ lane, emptyTile });
      }
    });
    return winnableLanes;
  }

  function setTileValues(enemySymbol) {
    lanes.forEach((lane) => {
      if (gameBoard[lane.first].content === enemySymbol) {
        return;
      } else if (gameBoard[lane.second].content === enemySymbol) {
        return;
      } else if (gameBoard[lane.third].content === enemySymbol) {
        return;
      }
      gameBoard[lane.first].value++;
      gameBoard[lane.second].value++;
      gameBoard[lane.third].value++;
    });
  }

  function getBestMove() {
    let biggestValue = 0;
    const bestMoveIds = [];
    gameBoard.forEach((tile) => {
      if (tile.value > biggestValue) {
        biggestValue = tile.value;
      }
    });
    gameBoard.forEach((tile) => {
      if (tile.value === biggestValue) {
        bestMoveIds.push(tile.id);
      }
    });
    const bestMove =
      bestMoveIds[Math.floor(Math.random() * bestMoveIds.length)];
    return bestMove;
  }

  function checkForTie() {
    const freeSpace = gameBoard.find((element) => element.content === "");
    if (freeSpace) {
      return false;
    } else {
      return true;
    }
  }

  function resetGameBoard() {
    gameBoard.forEach((tile) => {
      tile.content = "";
      tile.highlighted = false;
      tile.value = 0;
    });
    updateBoard();
  }

  function resetTileValues() {
    gameBoard.forEach((tile) => {
      tile.value = 0;
    });
  }

  return {
    tileElements,
    changeTile,
    getWinningLanes,
    getWinnableLanes,
    checkForTie,
    resetGameBoard,
    resetTileValues,
    setTileValues,
    getAvailableTiles,
    getBestMove,
    highlightLane,
  };
})();

const inputControl = (function () {
  const form = document.querySelector(".game-form");
  const startButton = document.querySelector(".start-btn");
  form.addEventListener("submit", startGame);

  function startGame(e) {
    e.preventDefault();
    startButton.textContent = "Restart";
    document.querySelector(".output").textContent = "";
    const data = new FormData(form);
    const playerName = data.get("player-name");
    const playerSymbol = data.get("player-symbol");
    const difficulty = data.get("difficulty");
    gameFlow.createPlayers(playerName, playerSymbol);
    gameFlow.setDifficulty(difficulty);
    addGameEvents();

    if (gameFlow.checkForComputerTurn()) {
      gameFlow.makeComputerMove();
    }
  }

  function addGameEvents() {
    gameBoard.tileElements.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
    form.removeEventListener("submit", startGame);
    startButton.toggleAttribute("disabled");
    gameBoard.resetGameBoard();
  }

  function handleClick(e) {
    if (gameFlow.checkForComputerTurn()) {
      return;
    }
    const tileId = e.target.getAttribute("data-tile-id");
    gameBoard.changeTile(tileId, gameFlow.getCurrentSymbol());
    gameFlow.changeTurn();
  }

  function removeGameEvents() {
    gameBoard.tileElements.forEach((element) => {
      element.removeEventListener("click", handleClick);
    });
    form.addEventListener("submit", startGame);
    startButton.toggleAttribute("disabled");
  }

  return { addGameEvents, removeGameEvents };
})();
