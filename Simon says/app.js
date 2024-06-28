let gameseq = [];
let userseq = [];
let colors = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game has begun");
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 50);
}

function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = colors[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);
}

let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

function checkans(idx){
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML=`Game over your score is ${level}<br>Press any key to continue`;
        reset();
    }
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}