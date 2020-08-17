function createChessBoard() {
    var chessBoard = document.getElementById("board");
    for (let i = 0; i < 9; i++) {
        createRow (chessBoard, i);
    }
 }
 window.onload = createChessBoard;

 function createRow (chessBoard, x) {
    var rowContainer = document.createElement("div");
    rowContainer.classList.add("rowWrap");
    chessBoard.appendChild(rowContainer);

    for (let i = 0; i < 9; i++) {
        var chessBoardCell = document.createElement("div");
        rowContainer.appendChild(chessBoardCell);
        chessBoardCell.classList.add("cell");
        if ((i+x)%2==1 && i!=8 && x!=8) {
            chessBoardCell.classList.add("color"); 
        }

        if (i==8 && x!=8) {
            chessBoardCell.innerHTML = x+1;
        }

        if (x==8 && i!=8) {
            chessBoardCell.innerHTML = String.fromCharCode('a'.charCodeAt(0) + i);
        }

        if((x ==0 || x == 7) && i!=8) {
            chessBoardCell.innerHTML = chessFigures[i];
        }

        if((x ==1 || x == 6) && i!=8) {
            chessBoardCell.innerHTML = 'Пешка';
        }
    }
}

var chessFigures = [
    "Ладья",
    "Конь",
    "Офицер",
    "Король",
    "Королева",
    "Офицер",
    "Конь",
    "Ладья",
]

