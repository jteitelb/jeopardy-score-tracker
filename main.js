window.onload = ()=>{
    let player = document.querySelector(".players .player\:nth-child(2)");
    let scoreEl = player.querySelector("h4");

    /*scoreEl.innerText = "-$400";*/
    /*scoreEl.setAttribute("style", "color:red;")*/
    let score = 0;
    updateScore();
    let amount1 = document.querySelector(".amounts .amount\:nth-child(1)");
    amount1.addEventListener("click", ()=>{
        score += 200;
        updateScore();
    });

    function updateScore(){
        scoreEl.innerText = `${score < 0? "-": ""}\$${Math.abs(score)}`
        if (score < 0){
            scoreEl.classList.add("red");
        }else{
            scoreEl.classList.remove("red");
        }
    }
   
}