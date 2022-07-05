function Zadanie1(){
    this.style.display='none';
}

function Zadanie2(){

    document.getElementById('hider').onclick = function() {
        document.getElementById('text').hidden = true;
      }
}


function show_hide() {  
    var click = document.getElementById("list-items");  
    if(click.style.display ==="none") {  
        click.style.display ="block";  
    } else {  
        click.style.display ="none";  
    }   
}  
     