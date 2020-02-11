


var bord = document.getElementById('bordbriks');
var bord2 = document.getElementById('bordbrikstwo');
var board3 = document.getElementById('bordbriks3');

for(var i = 13; i>0;i--)  { 
    bord.innerHTML += "<div class = 'brick'>"+[i]+"</div>";

}
for(var c = 14;c <= 28; c++) { 

    bord2.innerHTML += "<div class = 'brick briks2'>"+[c]+"</div>";

}
for(var c = 30;c <= 40; c++) { 

    board3.innerHTML += "<div class = 'brick brick3'>"+[c]+"</div>";

}

