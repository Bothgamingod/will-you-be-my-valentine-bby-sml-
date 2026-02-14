"use strict";

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");

let clickCount = 0;
let dodging = false;

let yesSize = 1;
let noSize = 1;

// Sequence of messages
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

// --- No button click sequence ---
noBtn.addEventListener("click", () => {
  if (!dodging) {
    if (clickCount < messages.length - 1) {
      clickCount++;
      noBtn.textContent = messages[clickCount];

      // Grow Yes, shrink No
      yesSize *= 1.1;
      noSize *= 0.9;
      yesBtn.style.transform = scale(${yesSize});
      noBtn.style.transform = scale(${noSize});

    } else if (clickCount === messages.length - 1) {
      // Last message clicked: reset page
      title.textContent = "Will you be my valentine?";
      noBtn.textContent = "No";

      // Reset sizes
      yesSize = 1;
      noSize = 1;
      yesBtn.style.transform = scale(${yesSize});
      noBtn.style.transform = scale(${noSize});

      // Set button position exactly where it is to avoid jumping
      const rect = noBtn.getBoundingClientRect();
      const containerRect = document.body.getBoundingClientRect();
      const left = rect.left - containerRect.left;
      const top = rect.top - containerRect.top;

      noBtn.style.position = "absolute";
      noBtn.style.left = left + "px";
      noBtn.style.top = top + "px";

      clickCount = 0;

      // Activate dodging after a tiny delay
      setTimeout(() => {
        dodging = true;
      }, 50);
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
