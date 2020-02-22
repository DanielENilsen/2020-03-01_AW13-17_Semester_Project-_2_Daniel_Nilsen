
var charectArray = [583,55,30,40,50,88,66,350,150,23];

localStorage.removeItem("Name");
localStorage.removeItem("Name2");
for (var i = 0; i < charectArray.length; i++) { 
    fetch("https://anapioficeandfire.com/api/characters/"+charectArray[i]).then(result => result.json()).then((rest) => { 
        resu(rest);       
        const cards = document.querySelectorAll('.cardOne');

        function GetCards() {           
                    
            if("Name" in localStorage) { 
                localStorage.setItem("Name2",this.innerHTML);
            } else { 
                localStorage.setItem("Name",this.innerHTML);
               // cards[i].style.borderColor = "red";          
            }            
            if("Name" in localStorage && "Name2" in localStorage) {
                slideToNext();                
            } 
        }
        cards.forEach(card => card.addEventListener('click',GetCards));     
    }).catch(error => console.log(error));
}        
function resu(result) {            
    document.getElementById('id').innerHTML += "<div id ='jee' class = 'col-11 col-sm-11 col-md-11 col-lg-4 cardOne cardupdate'><h1>" + result.name + "</h1></div>";
    displayCard();       
}     

function delay(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function displayCard ()  {

    var getcards = document.querySelectorAll(".cardOne");
    for(var i = 0; i< getcards.length;i++)  {
              await delay(300);
        if(getcards[i].style.display === "block") {            
            getcards[i].style.display = "none";
        } else { 
            getcards[i].style.display = "block";
        }    
    }  
};

async function slideToNext() {   
    await delay(300);
    var activate = document.getElementById('bg-1');
    var selecetcards = document.getElementById('disCards');
    var pushCards  = document.getElementById('selid');
    activate.style.display = "none";

    if(selecetcards.style.display == "block") { 
        alert("nul")
        selecetcards.style.display = "none";
    } else {
        selecetcards.style.display = "block";
    } 

    var cardOne = localStorage.getItem('Name');
    var cardTwo = localStorage.getItem('Name2');
    
   pushCards.innerHTML += "<div  class =  'col-11 col-sm-11 col-md-11 col-lg-4 cardOne'>"+cardOne+"</div>";
   pushCards.innerHTML += "<div class = 'col-11 col-sm-11 col-md-11 col-lg-4 cardOne'>"+cardTwo+"</div>";
   var displayCards =  document.querySelectorAll(".cardOne");
   for(let i = 0 ; i < displayCards.length;i++) { 
 
    if(displayCards[i].style.display == "block") { 
       
        displayCards[i].style.display = "none";
    } else {
        displayCards[i].style.display = "block";
    }            

   }   

}   




