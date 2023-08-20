let gameSeq = [];
let useSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  useSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randColor)
  // console.log(randIdx)
  // console.log(randbtn)

  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {
  // let idx=level-1;

  if (useSeq[idx] === gameSeq[idx]) {
    // console.log("same value")
    if (useSeq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h2.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to start`;
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white"

    },150)
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  useSeq.push(userColor);
  checkAns(useSeq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  useSeq = [];
  level = 0;
}
