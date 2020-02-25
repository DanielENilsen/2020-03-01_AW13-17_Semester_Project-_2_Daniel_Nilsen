
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
    
    var filterOne = traps.filter(function(number) { 
        if (number == stand) {
            ///return alert(`Player one Trap on ${number}`);
        }     

        traps.forEach(element => {
            document.getElementById(element).style.background = "red"; 
            if(filterOne == element) { 
                console.log(stand);
            }      
        });    
    });  
    
    dice.innerHTML=randomNumber;    
   document.getElementById(stand.brick).innerHTML = "";
   document.getElementById(stand2.brick).innerHTML = "";

    stand.brick+=randomNumber;
    stand2.brick+=randomNumber2;     
    if(stand.brick == 8) { 
        dice.removeEventListener('mousedown');
        
        document.getElementById('gameTasks').innerHTML = "Hello"

                        
    }
    if(stand2.brick == 8) { 
        dice.removeEventListener('mousedown');
       
        document.getElementById('gameTasks').innerHTML = "Hell 2o"
    }   
    
  
    console.log(`Player one are on ${stand.brick}`)
    console.log(`Player two are on ${stand2.brick}`)
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
    
});




