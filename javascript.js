// for smooth scrolling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// for animation (Index.html)
// Define your timeline
var tl = gsap.timeline();

// Animation sequence for #rotate element
tl.to("#rotate", {
    y: "100vh",
    scale: 1,
    duration: 2,
    onComplete: function() {
        // Function to change text after this animation completes
        document.getElementById("textElement").textContent = "Welcome To My Amazing Website";
    }
})
.to("#rotate", {
    y: "30vh",
    duration: 0.7,
    delay: 1,
})
.to("#rotate", {
    y: "0vh",
    rotate: -360,
    scale: 1,
    duration: 0.7,
    onComplete: function() {
        // Function to change text after this animation completes
        document.getElementById("textElement").textContent = "";
    }
});

// Function to change text before animation starts
document.getElementById("textElement").textContent = "Welcome To My Amazing Website";





// for sidebar 

let sidebarcontainer = document.getElementById("sidebar-container");
let sidebaropen = document.getElementById("hide");
let sidebarclose = document.getElementById("close");

sidebaropen.addEventListener("click",()=>{
    sidebarcontainer.classList.toggle("sidebare-show");
})

sidebarclose.addEventListener("click",()=>{
    sidebarcontainer.classList.toggle("sidebare-show");
})

