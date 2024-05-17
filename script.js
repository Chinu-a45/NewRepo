//for mouse move , heee heeee
let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursor.style.top = dets.y + "px";
    cursor.style.left = dets.x + "px";
    blur.style.top = dets.y - 199 + "px";
    blur.style.left = dets.x - 199 + "px";
})

//for scaling on hover on navbar
let h4all = document.querySelectorAll("#nav div");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseover",function(){
        elem.style.cursor = "none"
    })

    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #fff";
        cursor.style.backgroundColor = "#86ae17";
    })
})

//gsap js ki library h, iska use animations ke liye hota ha
gsap.to("#nav",{
    backgroundColor: "black",
    height : "110px",
    scrollTrigger : {
        trigger : "#nav",
        duration:  1,
        scroller: "body",
        start: "top:-10%",
        end: "top: -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 2,
    }
    
})

gsap.from("#about-us", {
    opacity: 0,
    y: "100px",
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start: "top 80%",
        end: "top 90%",
        scrub:4,
    }
})


gsap.to("#page3 #img1", {
    y: "50%",
    x: "50%",
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        scrub: 4,
        start: "top 40%",
        end: "top 30%"
    }
})

gsap.to("#page3 #img2", {
    y: "-60%",
    x: "-50%",
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        scrub: 2,
        start: "top 40%",
        end: "top 30%"
    }
})

gsap.to("#page4 p", {
    y: "-60px",
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        scrub:1,
        start: "top 95%",
        end: "bottom 80%"
    }
})