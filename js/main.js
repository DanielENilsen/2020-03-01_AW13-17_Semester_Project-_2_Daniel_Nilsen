var id = document.getElementById('id1');
var id2 = document.getElementById('id2');
var id3 = document.getElementById('id3');

setTimeout(function() {
    if(id.style.display === "block") { 
        id.style.display = "none";
    }else { 
        id.style.display = "block";
    }
},300);

setTimeout(function() {
    if(id2.style.display ==="block") { 
        id2.style.display = "none";
    }else { 
        id2.style.display = "block";
    }
},600);

setTimeout(function() {
    if(id3.style.display ==="block") { 
        id3.style.display = "none";
    }else { 
        id3.style.display = "block";
    }
},1000);


