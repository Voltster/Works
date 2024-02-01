function loading() {
    let timeLine = gsap.timeline()

    // Move yellow loader top -100
    timeLine.to("#yellowLoader1", {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out"
    })

    // // Move yellow loader top 100 show after video
    timeLine.from("#yellowLoader2", {
        top: "100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out"
    }, "anim")

    timeLine.to("#loader h1", {
        color: "black",
        delay: 0.2
    }, "anim")

    timeLine.to("#loader", {
        delay: 0.2,
        opacity: 0
    })
    // set loader display none
    timeLine.to("#loader", {
        display: "none"
    })
}
loading()

function locomotive() {
    // Locomotive
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    // Instance method

    document.querySelector('.backToTop Button').addEventListener("click", function () {
        console.log("hello")
        scroll.scrollTo(0)
    })




    var elems = document.querySelectorAll(".elem")
    var projectSection = document.querySelector('#project')

    elems.forEach(function (elem) {
        // console.log(elem)
        elem.addEventListener("mouseenter", function () {
            var bgImg = elem.getAttribute("data-img")
            // console.log(bgImg);
            projectSection.style.backgroundImage = `Url(${bgImg})`
            // projectSection.style.backgroundColor = "red"
        })
    })
}

locomotive()