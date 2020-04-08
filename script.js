// Modal 

var button = document.querySelector("#btn");
var close = document.querySelectorAll(".modal-close");
var overlay = document.querySelector("#overlay");
var gridContainer = document.querySelector(".grid-container");
var projects = document.querySelector("#projects");
var closeModalSelector = "";

function openModal(modal){
    projects.scrollIntoView()
    var modalSelector = document.querySelector(`#${modal}`);
    modalSelector.style.display = "block";
    overlay.classList.add("overlay");
    closeModalSelector = modalSelector;
};

function closeModal(){
    closeModalSelector.style.display = "none"
    overlay.classList.remove("overlay")
}

close.forEach(item => {
    item.addEventListener("click", closeModal)
})

gridContainer.addEventListener("click", e => {
    var num = parseInt(e.target.className.substring(4))
    var modal = "modal-" + num
    openModal(modal);
});

// GSAP
var contactSection = document.querySelector("#contact");
var tl = gsap.timeline()
var tl2 = new TimelineMax({repeat:-1, yoyo:true});
var tl3 = gsap.timeline({paused: true})

tl.to(".showcase-title", {duration: 2, opacity: 1})
  .to(".web-dev-header", {duration: 2, opacity: 1}, "=-1")
  .to(".snowball-1", {duration: 7, rotation:90, y: 1000, opacity: 0, repeat: -1}, 1)
  .to(".snowball-2", {duration: 7, rotation:90, y: 1000, opacity: 0, repeat: -1}, 5)
  .to(".snowball-3", {duration: 7, rotation:90, y: 1000, opacity: 0, repeat: -1}, 4)
  .to(".snowball-4", {duration: 7, rotation:90, y: 1000, opacity: 0, repeat: -1}, 3)
  .to(".snowball-5", {duration: 7, rotation:90, y: 1000, opacity: 0, repeat: -1}, 2)

tl2.to(".cloud-1", {duration: 20, x:100})
   .to(".cloud-2", {duration: 20, x:-100}, 0 )

tl3.from(".citrus-1", {duration: 2, y: -500, ease: "bounce"}, 0)
   .from(".citrus-2", {duration: 2, y: -1000, ease: "bounce"}, 0.2)
   .from(".citrus-3", {duration: 2, y: -1000, ease: "bounce"}, 0.25)

window.addEventListener("scroll", function(){
  if (window.scrollY > (contactSection.offsetTop)) {
    tl3.play()
  }
})

// Navbar display on scroll
var navBar = document.querySelector(".navbar-container");
var aboutMeSection = document.querySelector("#what .container");

window.addEventListener("scroll", function(){
  if (window.scrollY > (aboutMeSection.offsetHeight)) {
    navBar.style.transform = "translateX(0)";
  } else {
    navBar.style.transform = "translateX(-1000px)";
  }
})

// Snowball hover effect

var snowball1 = document.querySelector(".snowball-1");

