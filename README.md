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

* 
```javascript
let spaces = Array(9).fill(null)
```
```javascript
function gridClicked(e) {
    const id = e.target.id
     if(!spaces[id] && count_plays < 9){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
         if(playerWon() !== false){
            playerText.innerHTML = `${currentPlayer} has survived!`
            let winning_blocks = playerWon()
            count_plays = 10
            winning_blocks.map( grid => grids[grid].style.backgroundColor=winnerIndicator)
        return
        }
        count_plays++
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT: X_TEXT
    }

    if(count_plays === 9) {
        playerText.innerHTML = "Phew dodged that one!"
        grids.forEach(grid => grid.style.color = drawIndicator)
    }
}
```


Paragraph lorem [impusm dolor](https://ga.co) sit amet sonse

Line breaks needed!

If you want `code` or `terminal command`

```javascript
for (let block of blocks) {
    asdasdasdsa
}
```
---

## Heading 2
### Heading 3

- List item 1
- List item 2
- List item 3

1. Item 1
2. Item 2 
3. Item 3

Embed Images
![alt](src)

