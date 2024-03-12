var bt_demarer, bt_arreter, timer, span, heure, minute, seconde;

window.onload = function(){
  bt_demarer = document.querySelector(".demarre");
  bt_arreter = document.querySelector(".arret");
  span = document.querySelectorAll("span");
  timer;
  heure =0;
  seconde =0;
  minute = 0;
}

function demarrage(){

  seconde++;

  if (seconde == 60) {
    seconde =0;
    minute++;
    
  }
  if (minute == 60) {
    minute =0;
    heure++;
    }

  span[0].innerHTML = "0" +heure + " h" 
  span[1].innerHTML = "0"+minute + " mn"
  span[2].innerHTML = seconde + " s"
}


function begin(){
  timer = setInterval(demarrage,10);
  bt_demarer.disabled = true;

}
function stop(){

  clearInterval(timer);
  bt_demarer.disabled = false;
}

function reset(){
  clearInterval(timer);
  bt_demarer.disabled = false;
  seconde = 0;

  span[0].innerHTML = "00" + " h" 
  span[1].innerHTML = "00" + " mn"
  span[2].innerHTML = "00" + " s"

}