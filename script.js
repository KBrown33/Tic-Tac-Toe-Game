const board = document.getElementById('board')
// console.log(board)
const shadowGameBoard = [null, null, null, null, null, null, null, null, null]
let myPlayerOne = true;




function theGame(process) {
// console.log(theGame)

// how do i know if the move is a X or O
// how do i know space is free
// can not choose a box if character is already in it
const correctBox= process.target;
const winningCombinations = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
]
if(correctBox.innerText.length <1){
const letter = theCharacters()
const char = document.createTextNode( letter );
correctBox.appendChild(char);
const choosenIndex = parseInt(correctBox.dataset.boxNumber) 
// console.log(choosenIndex)
shadowGameBoard.splice(choosenIndex, 1, letter)

for(let i=0; i < winningCombinations.length; i++) {
    // console.log(winningCombinations[i]);
}
shadowGameBoard.forEach(function (val, ind) {
    // console.log(val, ind)
} )






}
// can not choose a box if the player before you has won game

// console.log(shadowGameBoard)

} 

function theCharacters() {
    if(myPlayerOne) {
        myPlayerOne= false
        return 'X';
    }
    else{
        myPlayerOne=true
        return 'O';
    }
}

board.addEventListener('click', theGame);
// make it where im only able to click one box one time 
// get my code to read my shawdowGameBoard







const champ = document.getElementById('message')