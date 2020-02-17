

//bordbriks3 = bordOne
//bordbrikstwo = bordTwo
//bordbriks = boardThree

var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');
var traps = [8,13,30,21,28,35];


var stand = 1;
var stand2 = 1;
var dice = document.getElementById('dice');




for(var i = 13; i>0;i--)  { 

    bord3.innerHTML += "<div  id = "+[i]+" class = 'brick'>"+[i]+"</div>";

}
for(var c = 14;c <= 29; c++) { 

    bord2.innerHTML += "<div id = "+[c]+" class = 'brick briks2'>"+[c]+"</div>";

}
for(var c = 29;c <= 40; c++) { 

    bord.innerHTML += "<div id = "+[c]+" class = 'brick brick3'>"+[c]+"</div>";
}
traps.forEach(element => {
    document.getElementById(element).style.background = "red"
    
});
    

dice.addEventListener("click",function() { 
    var randomNumber = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    
    document.getElementById(stand).innerHTML = stand;
    document.getElementById(stand2).innerHTML = stand2;


    stand+=randomNumber;
    stand2+=randomNumber2;

    console.log(`Player One are on squere ${stand}`)
    console.log(`Player two are on squere ${stand2}`)
    console.log("")

    if(stand < 40) { 
       
        document.getElementById(stand).innerHTML = "<img src='../playerIcon/iconOne.png'></img>";
        
      
    } else {
        alert("Game over Player One ")
    }

    if (stand2 < 40) { 
        document.getElementById(stand2).innerHTML = null;
    document.getElementById(stand2).innerHTML = "<img src='../playerIcon/player_icon_two.png'></img>";
   } else {
    alert("Game over player TWo won")




}
   
    
});



 

   
  










