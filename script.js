const board = document.getElementById('board')
// const boxes = document.querySelectorAll('.box')
console.log(board)
// console.log(boxes)
const shadowGameBoard = [null, null, null, null, null, null, null, null, null]
let myPlayerOne = true;




function theGame(process) {
// console.log(theGame)
// how do i know if the move is a X or O
// how do i know space is free
// can not choose a box if character is already in it
const correctBox= process.target;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
]
if(correctBox.innerText.length <1){
    const letter = theCharacters()
    const char = document.createTextNode( letter );
    correctBox.appendChild(char);
    const choosenIndex = parseInt(correctBox.dataset.boxNumber) 
    // console.log(choosenIndex)
    shadowGameBoard.splice(choosenIndex, 1, letter)
}
for(const winningCombo of winningCombinations) {
    const firstWinningSquare = shadowGameBoard[winningCombo[0]];
    const secondWinningSquare = shadowGameBoard[winningCombo[1]];
    const thirdWinningSquare = shadowGameBoard[winningCombo[2]];
    const fourthWinningSquare = shadowGameBoard[winningCombo[3]];
    const fifthWinningSquare = shadowGameBoard[winningCombo[4]];
    const sixWinningSquare = shadowGameBoard[winningCombo[5]];
    const sevenWinningSquare = shadowGameBoard[winningCombo[6]];
    const eightWinningSquare = shadowGameBoard[winningCombo[7]];
    
    
    if(firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {
        console.log('winner')
    }
    if(secondWinningSquare===fifthWinningSquare && secondWinningSquare===eightWinningSquare) {
        console.log('winner')
    }
    if(fourthWinningSquare===fifthWinningSquare && fourthWinningSquare===sixWinningSquare) {
        console.log('winner')
    }
    if(firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {
        console.log('winner')
    }
    if(firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {
        console.log('winner')
    }
    if(firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {
        console.log('winner')
    }
    if(firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {
        console.log('winner')
    }
    if(firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {
        console.log('winner')
    }
    // for(let i = 0; i < winningCombinations.length; i++) {
    //     const winningCombo = winningCombinations[i];
    //     // alert('Winner')

    //     const firstWinningSquare = winningCombo[0];
    //     const secondWinningSquare = winningCombo[1];
    //      const thirdWinningSquare = winningCombo[2];

    //     console.log(winningCombo[0])

    //      if(firstWinningSquare === secondWinningSquare  && firstWinningSquare===thirdWinningSquare) {
    //         alert('someone won')
    //       }

        //  if(firstWinningSquare!=null && firstWinningSquare===secondWinningSquare && firstWinningSquare===thirdWinningSquare) {

        //  }
    }

    // console.log(firstWinningSquare)
    // console.log(secondWinningSquare)
    // console.log(thirdWinningSquare)
    // console.log(winningCombinations[i]);
}



// can not choose a box if the player before you has won game
console.log(shadowGameBoard)

// }    

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
// boxes.forEach(element => element.addEventListener('click', theGame));
// make it where im only able to click one box one time 
// get my code to read my shawdowGameBoard
// const champ = document.getElementById('message')



