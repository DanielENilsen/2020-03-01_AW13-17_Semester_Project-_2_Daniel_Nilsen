

//bordbriks3 = bordOne
//bordbrikstwo = bordTwo
//bordbriks = boardThree

var bord = document.getElementById('bordOne');
var bord2 = document.getElementById('bordbrikstwo');
var bord3 = document.getElementById('boardthree');


for(var i = 13; i>0;i--)  { 
    bord3.innerHTML += "<div class = 'brick'>"+[i]+"</div>";

}
for(var c = 14;c <= 28; c++) { 

    bord2.innerHTML += "<div class = 'brick briks2'>"+[c]+"</div>";

}
for(var c = 30;c <= 40; c++) { 

    bord.innerHTML += "<div class = 'brick brick3'>"+[c]+"</div>";

}




