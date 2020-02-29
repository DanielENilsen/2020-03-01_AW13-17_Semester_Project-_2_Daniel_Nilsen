let winner = localStorage.getItem("Winner");
let displayWinner = document.getElementById('display');
let winnertext =document.getElementById('winnertext');
let disBtn = document.getElementById('disbnt');



function DisplayWinner() {
    winnertext.innerHTML += "<h1 class = 'winner'> and the winner is.....</h1>"   
    
    setTimeout(function() { 
        
        displayWinner.innerHTML += "<div class ='winnertext'>"+ winner +"</div>";        
        console.log("Hello");
    },3500);
    setTimeout(function() {
        disBtn.style.display = "block";
        

    },4500)
    
  
    
}

if(winner == null || winner == undefined) {  
   displayWinner.innerHTML += "<h1 class ='error'>There Was an error, please go back and play again </h1>";

} else {
    DisplayWinner();

}
