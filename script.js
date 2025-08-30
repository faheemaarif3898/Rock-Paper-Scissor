const choices = document.querySelectorAll(".choice");
let playerScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const reset_btn = document.querySelector("#reset-btn")

let user_score = 0;
let comp_score = 0;

let comp_choice;

let total_choices = ["rock", "paper", "scissor"]; 

let user_win = true;

const getCompChoice = () => {
    let random = Math.floor(Math.random() * 3);
    return total_choices[random];

}

const displayRecord = (user_score, comp_score) => {
    playerScore.innerText = user_score;
    compScore.innerText = comp_score;
}

const displayMessage = (user_score, comp_score, user_choice, comp_choice) => {
    if (user_win) {
        msg.innerText = `You Win : ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        msg.innerText = `You Lose : ${comp_choice} beats ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (user_choice, comp_choice) => {
    if (user_choice === comp_choice) {
        msg.innerText = "Game was a Draw, Play again"
        msg.style.backgroundColor = "rgb(83, 82, 82)"
        return;
    }
    else if (user_choice === "rock") {
        if (comp_choice === "paper") {
            user_win = false;
        }
        else {
            user_win = true;
        }
    }
    else if (user_choice === "scissor") {
        if (comp_choice === "rock") {
            user_win = false;
        }
        else {
            user_win = true;
        }
    }
    else {
        if (comp_choice === "rock") {
            user_win = true;
        }
        else {
            user_win = false;
        }
    }
    user_win ? user_score++ : comp_score++;

    displayRecord(user_score, comp_score);
    displayMessage(user_score, comp_score, user_choice, comp_choice);
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        let comp_choice = getCompChoice();
        playGame(user_choice, comp_choice);
    })
})

reset_btn.addEventListener("click", () => {
    user_score = 0;
    comp_score = 0;
    msg.innerText = "Play your move";
    playerScore.innerText = "0";
    compScore.innerText = "0";
    msg.style.backgroundColor = "black";
})