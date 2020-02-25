
class player { 
    constructor(name,brick,img) { 
        this.name = name;
        this.brick = brick;  
        this.img = img;    
    }
}
let btn = document.getElementById('btn');

var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');
var traps = [8,13,30,21,28,35];
var stand =  new player("PlayerOne",1,"<img src='../img/Untitled-1.png'>");
var stand2 = new player("Playertwo",1,"<img src='../img/Untitled-1.png'>");
let task_one = document.getElementById('taskone');

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
/*
function game () { 
    var dice = document.getElementById('dice');
    let PlayDice = true;
    let randomNumber = Math.floor(Math.random()*6)+1;
    let randomNumber2 = Math.floor(Math.random()*6)+1;
    
        
    document.getElementById(stand.brick).innerHTML = "";
    document.getElementById(stand2.brick).innerHTML = "";
    stand.brick+=randomNumber;
    stand2.brick+=randomNumber2;   
    
    function move(agr,arg2) { 
        if(agr < 40) {        
            document.getElementById(agr).innerHTML = stand.img;    
                  
        } else {
            document.getElementById('bord').style.display = "none";
        }
        if (arg2 < 40) {       
             document.getElementById(agr).innerHTML = stand2.img;
        } else {
             document.getElementById('bord').style.display = "none";
        } 


    }
       

    if(PlayDice == true) { 
       //dice.removeEventListener("click",playerMove(stand.brick,stand2.brick));  
       dice.addEventListener('click',move(stand.brick,stand2.brick))    
        

    }

}

game ();
   
*/

function Game() { 
    var taskbtn = document.getElementById('gameTasks');
    let task_1  = document.getElementById('hello');

    var dice = document.getElementById ('dice');   

    console.log("Hleo");
    let play = true;


    dice.addEventListener('click',function(){ 

        document.getElementById(stand.brick).innerHTML = "";  
        var randNumb = Math.floor(Math.random()*6)+1;        
        stand.brick +=randNumb;
        console.log(stand.brick);
        moveplayer(stand.brick,stand.img)
    });

    function moveplayer(arg1,arg2) {   
        if(arg1 == 8)   {
            
            dice.style.display = "none";
            //task_1.style.display = "block";
            document.getElementById('btn').style.display = "block";           
              
           
        }        
       
        if(arg1 < 40) { 
            return document.getElementById(arg1).innerHTML = arg2;
        }      
    }  
    
    
}
Game()

function draw_text() { 
    alert("wokred")
    dice.style.display = "block";
    btn.style.display = "none";
}
      
