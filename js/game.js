
class player { 
    constructor(name,brick,img) { 
        this.name = name;
        this.brick = brick;  
        this.img = img;    
    }
}

var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');
var traps = [8,13,30,21,28,35];
var stand =  new player("PlayerOne",1,"<img src='../img/Untitled-1.png'>");
var stand2 = new player("Playertwo",1,"<img src='../img/Untitled-1.png'>");
var dice = document.getElementById('dice');
dice.innerHTML = "rolldice";
let PlayDice = true;

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

function game () { 
    let PlayDice = true;
    let randomNumber = Math.floor(Math.random()*6)+1;
    let randomNumber2 = Math.floor(Math.random()*6)+1;
    
    dice.innerHTML=randomNumber;    
    document.getElementById(stand.brick).innerHTML = "";
    document.getElementById(stand2.brick).innerHTML = "";
    stand.brick+=randomNumber;
    stand2.brick+=randomNumber2;    
       

    if(PlayDice == false) { 
        dice.removeEventListener("click",playerMove);       
    
        
    
    }
  

  function playerMove() {
      if(stand.brick == 8) {
        var local = false;
        window.local = local;                    
    }

    if(stand2.brick == 8) { 
        PlayDice = false;
         
    }  
    
    
    if(stand.brick < 40) {        
        document.getElementById(stand.brick).innerHTML = stand.img;    
              
    } else {
        document.getElementById('bord').style.display = "none";
    }
    if (stand2.brick < 40) {       
         document.getElementById(stand2.brick).innerHTML = stand2.img;
    } else {
         document.getElementById('bord').style.display = "none";
    } 
}
   


}

