"use strict";

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");

let clickCount = 0;
let dodging = false;

// Messages sequence
const messages = [
  "ot sl nh he men? 🥺",
  "yor nh hv nh smos hah 🥹",
  "ot ey heh jg :( 😭",
  "chop sl nh hy men? 💔",
  "Nh yum leryyy... 😭💔"
];

// --- Yes button ---
yesBtn.addEventListener("click", () => {
  title.textContent = "Yay! I Love You pov meas!! 💗";
  btnContainer.classList.add("hidden");
});

// --- No button ---
noBtn.addEventListener("click", () => {
  if (!dodging) {
    if (clickCount < messages.length - 1) {
      clickCount++;
      noBtn.textContent = messages[clickCount];
    } else if (clickCount === messages.length - 1) {
      // Last message clicked: reset page
      title.textContent = "Will you be my valentine?";
      noBtn.textContent = "No";
      clickCount = 0;

      // Activate dodging AFTER reset
      setTimeout(() => {
        dodging = true;
        noBtn.style.position = "absolute"; // make it absolute now
      }, 100);
    }
  }
});

// --- Dodging behavior ---
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.floor(Math.random() * maxX) + "px";
  noBtn.style.top = Math.floor(Math.random() * maxY) + "px";
}

// Desktop: dodge on mouse hover
noBtn.addEventListener("mouseenter", () => {
  if (dodging) moveNoButton();
});

// Mobile: dodge on tap
noBtn.addEventListener("touchstart", (e) => {
  if (dodging) {
    e.preventDefault();
    moveNoButton();
  }
});
