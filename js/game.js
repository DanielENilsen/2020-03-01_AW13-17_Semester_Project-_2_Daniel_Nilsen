
var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');
var traps = [8,13,30,21,28,35];
var stand = 1;
var stand2 = 1;
var dice = document.getElementById('dice');
dice.innerHTML = "rolldice";
for(var i = 13; i>0;i--)  { 
    bord3.innerHTML += "<div  id = "+[i]+" class = 'brick'></div>";
}
for(var c = 14;c <= 28; c++) { 
    bord2.innerHTML += "<div id = "+[c]+" class = 'brick briks2'></div>";
}
for(var c = 29;c <= 40; c++) { 
    bord.innerHTML += "<div id = "+[c]+" class = 'brick brick3'></div>";
}
traps.forEach(element => {
    document.getElementById(element).style.background = "red";    
});


dice.addEventListener("click",function() { 
    var randomNumber = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    dice.innerHTML=randomNumber;
    
    document.getElementById(stand).innerHTML = "";
    document.getElementById(stand2).innerHTML = "";

    stand+=randomNumber;
    stand2+=randomNumber2;

    console.log(`Player One are on squere ${stand}`);
    console.log(`Player two are on squere ${stand2}`);
    console.log("");

    if(stand < 40) {        
        document.getElementById(stand).innerHTML = "<img  src='../img/Untitled-1.png'></img>";        
      
    } else {
        document.getElementById('bord').style.display = "none";
    }

    if (stand2 < 40) {       
         document.getElementById(stand2).innerHTML = "<img src='../playerIcon/player_icon_two.png'></img>";
    } else {
    document.getElementById('bord').style.display = "none";
    } 
    
});




