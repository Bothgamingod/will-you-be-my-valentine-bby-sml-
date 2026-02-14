"use strict";

// GIFs for the page
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
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

// Create the trap button but hide it initially
const trapBtn = document.createElement("button");
trapBtn.innerText = "Click Me!";
trapBtn.classList.add("btn");
trapBtn.style.position = "absolute";
trapBtn.style.display = "none";
trapBtn.style.cursor = "pointer";
trapBtn.style.transition = "left 0.2s ease, top 0.2s ease";
document.body.appendChild(trapBtn);

// Messages for No button
const messages = [
  "No 😔",
  "ot sl nh he men? 🥺",
  "yor nh hv nh smos hah🥹",
  "ot ey heh jg :( 😭",
  "chop sl nh hy men? 💔",
  "Nh yum leryyy... 😭💔", // last message triggers trap
];

// --- Yes Button ---
yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yay! I Love You pov meas!! 💗";
  btnContainer.classList.add("hidden");
  img.src =
    "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif";
});

// --- No Button ---
noBtn.addEventListener("click", () => {
  if (noCount < MAX_IMAGES) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    img.src = tontonGifs[imageIndex];
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();

    if (noCount === MAX_IMAGES) {
      // Hide No button and show trap button
      noBtn.style.display = "none";
      trapBtn.style.display = "block";

      // Position trap button randomly
      const maxX = window.innerWidth - trapBtn.offsetWidth;
      const maxY = window.innerHeight - trapBtn.offsetHeight;
      trapBtn.style.left = Math.floor(Math.random() * maxX) + "px";
      trapBtn.style.top = Math.floor(Math.random() * maxY) + "px";
    }
  }
});

// --- Button resizing ---
function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = scale(${yesButtonSize});
}

function shrinkNoButton() {
  noButtonSize *= 0.9;
  noBtn.style.transform = scale(${noButtonSize});
}

// --- Update No button text ---
function updateNoButtonText() {
  noBtn.innerText = messages[noCount];
}

// --- Trap Button Behavior ---
// Desktop: dodge mouse
document.addEventListener("mousemove", (e) => {
  if (trapBtn.style.display === "block") {
    const rect = trapBtn.getBoundingClientRect();
    const offset = 50;

    if (
      e.clientX > rect.left - offset &&
      e.clientX < rect.right + offset &&
      e.clientY > rect.top - offset &&
      e.clientY < rect.bottom + offset
    ) {
      moveTrapButton();
    }
  }
});

// Mobile: dodge on touch
trapBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevent accidental tap
  moveTrapButton();
});

// Function to move trap button randomly
function moveTrapButton() {
  const maxX = window.innerWidth - trapBtn.offsetWidth;
  const maxY = window.innerHeight - trapBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  trapBtn.style.left = randomX + "px";
  trapBtn.style.top = randomY + "px";
}
