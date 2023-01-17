// HEADER CLOSE PART
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("header-scrolled");
  }else{
    nav.classList.remove("header-scrolled");
  }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

document.addEventListener('mousemove', e=> {

  let bubles = document.createElement('bubles');
  let x = e.pageX;
  let y = e.pageY;
  bubles.style.left = x + "px";
  bubles.style.top = y + "px";
  let size = Math.random() * 55;
  bubles.style.width = 1 + size + "px";
  bubles.style.height = 1 + size + "px";
  
  document.body.appendChild(bubles);
  setTimeout(function() {
    bubles.remove();
  }, 1100);
});