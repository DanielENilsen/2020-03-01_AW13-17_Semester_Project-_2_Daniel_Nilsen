
var charectArray = [583,55,30,40,50,88,66,350,150,23];

localStorage.removeItem("Name");
localStorage.removeItem("Name2");
for (var i = 0; i < charectArray.length; i++) { 
    fetch("https://anapioficeandfire.com/api/characters/"+charectArray[i]).then(result => result.json()).then((rest) => { 
        resu(rest);   
      
   
    
        const cards = document.querySelectorAll('.cardOne')
        
        function GetCards() { 
           
           
            console.log(this)
            if("Name" in localStorage) { 
                localStorage.setItem("Name2",this.innerHTML);



            } else { 
                localStorage.setItem("Name",this.innerHTML);
            }
            
            if("Name" in localStorage && "Name2" in localStorage) {
                slideToNext();
                

            }          
            
            

        
        }
        cards.forEach(card => card.addEventListener('click',GetCards));
        
       
        
      
    }).catch(error => console.log(error))
}        
    function resu(result) {            
        document.getElementById('id').innerHTML += "<div id ='jee' class = 'col-11 col-sm-11 col-md-11 col-lg-5 cardOne'><h1>" + result.name + "</h1> <h4> " + result.gender+ "</h4> <h4> "+ result.titles + "</h4></div>";
        displayCard(); 
        my_array.push(result.name);   
    }  
   
function delay(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function displayCard ()  {  

    var getcards = document.querySelectorAll(".cardOne") 

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

    document.getElementById('body').style.opacity =  0.08
}




