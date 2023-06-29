// Add event listeners for each box to listen for click.
// Need a way to track turns
// Can't click on a box more than once
// Cange to X or O on x or o turn
// Check for win state
// Refresh game.


// Variable Declarations:

let turn = 0
let winner = null

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

const resetButton = document.getElementById("resetButton");

// Maybe this would be better as a switch?
function checkWinStatus(){
                


    if (turn >=5) {
        if (box1.innerHTML !=="" && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML){
             winner = box1.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner } wins!`);
            console.log(winner);
        }
        if (box4.innerHTML !=="" && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML){
             winner = box4.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner);
        }
        if (box7.innerHTML !=="" && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML){
             winner = box7.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner);
        }
        if (box1.innerHTML !=="" && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML){
             winner = box1.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner); 
        }
        if (box2.innerHTML !=="" && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML){
             winner = box2.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner); 
        }
        if (box3.innerHTML !=="" && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML){
             winner = box3.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner); 
        }
        if (box7.innerHTML !=="" && box7.innerHTML === box5.innerHTML && box5.innerHTML === box3.innerHTML){
             winner = box7.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner); 
        }
        if (box1.innerHTML !=="" && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML){
             winner = box1.innerHTML;
            document.getElementById("turn").innerHTML = (`${winner} wins!`);
            console.log(winner); 

        } else {
            if (turn === 9 && winner === null) {
                document.getElementById("turn").innerHTML = (`Cat's Game!`); 
                } else {
        }  
    } 
}
}

//User input (buttons)
resetButton.addEventListener('click', function() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    turn = 0;
    winner = null;
    document.getElementById("turn").innerHTML = (`Click on a square to begin`)
})

box1.addEventListener('click', function() { 
    if (box1.innerHTML !== "X" && box1.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
})

box2.addEventListener('click', function() { 
    if (box2.innerHTML !== "X" && box2.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box3.addEventListener('click', function() {  
    if (box3.innerHTML !== "X" && box3.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box4.addEventListener('click', function() {   
    if (box4.innerHTML !== "X" && box4.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box5.addEventListener('click', function() {  
    if (box5.innerHTML !== "X" && box5.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box6.addEventListener('click', function() {  
    if (box6.innerHTML !== "X" && box6.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box7.addEventListener('click', function() {   
    if (box7.innerHTML !== "X" && box7.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box8.addEventListener('click', function() {   
    if (box8.innerHTML !== "X" && box8.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)

box9.addEventListener('click', function() {    
    if (box9.innerHTML !== "X" && box9.innerHTML !== "O") {
        if ((turn % 2) == 0) {
            this.innerHTML = "X";
            document.getElementById("turn").innerHTML = (`O's turn`)
        } else {
            this.innerHTML = "O";
            document.getElementById("turn").innerHTML = (`X's turn`)
        }
        turn ++;
        console.log(turn);

        } else {
        console.log('hmm');
        }

    checkWinStatus();
}
)


