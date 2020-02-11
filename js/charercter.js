
var charectArray = [583,55,30,40,50,88,66,350,150,23];
for (var i = 0; i < charectArray.length; i++) { 
    fetch("https://anapioficeandfire.com/api/characters/"+charectArray[i]).then(result => result.json()).then((rest) => { 
        resu(rest);    
        
      
    }).catch(error => console.log(error))

}        
    function resu(result) { 
        document.getElementById('id').innerHTML += "<div class = 'col-11 col-sm-11 col-md-11 col-lg-5 cardOne'><h1>" + result.name + "</h1></div>";
        displayCard();
     
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

