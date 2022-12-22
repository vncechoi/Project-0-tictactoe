# Tic Tac Toe
### Technologies 

This project will be using the following
* Javascript
* HTML
* CSS

## Introduction

Tic Tac Toe is a two-player based game which each player take alternate turns in placing their mark in either a horizontal, vertical or diagonal row. The player who suceeds in placing three of their mark in a row! You can player against one another!

## Project Checkpoints

1. Sketch-up design and collect resources (Didn't figure out how to use figma *sad face*).
 * Selection of images/ colours/ fonts
 * Reference to other MVP projects and online samples
2. Create the bare html/css elements
 * Start off small and simple 
 * Add on details later after Javascript is working
3. Create javascript function such as:
 * Winning prompts a text/color
 * Character selection
 * Score tracker for each character
 * Reset round button
 * Rest game button
 * Audio cues
4. Re-evaluate
 * Time management
 * Realisitic goals and cutting features 
    - Audio cues

## Codes 
### Javascript

* __Array.prototype.fill()__ - in this case we are filling the grids with 9 empty spaces so that the player cannot choose that space again if clicked

```javascript
let spaces = Array(9).fill(null)
```
* __.forEach()__ - method executes a function once for each array element in this case we used it for subset of the array
* __Array.from()__ - method converts objects into a real Array 
```javascript
const grids = Array.from(document.querySelectorAll('.grid'))
```
* __event.target__ - always points to the thing in front of addEventListener in this case the specific grid clicked
```javascript
const startGame = () => {
    grids.forEach(grid => grid.addEventListener('click', gridClicked))
}
function gridClicked(event) {
    const id = event.target.id
```
* __array.prototype.map()__ - creates new array with calling a function in this case the grid style and changing it to another color for the winning combination
```javascript
    winning_blocks.map( grid => grids[grid].style.  backgroundColor=winnerIndicator)
```
* __for...of__ - looping for winning combination which `[a,b,c]` can be any combination and save it 
```javascript
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
```
### CSS

* __:root__ - selects the root element of this document 
```javascript
:root {
    --winning-blocks: #2d414b;
    --drawing-blocks: red;
}
```
*__nth-child__ - used in this case for every 3rd grid remove the borders on the right & for every grid after the 6th grid remove the bottom border
```javascript
.grid:nth-child(3n) {
    border-right: none;
}
.grid:nth-child(6) ~ .grid {
    border-bottom: none;
} 
```
![image of sample](/images/Sample%20Image.png "Sample Image")

