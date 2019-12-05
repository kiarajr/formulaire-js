
function countcarac() {
        var total = document.getElementById("password").value.length;
        document.getElementById("compteur").innerHTML = total+" Caractere(s)"; 
        var mini=10;
    


    if( total <= mini) {
        document.getElementById("erreur").innerHTML ="Vous devez saisir plus 10 caracteres";
    }

    else{
        document.getElementById("panoramique").style.marginLeft="-100%";

    }

    
}
