class player { 
    constructor(name,brick,img) { 
        this.name = name;
        this.brick = brick;  
        this.img = img;    
    }
}

let btn = document.getElementById('btn');
let textDisplay = document.getElementById('GameOver');
var MagicDice  =document.getElementById('MagicDice');
var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');
var traps = [8,13,30,21,28,35];
var stand =  new player("PlayerOne",1,"<img id ='one' src='../playerIcon/iconOne.png'>");
var stand2 = new player("Playertwo",1,"<img id ='two' src='../playerIcon/player_icon_two.png'>");
let task_one = document.getElementById('taskone');
var dice = document.getElementById ('dice');
var dice2 = document.getElementById('dice2');
var fakedice = document.getElementById('fakedice');
var playerOne = document.querySelector("#one"); 


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

function Game() {    
   
   

    dice2.addEventListener('click',function() {  
        if(stand.brick == stand2.brick) {
            document.getElementById(stand.brick).innerHTML += stand.img;
         } else {
            var playerOne = document.querySelector("#two"); 
            playerOne.parentNode.removeChild(playerOne);  
         }
         
        let randNumb = Math.floor(Math.random()*6)+1;  
      
        stand2.brick +=randNumb;   
        console.log(stand2.brick);
        moveplayer(stand2.brick,stand2.img);
      
        if(stand2.brick == 8 || stand2.brick == 13 || stand2.brick == 21 || stand2.brick == 28 || stand2.brick == 30 || stand2.brick == 35) {
            dice2.style.display = "none";
            dice.style.display = "none";

        } else { 
            dice2.style.display = "none";
            dice.style.display = "block";
        }       
    });

 
    dice.addEventListener('click',function(){ 
        if(stand.brick == stand2.brick) {           
            document.getElementById(stand2.brick).innerHTML += stand2.img;
         } else {
            var playerOne = document.querySelector("#one");
            playerOne.parentNode.removeChild(playerOne);         
 
        }
           
              
        var randNumb = Math.floor(Math.random()*6)+1;  
        stand.brick +=randNumb;   
        console.log(stand.brick);
        moveplayer(stand.brick,stand.img);              
        if(stand.brick == 8 || stand.brick == 13 || stand.brick == 21 || stand.brick == 28 ||  stand.brick == 30 || stand.brick == 35) { 
            dice.style.display = "none";
            dice2.style.display = "none";

        } else {
            console.log("Dice1")
            dice.style.display = "none";
            dice2.style.display = "block";
        }    
    });
    
    function moveplayer(arg1,arg2) {       
  

        if(arg1 == 8) {            
            let text = "Did John snow killed Dragon Lady?";
            let Qurrect = "<button onclick='correct();'>Yes</button>";
            let wrong = "<button onclick='wrong("+arg1+");'>No</button>";            
            text_text(text,Qurrect,wrong);  
            dice.style.display = "none";
            dice2.style.display = "none"; 
                           
        }
       
          
        if(arg1 == 13)  {                
            let text = "Who wrote game of thrones ?";
            let Qurrect = "<button onclick='correct();'>George R. R. Martin</button>";
            let wrong = "<button onclick='wrong("+arg1+");'>No</button>";          
            text_text(text,wrong,Qurrect);   
            dice.style.display = "none";
            dice2.style.display = "none";     
        } 
        if(arg1 == 21)   {          
            let text = "How many seasons are there of Game of Thornes";
            let Qurrect = "<button onclick='correct();'>8</button>";
            let wrong = "<button onclick='wrong("+arg1+");'>No</button>";            
            text_text(text,Qurrect,wrong);
            dice.style.display = "none";
            dice2.style.display = "none";     
        } 

        if(arg1 == 28)   {           
            let text = "How many seasons are there of Game of Thornes";
            let Qurrect = "<button onclick='correct();'>8</button>";
            let wrong = "<button onclick='wrong("+arg1+");'>No</button>";             
            text_text(text,Qurrect,wrong);
            dice.style.display = "none";
            dice2.style.display = "none";            
        }    
        
        if(arg1 == 30)  {            
            let text = "How many seasons are there of Game of Thornes";
            let Qurrect = "<button onclick='correct();'>8</button>";
            let wrong = "<button onclick='wrong("+arg1+");'>No</button>";             
            text_text(text,Qurrect,wrong);
            dice.style.display = "none";
            dice2.style.display = "none";             
        } 
        if(arg1 == 35) {            
            let text = "How many seasons are there of Game of Thornes";
            let Qurrect = "<button onclick='correct();'>8</button>";
            let wrong = "<button onclick='wrong("+arg1+");'>No</button>";             
            text_text(text,Qurrect,wrong);
            dice.style.display = "none";
            dice2.style.display = "none";           
        }
        
        if(arg1 < 40) {
            
            return document.getElementById(arg1).innerHTML = arg2;
        } 
        if(arg1 > 40) { 
            return document.getElementById('bord').style.display = "none";
        }           
    }    
}
Game();

function text_text(arg,arg2,arg3) {  
    textDisplay.innerHTML += arg ;
    textDisplay.innerHTML += arg2;
    textDisplay.innerHTML += arg3;
    dice.style.display = "none";
    dice2.style.display = "none";   
}

function correct() {     
    textDisplay.innerHTML  = "";  
    if(stand.brick == 8 || stand.brick == 13 || stand.brick == 21 || stand.brick == 28 ||  stand.brick == 30 || stand.brick == 35) { 
        dice.style.display = "none";
        dice2.style.display = "block";
    }
    else if(stand2.brick == 8 || stand2.brick == 13 || stand2.brick == 21 || stand2.brick == 28 ||  stand2.brick == 30 || stand2.brick == 35) {
        dice2.style.display = "none";
        dice.style.display = "block";
    }   
}

function wrong(arg) {    
    textDisplay.innerHTML  = ""; 
    sum = (arg -2 );   
   
    if(stand.brick == 8 || stand.brick == 13 || stand.brick == 21 || stand.brick == 28 || stand.brick == 25 || stand.brick == 30 || stand.brick == 35) { 
        document.getElementById(stand.brick).innerHTML = "";
        dice.style.display = "none";
        dice2.style.display = "block";
        stand.brick = sum;
        console.log("test",stand.brick)
       return document.getElementById(stand.brick).innerHTML = stand.img;       
    }
    if(stand2.brick == 8 || stand2.brick == 13 || stand2.brick == 21 || stand2.brick == 28 || stand2.brick == 25 || stand2.brick == 30 || stand2.brick == 35) {
         document.getElementById(stand2.brick).innerHTML = "";   
        dice2.style.display = "none";  
        dice.style.display = "block";
        stand2.brick = sum;
        console.log("test",stand2.brick)
        return document.getElementById(stand2.brick).innerHTML = stand2.img;
    }       
}  


