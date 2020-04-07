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

// Navbar-shrink scroll effect

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar-links").style.fontSize = "1rem";
    document.querySelector(".navbar-logo").style.fontSize = "1.5rem";
  } else {
    document.querySelector(".navbar-links").style.fontSize = "1.25rem";
    document.querySelector(".navbar-logo").style.fontSize = "2rem";
  }
}