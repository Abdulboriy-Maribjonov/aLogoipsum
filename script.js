

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