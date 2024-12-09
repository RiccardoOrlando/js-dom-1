const bottone = document.getElementById("btn")
const lampoff = document.querySelector(".img-off")
const lampon = document.querySelector(".img-on")

function on(){
    if(lampoff.classList.contains("img-hidden")){
        lampoff.classList.remove("img-hidden");
        lampon.classList.add("img-hidden");
        bottone.innerHTML = "Spegni"
    } else {
        lampoff.classList.add("img-hidden");
        lampon.classList.remove("img-hidden");
        bottone.innerHTML = "Accendi"
    }
    
}


bottone.addEventListener("click", on)

