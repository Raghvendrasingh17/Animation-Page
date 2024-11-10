let menu = document.querySelector('.nav-icon');
let close = document.querySelector('.nav-content i');
let tl = gsap.timeline();

// menu timeline code 
tl.to('.nav-content',{
    x:0,
    duration:0.8,
});
tl.from('.nav-content span',{
    x:100,
    stagger:0.2,
    opacity:0,
    duration:0.3
})
tl.from(close,{
    opacity:0,
})

// by default timeline in paused 
tl.pause();

menu.addEventListener('click',() => {
    tl.play();
});

close.addEventListener('click',() => {
    tl.reverse();
});