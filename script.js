//your JS code here. If required.
let button = document.querySelectorAll("button")
let player = document.querySelectorAll("div>input")
let gridContainer = document.querySelectorAll('#gridContainer')
let buttons = document.getElementById('btnContainer')
let nameContainer = document.getElementById('nameContainer')
let gameGrid = document.getElementById('game-grid')
let message = document.getElementById("message")

var player1 , player2;
let button1 = button[0];

button[0].addEventListener("click",()=>{

    player1 = player[0].value
    player2 = player[1].value

    if(player1&& player2){
        nameContainer.style.display = "none"
        gameGrid.style.display= 'block'
        buttons.style.display = 'flex'
        buttons.style.justifyContent = 'center'

        gameStart();
    }else{
        alert("please enter the both player name to start the game");
    }
})

function gameStart(){
    message.innerText = player1+", You're up"
}

var turn = 0;
var gameOn = true;
var count = 0;

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

one.addEventListener('click', placeYourPick)
two.addEventListener('click', placeYourPick)
three.addEventListener('click', placeYourPick)
four.addEventListener('click', placeYourPick)
five.addEventListener('click', placeYourPick)
six.addEventListener('click', placeYourPick)
seven.addEventListener('click', placeYourPick)
eight.addEventListener('click', placeYourPick)
nine.addEventListener('click', placeYourPick)

function placeYourPick(event){
    if(count != 9 && gameOn){
        let playerMark = 'O'
        if(turn == 0){
            playerMark = 'X'
        }
        event.srcElement.innerText = playerMark;
        count++;

        let won = checkWinner();
        if(won){
            gameOn = false;
            if(turn){
                message.innerText = player2+" Congragulations you won!";
            }
            else{
                message.innerText = player1+" Congragulations you won!";
            }
        }else{
            if(turn){
                message.innerText = player1+", you're up"
            }
            else{
                message.innerText = player2+", you're up"
            }
        }
        if(turn){
            turn = 0;
        }
        else{
            turn++;
        }
    }
    else{
        message.innerText = "Game Completed, Click on restart for a new game"
    }
}

function checkWinner(){
    if(one.innerText=='X'&& two.innerText=='X'&& three.innerText=='X'){
        return true;
    }
    if(four.innerText=='X'&& five.innerText=='X'&& six.innerText=='X'){
        return true;
    }
    if(seven.innerText=='X'&& eight.innerText=='X'&& nine.innerText=='X'){
        return true;
    }
    if(one.innerText=='X'&& four.innerText=='X'&& seven.innerText=='X'){
        return true;
    }
    if(two.innerText=='X'&& five.innerText=='X'&& eight.innerText=='X'){
        return true;
    }
    if(three.innerText=='X'&& six.innerText=='X'&& nine.innerText=='X'){
        return true;
    }
    if(one.innerText=='X'&& five.innerText=='X'&& nine.innerText=='X'){
        return true;
    }
    if(three.innerText=='X'&& five.innerText=='X'&& seven.innerText=='X'){
        return true;
    }

    if(one.innerText=='O'&& two.innerText=='O'&& three.innerText=='O'){
        return true;
    }
    if(four.innerText=='O'&& five.innerText=='O'&& six.innerText=='O'){
        return true;
    }
    if(seven.innerText=='O'&& eight.innerText=='O'&& nine.innerText=='O'){
        return true;
    }
    if(one.innerText=='O'&& four.innerText=='O'&& seven.innerText=='O'){
        return true;
    }
    if(two.innerText=='O'&& five.innerText=='O'&& eight.innerText=='O'){
        return true;
    }
    if(three.innerText=='O'&& six.innerText=='O'&& nine.innerText=='O'){
        return true;
    }
    if(one.innerText=='O'&& five.innerText=='O'&& nine.innerText=='O'){
        return true;
    }
    if(three.innerText=='O'&& five.innerText=='O'&& seven.innerText=='O'){
        return true;
    }
    return false;
}

button[1].addEventListener('click', clearBoard)
button[2].addEventListener('click', restartGame)

function clearBoard(){
    count = 0;
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
    turn = 0;
    gameOn = true;
}

function restartGame(){
    nameContainer.style.display = 'grid'
    gameGrid.style.display = 'none'
    buttons.style.display = 'none'
    
    clearBoard();
}