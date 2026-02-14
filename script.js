"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yay! I Love You pov meas!! 💗";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "ot sl nh he men? 🥺",
    "yor nh hv nh smos hah🥹",
    "ot ey heh jg :( 😭",
    "chop sl nh hy men? 💔",
    "Nh yum leryyy... 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}
// Make the No button move away like the messages
document.addEventListener("mousemove", (e) => {
  if (!play) return; // Stop moving after MAX_IMAGES reached

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const rect = noBtn.getBoundingClientRect();
  const offset = 70; // how close the mouse can get

  // Check if mouse is near the button
  if (
    mouseX > rect.left - offset &&
    mouseX < rect.right + offset &&
    mouseY > rect.top - offset &&
    mouseY < rect.bottom + offset
  ) {
    // Move button slightly randomly but more like "dodging" style
    let moveX = rect.left + (Math.random() > 0.5 ? 80 : -80);
    let moveY = rect.top + (Math.random() > 0.5 ? 50 : -50);

    // Keep inside the window
    moveX = Math.max(0, Math.min(moveX, window.innerWidth - rect.width));
    moveY = Math.max(0, Math.min(moveY, window.innerHeight - rect.height));

    noBtn.style.left = moveX + "px";
    noBtn.style.top = moveY + "px";
  }
});
