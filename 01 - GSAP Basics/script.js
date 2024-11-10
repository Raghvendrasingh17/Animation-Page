gsap.to(".box",{
    x:1000,
    duration:2,
    delay:1.5,
    stagger:-1,
    // repeat:3,
    // yoyo:true,
})
gsap.to(".box1",{
    x:1000,
    duration:2,
    delay:0.5,
    repeat:3,
    yoyo:true,
})

gsap.to(".ball",{
    y:-150,
    duration:1.3,
    delay:0.5,
    repeat:-1,
    yoyo:true
})

//Timeline in GSAP
let tl=gsap.timeline();
tl.to(".box1",{
    x:1000,
    duration:2,
    delay:0.5,
})
tl.to(".box2",{
    x:1000,
    duration:2,
    delay:0.5,
})