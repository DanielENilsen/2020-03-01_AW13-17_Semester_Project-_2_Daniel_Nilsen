


var bord = document.getElementById('bordbriks');
var bord2 = document.getElementById('bordbrikstwo');
var board3 = document.getElementById('bordbriks3');
var boardfour = document.getElementById('boardfour');

for(var i = 14; i>0;i--)  { 
    bord.innerHTML += "<div class = 'brick'>"+[i]+"</div>";
}
for(var c = 11;c < 26; c++) { 
    bord2.innerHTML += "<div class = 'brick briks2'>"+[c]+"</div>";
}
for(var c = 26;c < 37; c++) { 
    board3.innerHTML += "<div class = 'brick brick3'>"+[c]+"</div>";
}

for(var c = 38;c <45; c++) { 
    boardfour.innerHTML += "<div class = 'brick'>"+[c]+"</div>";
}




