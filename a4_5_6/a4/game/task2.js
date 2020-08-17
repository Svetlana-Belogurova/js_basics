var gameBoard = {
    cells : [],
    startCoords: {
        x: 0,
        y: 0,
        direction: "Up"
    }
}

var player = {
    coords: {
        x: 0,
        y: 0,
        direction: "Up",
    },
    state: {
        haveKey: false,
        exitFound: false,
    }
}

var playerHistory = new Array();

var BOARD = ["==========",
             "=        =",
             "=        =",
             "=        =",
             "=        =",
             "=     E  =",
             "=        =",
             "=        =",
             "=   K    =",
             "=========="];
var STARTPOSITION = {
    x: 1,
    y: 8,
    direction: "Right"
}

function initBoard(board, startPosition) {
    gameBoard.cells = [];
    for (var i = 0; i<board.length; i++) {
        gameBoard.cells[i] = [];
        for (var j = 0; j<board[i].length; j++) {
            switch (board[i][j]) {
                case "K" :
                    gameBoard.cells[i][j] = { type: "Key" };
                    break;
                case "E" :
                    gameBoard.cells[i][j] = { type: "Exit" };
                    break;
                case " " :
                    gameBoard.cells[i][j] = { type: "Empty" };
                    break;
                default:
                    gameBoard.cells[i][j] = { type: "Wall" };
            }
        }
    }
    gameBoard.startCoords.x = startPosition.x;
    gameBoard.startCoords.y = startPosition.y;
    gameBoard.startCoords.direction = startPosition.direction;
}

function initPlayer(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    player.coords.direction = board.startCoords.direction;
    player.state.haveKey = false;
    player.state.exitFound = false;
}

function renderBoard(board) {
    for (var i = 0; i<board.cells.length; i++) {
        var line = "";
        for (var j = 0; j<board.cells[i].length; j++) {
            if (i == player.coords.y &&
                j == player.coords.x) {
                line += "@";
            } else {
                switch (board.cells[i][j].type) {
                    case "Key":
                        line += "K";
                        break;
                    case "Exit":
                        line += "E";
                        break;
                    case "Wall":
                        line += "=";
                        break;
                    case "Empty":
                        line += " ";
                        break;
                }
            }
        }
        console.log(i + " : " + line);
    }
}

function getNewCoords(player) {
    var result = {
        x: player.coords.x,
        y: player.coords.y,
    }

    switch (player.coords.direction) {
        case "Up": 
            result.y--;
            break;
        case "Down": 
            result.y++;
            break;
        case "Left": 
            result.x--;
            break;
        case "Right": 
            result.x++;
            break;
    }

    return result;
}

function canMove(player, board) {
    var result = true;
    
    switch (player.coords.direction) {
        case "Up" : if (player.coords.y == 0 ||
                    board.cells[player.coords.y-1][player.coords.x].type == "Wall") {
                        result = false;
                    };
                break;
        case "Down" : if (player.coords.y == board.cells.length-1 ||
                     board.cells[player.coords.y+1][player.coords.x].type == "Wall") {
                        result = false;
                    };
                break;
        case "Right" : if (player.coords.x == board.cells[player.coords.y].length-1 ||
                    board.cells[player.coords.y][player.coords.x+1].type == "Wall") {
                       result = false;
                   };
               break;
        case "Left" :  if (player.coords.x == 0 ||
            board.cells[player.coords.y][player.coords.x-1].type == "Wall") {
               result = false;
           };
       break;
    }

    return result;
}

function movePlayer(player, board) {
    if (!canMove(player, board)) {
        alert("Вы не можете двигаться в данном направлении!");
        return false;
    }
    
    var newCoords = getNewCoords(player);
    
    switch (board.cells[newCoords.y][newCoords.x].type) {
        case "Key":
            player.state.haveKey = true;
            alert("Вы нашли ключ! Ищите выход!");
            break;
        case "Exit":
            if (player.state.haveKey) {
                alert("Вы выиграли!");
                player.state.exitFound = true;
            } else {
                alert("Вы нашли выход, но у вас нет ключа!");
            };
            break;                
    }

    player.coords.x = newCoords.x;
    player.coords.y = newCoords.y;

    return true;
}

initBoard(BOARD, STARTPOSITION);
initPlayer(gameBoard);

var leftDirection = {
    Up: "Left",
    Down: "Right",
    Left: "Down",
    Right: "Up",
}

var rightDirection = {
    Up: "Right",
    Down: "Left",
    Left: "Up",
    Right: "Down",
}

function getPlayerMove(number) {
    if (playerHistory.length < number) {
        console.log("Такой ход еще не сделан");
        return {};        
    }

    return playerHistory[number - 1];
}

while (!player.state.exitFound) {
    renderBoard(gameBoard);
    console.log(JSON.stringify(player));
    var command = prompt("Введите команду (Go/Left/Right/Show_*/Exit):");


    if(command.startsWith("Show_")) {
        var number = command.split("_")[1];
        
        alert(JSON.stringify(getPlayerMove(number)));
    
        continue;
    }

    switch (command) {
        case "Go": 
            var oldCoordX = player.coords.x;
            var oldCoordY = player.coords.y;
            if(movePlayer(player, gameBoard)) {
                playerHistory.push({type: "Movement", from: {x: oldCoordX, y: oldCoordY}, to: {x : player.coords.x, y: player.coords.y}});
            } else {
                playerHistory.push({type: "Failer Movement", from: {x: oldCoordX, y: oldCoordY}, to: {x : player.coords.x, y: player.coords.y}});
            };
            break;
        case "Left":
            var oldDirection = player.coords.direction;
            player.coords.direction = leftDirection[player.coords.direction];
            playerHistory.push({type: "Change direction", from: oldDirection, to: player.coords.direction});
            break;
        case "Right":
            var oldDirection = player.coords.direction;
            player.coords.direction = rightDirection[player.coords.direction];
            playerHistory.push({type: "Change direction", from: oldDirection, to: player.coords.direction});
            break;
        case "Exit":
            player.state.exitFound = true;
            break;
        default:
            alert("Неизвестная команда!");
    }
}

alert("Игра окончена");