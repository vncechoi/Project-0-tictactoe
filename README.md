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

## Sample Image of Game
![image of sample](/images/Sample%20Image.png "Sample Image")

## MVP codes that I found really helpful

* Making the [grid](#javascript) using nth-child
* Feature for the [color](#javascript) of the grid to change 
* for of loop [condition](#javascript) of the winning combination

## Issues

Font family from local library, didn't figure out how to make it work. Gave up honestly halfway need to find out how that works. Since even if i did make it work how would other consumers view it? Would it still display the specific font family?

```javascript
@font-face {
    font-family: "Game Of Squids";
    src: url("font/game_of_squids/Game Of Squids.ttf") format ('truetype');
}
```

Time-management was an issue as i spent most of my time tinkering around with new ways instead of hard coding my way at times. I need to be able to not only take shortcuts but also try things on my own instead sourcing methods.

## Additional

Favourite Part
The making of things from scratch although challenging was really nice to spend time just grinding out something of your own ideas and executing with different kinds of resources.

Additions
I would like to add the features i couldn't add like the player scoreboard and character selections. Time management of realistic stamp points and also being able to really just go at it instead of tinkering around too much would have been helpful and better use of my time.

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
* __nth-child__ - used in this case for every 3rd grid remove the borders on the right & for every grid after the 6th grid remove the bottom border
```javascript
.grid:nth-child(3n) {
    border-right: none;
}
.grid:nth-child(6) ~ .grid {
    border-bottom: none;
} 
```
## Installation and Running of the Game

1. On the github page navigate to the Code (green) button
2. Click and copy the URL of the repository
  * To clone using the link
3. Open Terminal
4. Type git clone to the location in directory you want 
5. Press enter to create your local game!
6. Open the file in browser and play~

## Credits

* Christopher Hendrickson's Project
(https://christopherhendrickson.github.io/tic-tac-toe/)

* Build Tic Tac Toe with Javascript - Tutorial
(https://www.youtube.com/watch?v=Y-GkMjUZsmM&t=740s)

* Create a simple tic tace toe game using HTML CSS JavaScript
(https://www.youtube.com/watch?v=B3pmT7Cpi24&t=21s)

* Stack Overflow, w3school, Mdn web docs

* Coffee and Energy Drinks!
