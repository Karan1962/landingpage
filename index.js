let tl=gsap.timeline();

tl.from(".column1",{
    opacity:0,
    duration:0.5,
    ease:"linear"
}).from(".column1 .nav",{
    opacity:0,
    duration:0.5,
    ease:"linear"
}).from(".column1 .hero",{
    opacity:0,
    duration:0.5,
    ease:"linear"
}).from(".column2",{
    x:100,
    opacity:0,
    duration:0.5,
    rotate:-180,
    ease:"linear"
}).from(".column3",{
    opacity:0,
    y:100,
    duration:0.5,
    rotate:180,
    ease:"linear"
}).from(".column4",{
    opacity:0,
    x:100,
    duration:0.5,
    ease:"linear"
})


function x(){
    for(let i=1;i<=0;i++){
        setTimeout(() => {
            console.log(i)
        }, i*1000)
    }
    console.log("namaste world!")
}