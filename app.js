var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var ring_rock = document.querySelector(".border-rock")
var ring_scissors = document.querySelector(".border-scissors")
var ring_paper = document.querySelector(".border-paper");
var message = document.getElementById("message");
var win_lose = document.getElementById("winlose");
var cpu_play = document.getElementById("cpuplay");
var btn = document.querySelector("button");

var cpu = ["rock", "paper", "scissors"];

btn.addEventListener("click", function(){

    location.reload();
});

var cpu_move = cpu[Math.floor(Math.random() * cpu.length)];





rock.addEventListener("click", function(){

    cpu_play.innerHTML = cpu_move.toUpperCase() + "!";
    // logic for rock
    if(cpu_move == "rock"){
        win_lose.innerHTML = "It's A DRAW!"
        message.innerHTML = "Play Again!"


    } else if (cpu_move == "scissors"){

win_lose.innerHTML = "You Won!"
message.innerHTML = "congrats!"
        ring_rock.classList.add("win");
        
    } else if (cpu_move == "paper"){
        ring_rock.classList.add("lost");
        win_lose.innerHTML = "You LOST :("
        message.innerHTML = "Try Again!"

    } else{

       
        alert("not working")
    }

    //logic for paper




});


paper.addEventListener("click", function(){
    cpu_play.innerHTML = cpu_move.toUpperCase() + "!";

    if(cpu_move == "rock"){
        

        ring_paper.classList.add("win");
        win_lose.innerHTML = "You Won!"
message.innerHTML = "congrats!"
    } else if (cpu_move == "scissors"){
        win_lose.innerHTML = "You LOST :("
        message.innerHTML = "Try Again!"

        ring_paper.classList.add("lost");
    } else if (cpu_move == "paper"){

        win_lose.innerHTML = "It's A DRAW!"
        message.innerHTML = "Play Again!"
    }
});
        


scissors.addEventListener("click", function(){
    cpu_play.innerHTML = cpu_move.toUpperCase() + "!";

    if(cpu_move == "scissors"){
        
        win_lose.innerHTML = "It's A DRAW!"
        message.innerHTML = "Play Again!"
    } else if (cpu_move == "rock"){
        win_lose.innerHTML = "You LOST :("
        message.innerHTML = "Try Again!"
        ring_scissors.classList.add("lost");
    } else if (cpu_move == "paper"){

        win_lose.innerHTML = "You Won!"
        message.innerHTML = "congrats!"
        ring_scissors.classList.add("win");
    }
});


gsap.from(".screen",{
duration: 1,
opacity: 0,
y: 50

})

gsap.from(".title",{
    duration: 1,
    y: -70
})

