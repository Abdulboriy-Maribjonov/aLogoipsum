

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 0);
});

const menuBtn = document.getElementById("menu")
const list = document.getElementById("list")


menuBtn.addEventListener("click", (e)=>{
  list.classList.toggle("active")
})
list.addEventListener("touchstart", (e)=>{
  e.stopPropagation()
})

document.addEventListener("touchstart", (e)=>{
  if(!menuBtn.contains(e.target) && !menuBtn.contains(e.target)){
    list.classList.remove("active")
  }
})

const group = document.querySelector('.group');
const cards = Array.from(group.children);


cards.forEach(card => {
  const clone = card.cloneNode(true);
  group.appendChild(clone);
});


let originalWidth = 0;
cards.forEach(card => {
  originalWidth += card.offsetWidth;
});

let x = 0;
const speed = 0.5;

function animate() {
  x -= speed;

  if (Math.abs(x) >= originalWidth) {
    x = 0;
  }

  group.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();