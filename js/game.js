  
class player { 
    constructor(name,brick,img) { 
        this.name = name;
        this.brick = brick;  
        this.img = img;    
    }
}

localStorage.removeItem("Winner");
let displayCards= document.getElementById('DisplayCards');
let btn = document.getElementById('btn');
let textDisplay = document.getElementById('GameOver');
var MagicDice  =document.getElementById('MagicDice');
var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');
var traps = [8,13,30,21,28,35];
var cardOne = localStorage.getItem('Name');
var cardTwo = localStorage.getItem('Name2');
var stand =  new player(cardOne,1,"<img class='playericon' id ='one' src='../playerIcon/PlayerIcon1.png'>",);
var stand2 = new player(cardTwo,1,"<img class='playericon' id ='two' src='../playerIcon/Playericon2.png'>");
let task_one = document.getElementById('taskone');
var dice = document.getElementById ('dice');
var dice2 = document.getElementById('dice2');
var fakedice = document.getElementById('fakedice');
var playerOne = document.querySelector("#one"); 
var sectionBtn = document.getElementById('sectionBtn');
let repond = document.getElementById('repond');


if(cardOne !== null) { 
    DiplayCards ();

} else { 
    MagicDice.innerHTML += "<h1> Please go back and select Charecters";
}

function DiplayCards () {     

    displayCards.innerHTML += "<div  class ='cardOne'>"+cardOne+"</div>";
    displayCards.innerHTML += "<div class = 'cardOne'>"+cardTwo+"</div>";
    displayCards.innerHTML += "<div class = 'iconshow'>"+stand.img+"</div>";
    displayCards.innerHTML += "<div class = 'iconshow2'>"+stand2.img+"</div>";



    for(var i = 13; i > 0;i--)  { 
        bord3.innerHTML += "<div  id = "+[i]+" class = 'brick'></div>";
    }
    for(var c = 14;c <= 28; c++) { 
        bord2.innerHTML += "<div id = "+[c]+" class = 'brick'></div>";
    }
    for(var c = 29;c < 41; c++) { 
        bord.innerHTML += "<div id = "+[c]+" class = 'brick'></div>";    
    }
    document.getElementById(40).innerHTML += "<img class ='caslteImg' src='../icons/Crown.png'>";
   
   
    traps.forEach(element => {
     
       document.getElementById(element).style.backgroundColor = "#8c0900";    
    });  
    let color_tiles = document.querySelectorAll(".brick");

    for(let i = 0; i < color_tiles.length;i++) { 
        if(i % 2 == 0) { 
            color_tiles[i].style.backgroundColor += "#c8cfdb";
            
        }     
    }


}

function Game() {    
    document.getElementById(stand.brick).innerHTML += stand.img;
    document.getElementById(stand2.brick).innerHTML += stand2.img;   

    dice2.addEventListener('click',function() {      
        repond.innerHTML = "";    
        var playerOne = document.querySelector("#two"); 
       
         
        let randNumb = Math.floor(Math.random()*6)+1;  
        dice.innerHTML = "<h3>"+randNumb+"</h3>";  
      
        stand2.brick = stand2.brick +=randNumb;   
         
        console.log(stand2.brick);
        moveplayer(stand2.brick,stand2.img,stand2.name);
      
        if(stand2.brick == 8 || stand2.brick == 13 || stand2.brick == 21 || stand2.brick == 28 || stand2.brick == 30 || stand2.brick == 35) {
            dice2.style.display = "none";
            dice.style.display = "none";
            playerOne.parentNode.removeChild(playerOne);  


        } else { 
            dice2.style.display = "none";
            dice.style.display = "block";
            playerOne.parentNode.removeChild(playerOne);  
        }       
    });

 
    dice.addEventListener('click',function(){       
        var playerOne = document.querySelector("#one");
        repond.innerHTML = ""; 
        var randNumb = Math.floor(Math.random()*6)+1;  
        dice2.innerHTML = "<h3>"+randNumb+"</h3>";  
        stand.brick +=randNumb;   
        console.log(stand.brick);
        moveplayer(stand.brick,stand.img,stand.name);              
        if(stand.brick == 8 || stand.brick == 13 || stand.brick == 21 || stand.brick == 28 ||  stand.brick == 30 || stand.brick == 35) { 
            dice.style.display = "none";
            dice2.style.display = "none";
            playerOne.parentNode.removeChild(playerOne);  


        } else {
            console.log("Dice1")
            dice.style.display = "none";
            dice2.style.display = "block";
            playerOne.parentNode.removeChild(playerOne);
        }    
    });
    
    function moveplayer(arg1,arg2,arg3) {       
  

        if(arg1 == 8) {            
            let text = "<h3 class = 'questionClass'>Did John snow killed Daenerys Targaryen?</h3>";
            let Qurrect = "<button class = 'btn' onclick='correct();'>Yes </button>";
            let wrong = "<button class ='btn' onclick='wrong("+arg1+");'> No </button>";            
            text_text(text,Qurrect,wrong);  
            dice.style.display = "none";
            dice2.style.display = "none";                            
        }       
          
        if(arg1 == 13)  {                
            
            let text = "<h3 class = 'questionClass'>Who wrote The Game Of Thrones ?</h3>";
            let Qurrect = "<button class = 'btn' onclick='correct();'> Martin </button>";
            let wrong = "<button class ='btn' onclick='wrong("+arg1+");'>Rowling </button>";          
            text_text(text,wrong,Qurrect);   
            dice.style.display = "none";
            dice2.style.display = "none";     
        } 
        if(arg1 == 21)   {       
            let text = "<h3 class = 'questionClass'>How many tv seasons are there?</h3>";             
            let Qurrect = "<button class = 'btn' onclick='correct();'>8 </button>";
            let wrong = "<button class ='btn' onclick='wrong("+arg1+");'> 7 </button>";            
            text_text(text,wrong,Qurrect);
            dice.style.display = "none";
            dice2.style.display = "none";     
        } 
        if(arg1 == 28)   {                      
            let text = "<h3 class = 'questionClass'>Can Bran see/vision in to the future? </h3>";       
            let Qurrect = "<button class = 'btn' onclick='correct();'>Yes </button>";
            let wrong = "<button class ='btn' onclick='wrong("+arg1+");'> No </button>";             
            text_text(text,wrong,Qurrect);
            dice.style.display = "none";
            dice2.style.display = "none";            
        }    
        
        if(arg1 == 30)  {            
            let text = "<h3 class = 'questionClass'>What house did King Joffrey belong to ?</h3>";       
            let Qurrect = "<button class = 'btn' onclick='correct();'> Lannister </button>";
            let wrong = "<button class ='btn' onclick='wrong("+arg1+");'>  Stark </button>";            
            text_text(text,Qurrect,wrong);
            dice.style.display = "none";
            dice2.style.display = "none";             
        } 
        if(arg1 == 35) {           
            let text = "<h3 class = 'questionClass'>The latest book in the saga came out in ?</h3>";     
            let Qurrect = "<button class = 'btn' onclick='correct();'>2011</button>";
            let wrong = "<button class ='btn' onclick='wrong("+arg1+");'> 2015</button>";           
            text_text(text,wrong,Qurrect);
            dice.style.display = "none";
            dice2.style.display = "none";           
        }
        
        if(arg1 < 40) {
            
            return document.getElementById(arg1).innerHTML += arg2;
        } 
        if(arg1 => 40) { 
            localStorage.setItem("Winner",arg3);
            return window.location.href ="final-page.html";
        }
    }    
}
Game();

function text_text(arg,arg2,arg3) {  
    textDisplay.innerHTML += arg;
    sectionBtn.innerHTML += arg2;
    sectionBtn.innerHTML += arg3;
    dice.style.display = "none";
    dice2.style.display = "none";   
}

function correct() {     
    textDisplay.innerHTML  = "";  
    sectionBtn.innerHTML = "";
    repond.innerHTML = "<h4 class 'textRepnd'>Correct you are free to move on </h4>";
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
    sectionBtn.innerHTML = "";
    repond.innerHTML = "<h4 class 'textRepnd'>Wrong, you are Going back 2 steps</h4>";
    sum = (arg -2 );
   
   
    if(stand.brick == 8 || stand.brick == 13 || stand.brick == 21 || stand.brick == 28 || stand.brick == 25 || stand.brick == 30 || stand.brick == 35) { 
        document.getElementById(stand.brick).innerHTML = "";
        dice.style.display = "none";
        dice2.style.display = "block";
        stand.brick = sum;
        console.log("test",stand.brick)
       return document.getElementById(stand.brick).innerHTML += stand.img;       
    }
    if(stand2.brick == 8 || stand2.brick == 13 || stand2.brick == 21 || stand2.brick == 28 || stand2.brick == 25 || stand2.brick == 30 || stand2.brick == 35) {
        document.getElementById(stand2.brick).innerHTML = "";
        dice2.style.display = "none";  
        dice.style.display = "block";
        stand2.brick = sum;
        console.log("test",stand2.brick)
        return document.getElementById(stand2.brick).innerHTML += stand2.img;
    }       
}  


