gsap.to(".box", {
    rotate: 360,
    borderRadius: "50%",
    backgroundColor :"green",
    scrollTrigger: {
        trigger: ".page2 .box",       
        start: "top 50%",            
        end: "bottom 30%",             
        // markers: true,                 
        scrub: true,                 
        toggleActions: "play pause resume reset", 
    },
});

//Moving text from right to left while scrolling
gsap.to("h2",{
    x:"-90vw",
    duration:3,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 0",
        scrub: true,
        pin:true,
        // markers:true,
    }
})