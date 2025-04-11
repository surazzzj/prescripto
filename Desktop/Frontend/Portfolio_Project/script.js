Shery.makeMagnet("#social a")
Shery.makeMagnet("#section a")
Shery.makeMagnet(".container6 h1")

let body = document.querySelector("body")
let container1 = document.querySelector(".container1")
let container2 = document.querySelector(".container2")
let container3 = document.querySelector(".container3")

body.style.overflow = "hidden"

let i = document.querySelector("#border i")
gsap.to("#border i", {
    y: 20,
    duration: 1,
    repeat: -1
})

let element = document.querySelector("#element")
let border = document.querySelector("#border")

gsap.to("#border", {
    borderRadius: "50%",
    border: ".1px solid white",
    backgroundColor: "black",
    duration: "2"
})

let elemp = document.querySelector("#element p")
element.addEventListener("click", function () {
    gsap.to("#element", {
        height: "100vh",
        width: "100vw",
        borderRadius: "0%",
        duration: 1
    })

    body.style.overflow = "auto"
    border.style.display = "none";
    elemp.style.color = "transparent"

    gsap.to("#element", {
        display: "none",
        delay: 1
    })

    gsap.to("#animation", {
        opacity: 0,
        duration: 1,
        delay: .5
    })

    gsap.from("#overlay #text_1 h1", {
        opacity: 0,
        duration: .8,
        delay: .6
    })

    gsap.from("#overlay #text_2 h1", {
        y: 200,
        stagger: .1,
        duration: 1,
        opacity: 0,
        delay: .6
    })

    gsap.from("#overlay #text_3 h1", {
        y: 200,
        stagger: .1,
        duration: 1,
        opacity: 0,
        delay: .6
    })

    gsap.from("#overlay #text_4 h1", {
        y: 200,
        stagger: .1,
        duration: 1,
        opacity: 0,
        delay: .6
    })

    gsap.from("#overlay #text_5 h1", {
        y: 200,
        stagger: .1,
        duration: 1,
        opacity: 0,
        delay: .6
    })

    gsap.from("#overlay #text_6 h1", {
        y: 200,
        stagger: .1,
        duration: 1,
        opacity: 0,
        delay: .6
    })

    let alltext = document.querySelectorAll("#text_1,#text_2,#text_3,#text_4,#text_5,#text_6,#innerdiv6,#innerdiv1")

    gsap.to("#text_1,#text_2,#text_3,#text_4,#text_5,#text_6,#innerdiv6,#innerdiv1", {
        backgroundColor: "transparent",
        delay: 1,
        transition: "all ease 2s"
    })
})

let sec2 = document.querySelector("#section_2")
let sec3 = document.querySelector("#section_3")
let sec4 = document.querySelector("#section_4")
let sec5 = document.querySelector("#section_5")
let sec6 = document.querySelector("#section_6")

let text1 = document.querySelector("#overlay #text_1")
let text2 = document.querySelector("#overlay #text_2 h1")
let text3 = document.querySelector("#overlay #text_3")
let text4 = document.querySelector("#overlay #text_4")
let text5 = document.querySelector("#overlay #text_5")
let text6 = document.querySelector("#overlay #text_6")

let overlay1 = document.querySelector(".container1 #overlay_1")
let overlay2 = document.querySelector(".container1 #overlay_2")
let overlay3 = document.querySelector(".container1 #overlay_3")
let overlay4 = document.querySelector(".container1 #overlay_4")

var cursor = document.querySelector("#cursor")
function cursorEffect() {
    body.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y
        })
    })

    body.addEventListener("mouseenter", function (dets) {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1
        })
    })

    body.addEventListener("mouseleave", function (dets) {
        gsap.to("#cursor", {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect();

gsap.from("#overlay_1", {
    width: "67vw",
    left: "0%",
    scrollTrigger: {
        trigger: "#overlay_1",
        scroller: "body",
        start: "top 120%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.from("#overlay_2", {
    width: "66vw",
    left: "0%",
    scrollTrigger: {
        trigger: "#overlay_2",
        scroller: "body",
        start: "top 120%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.from("#overlay_3", {
    width: "60vw",
    left: "0%",
    scrollTrigger: {
        trigger: "#overlay_3",
        scroller: "body",
        start: "top 120%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.from("#overlay_4", {
    width: "65vw",
    left: "0%",
    scrollTrigger: {
        trigger: "#overlay_4",
        scroller: "body",
        start: "top 120%",
        end: "bottom 10%",
        scrub: 3
    }
})

container1.style.display = "inline-block"
container2.style.display = "inline-block"

let c2elem1 = document.querySelector("#section_2 #elem1")
let c2elem2 = document.querySelector("#section_3 #elem2")
let c2elem3 = document.querySelector("#section_4 #elem3")
let c2elem4 = document.querySelector("#section_5 #elem4")
let c2elem5 = document.querySelector("#section_6 #elem5")

gsap.to("#section_2 #elem1", {
    x: 300,
    stagger: .1,
    width: "30%",
    left: "12vw",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#section_2 #elem1",
        scroller: "body",
        start: "top 130%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.to("#section_3 #elem2", {
    x: 650,
    stagger: .1,
    width: "40%",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#section_3 #elem2",
        scroller: "body",
        start: "top 100%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.to("#section_4 #elem3", {
    x: 750,
    stagger: .1,
    width: "20%",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#section_4 #elem3",
        scroller: "body",
        start: "top 100%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.to("#section_4 #elem3", {
    x: 700,
    stagger: .1,
    width: "30%",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#section_4 #elem3",
        scroller: "body",
        start: "top 100%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.to("#section_5 #elem4", {
    x: 800,
    stagger: .1,
    width: "20%",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#section_5 #elem4",
        scroller: "body",
        start: "top 100%",
        end: "bottom 10%",
        scrub: 3
    }
})

gsap.to("#section_6 #elem5", {
    x: 890,
    stagger: .1,
    width: "40%",
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#section_3 #elem2",
        scroller: "body",
        start: "top 50%",
        end: "bottom 10%",
        scrub: 3
    }
})

let card = document.querySelector(".container2 #card")
container2.addEventListener("mousemove", function (dets) {
    card.style.left = dets.x + "px"
    card.style.top = dets.y + "px"
    card.style.transition = "all ease -3s"
})

let one = document.querySelector("#card #img1 #one")
sec2.addEventListener("mouseenter", function () {
    one.style.opacity = 100
    one.style.transition = "all ease .3s"
})
sec2.addEventListener("mouseleave", function () {
    one.style.opacity = 0
})

let two = document.querySelector("#card #img1 #two")
sec3.addEventListener("mouseenter", function () {
    two.style.opacity = 100
    two.style.transition = "all ease .3s"
})
sec3.addEventListener("mouseleave", function () {
    two.style.opacity = 0
})

let three = document.querySelector("#card #img1 #three")
sec4.addEventListener("mouseenter", function () {
    three.style.opacity = 100
    three.style.transition = "all ease .3s"
})
sec4.addEventListener("mouseleave", function () {
    three.style.opacity = 0
})

let four = document.querySelector("#card #img1 #four")
sec5.addEventListener("mouseenter", function () {
    four.style.opacity = 100
    four.style.transition = "all ease .3s"
})
sec5.addEventListener("mouseleave", function () {
    four.style.opacity = 0
})

let five = document.querySelector("#card #img1 #five")
sec6.addEventListener("mouseenter", function () {
    five.style.opacity = 100
    five.style.transition = "all ease .3s"
})
sec6.addEventListener("mouseleave", function () {
    five.style.opacity = 0
})

let image = document.querySelector(".container3 #image")
gsap.from(image, {
    y:-100,
    opacity: 0,
    scale: 0.5,
    // transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: image,
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3
    }
})

image.addEventListener("mouseenter", function () {
    cursor.style.backgroundColor = "transparent"
    cursor.style.transform = "translate(10%, 100%)"
    cursor.style.transition = "all ease .1s"
    cursor.style.border = "1px solid white"
    cursor.style.height = "70px"
    cursor.style.width = "  70px"
    cursor.style.borderRadius = "100%"
})

image.addEventListener("mouseleave", function () {
    cursor.style.backgroundColor = "rgb(235, 89, 57)"
    cursor.style.border = "none"
    cursor.style.height = "20px"
    cursor.style.width = "20px"
})

let img = document.querySelector(".container3 #img")
gsap.from(img, {
    x: -900,
    opacity: 0,
    scale: 0.5,
    rotate: "70deg",
    transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: img,
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3
    }
})

img.addEventListener("mouseenter", function () {
    cursor.style.backgroundColor = "transparent"
    cursor.style.transform = "translate(10%, 100%)"
    cursor.style.transition = "all ease .1s"
    cursor.style.border = "1px solid black"
    cursor.style.height = "70px"
    cursor.style.width = "  70px"
    cursor.style.borderRadius = "100%"
})

img.addEventListener("mouseleave", function () {
    cursor.style.backgroundColor = "rgb(235, 89, 57)"
    cursor.style.border = "none"
    cursor.style.height = "20px"
    cursor.style.width = "20px"
})

let img2 = document.querySelector(".container3 #img2")
gsap.from(img2, {
    x: 1800,
    opacity: 0,
    delay: 3,
    rotate: "70deg",
    transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: img,
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3
    }
})

img2.addEventListener("mouseenter", function () {
    cursor.style.backgroundColor = "transparent"
    cursor.style.transform = "translate(10%, 100%)"
    cursor.style.transition = "all ease .1s"
    cursor.style.border = "1px solid black"
    cursor.style.height = "70px"
    cursor.style.width = "  70px"
    cursor.style.borderRadius = "100%"
})

img2.addEventListener("mouseleave", function () {
    cursor.style.backgroundColor = "rgb(235, 89, 57)"
    cursor.style.border = "none"
    cursor.style.height = "20px"
    cursor.style.width = "20px"
})

let text_wrapper = document.querySelectorAll(".container4 #text_wrapper span")

gsap.from(text_wrapper, {
    x: -1000,
    duration: 10,
    ease: "none",
    repeat: -1,
});

let component_1 = document.querySelector(".container5 #component_1")
let component_2 = document.querySelector(".container5 #component_2")
let container5_h3 = document.querySelector(".container5 h3")

gsap.to(component_1, {
    x: -300,
    rotate: "-30deg",
    transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: component_1,
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3
    }
})

gsap.to(component_2, {
    x: 1000,
    rotate: "30deg",
    transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: component_2,
        scroller: "body",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 3
    }
})

gsap.to(container5_h3, {
    fontSize: "2.5vw",
    opacity: 1,
    transition: "all ease .8s",
    scrollTrigger: {
        trigger: container5_h3,
        scroller: "body",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 3
    }
})

let component_3 = document.querySelector(".container5 #component_3")
let component_4 = document.querySelector(".container5 #component_4")

gsap.to(component_3, {
    x: -300,
    marginTop: "-5vh",
    rotate: "-30deg",
    transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: component_3,
        scroller: "body",
        start: "top 110%",
        end: "bottom 80%",
        scrub: 3
    }
})

gsap.to(component_4, {
    x: 1000,
    marginTop: "-5vh",
    rotate: "30deg",
    transform: "translate(-50%, -50%)",
    scrollTrigger: {
        trigger: component_4,
        scroller: "body",
        start: "top 110%",
        end: "bottom 80%",
        scrub: 3
    }
})


