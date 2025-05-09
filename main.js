window.onload=()=>{
  if (window.scrollY < 500) {
    btn.style.display = "none"
  }
  else{
    btn.style.display = "block"
  }
  
}
const btn = document.getElementById("top-btn");
window.onscroll = ()=>{
  if (window.scrollY > 500) {
    btn.style.display = "block"
  }else{
    btn.style.display = "none"
  }
}
btn.addEventListener("click" , ()=>{
  window.scrollTo({
    top:0
  })
})