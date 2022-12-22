// Identifying the grids and the buttons! Array.from creates an array of the elements
const playerText = document.querySelector('#playerText')
const restartBtn = document.querySelector('#restartBtn')
const grids = Array.from(document.querySelectorAll('.grid'))
// console.log(grids) Array.from converst html elements into an array

// let's us use the CSS style!
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
let drawIndicator = getComputedStyle(document.body).getPropertyValue('--drawing-blocks')

// Identifying the O and X of the game
const O_TEXT = "◯" 
const X_TEXT = "△"

// Starting player will start with X
let currentPlayer = X_TEXT

// Allows after selection of a grid to be filled to not be chosen again!
let spaces = Array(9).fill(null)
let count_plays = 0
// console.log(spaces) fill the 9 grids with null spaces (empty)

// (Arrow function) When game starts, loop over the grids from line 4 for clicking the grid
const startGame = () => {
    grids.forEach(grid => grid.addEventListener('click', gridClicked))
}
// Allows us to identify the grid we have clicked
// Event in this case is the entire DOM element of the grid^
function gridClicked(event) {
    const id = event.target.id

// If spaces of the 9 grid is not filled with this id ^, fill the space with something
    if(!spaces[id] && count_plays < 9){
        spaces[id] = currentPlayer
        event.target.innerText = currentPlayer
// If a player has won, playerText wil state who has won
// Not equal to false which means a winning combination has been made, thus 
        if(playerWon() !== false){
            playerText.innerHTML = `${currentPlayer} has survived!`
            let winning_blocks = playerWon()
// Highlights the grids of the winning combination
// 
            count_plays = 10
            winning_blocks.map( grid => grids[grid].style.backgroundColor=winnerIndicator)
            return
            // console.log(winning_blocks)
        }
// If currentPlayer is equal to X then change to O text or else X text, and save the either respective text
        count_plays++
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT: X_TEXT
    }

    if(count_plays === 9) {
        playerText.innerHTML = "Phew dodged that one!"
        grids.forEach(grid => grid.style.color = drawIndicator)
    }
}
// Identify all the winning combinations and possible user inputs 
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// Looping for..of that winning combination, [a,b,c] can be any combination and save it 
function playerWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition
// If spaces of either X/O and if it is different don't even check it
// (another condition) If spaces are all the same then pass through
// (another condition) Checks another space if it is same! Thus a winning combination
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            // returning winning combination
            return [a,b,c]
        }
    }
    // No one has won!
    return false
}
// Once restart button is clicked
restartBtn.addEventListener('click', restart)
// Clears out the array and the spaces that were filled and make the array again

function restart() {
    spaces.fill(null)
    count_plays = 0

// Reset the grids to blanks and the background of the grids, additionally the playerText too
    grids.forEach( grid => {
        grid.innerText = ''
        grid.style.backgroundColor=''
        grid.style.color = "#f44786"
    })

    playerText.innerHTML = 'SQUID GAME'
// Default current player
    currentPlayer = X_TEXT
}

startGame ()