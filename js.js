

const evtDiv = document.getElementById("evtDiv");
const counter = document.getElementById("counter");

let clickSpeed = 0;
let likeCounter = 0;

evtDiv.addEventListener("click", (e) => {
  if (clickSpeed === 0) {
    clickSpeed = new Date().getTime();
  } else {
    if (new Date().getTime() - clickSpeed < 700) {
      heart(e);
      clickSpeed = 0;
    } else {
      clickSpeed = new Date().getTime();
    }
  }
});

function heart(e) {
  e.preventDefault();

  const heartEl = document.createElement("i");
  heartEl.classList.add("fas");
  heartEl.classList.add("fa-heart");

  const xAxis = e.clientX;
  const yAxis = e.clientY;
  const offsetL = e.target.offsetLeft;
  const offsetY = e.target.offsetTop;

  const xInside = xAxis - offsetL;
  const yInside = yAxis - offsetY;

  heartEl.style.top = `${yInside}px`;
  heartEl.style.left = `${xInside}px`;

  evtDiv.appendChild(heartEl);
  likeCounter++;
  counter.textContent = likeCounter;
}
