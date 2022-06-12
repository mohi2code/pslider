let slider      = document.querySelector("#slider")
let sliderImage = document.querySelector(".slider-image")
let currImage   = document.currImage
let larrow = document.querySelector(".larrow")
let rarrow = document.querySelector(".rarrow")

images = ["/images/ape1.jpeg", "/images/ape2.jpeg"]
let imageIndex = 0

currImage.src = images[imageIndex]  // set initial image

rarrow.onclick = ()=>{  // right arrow onclick listener 
    if (imageIndex+1 > images.length-1)
        imageIndex = 0
    else 
        imageIndex++

    updateCurrImage()
}

larrow.onclick = ()=>{  // left arrow onclick listener
    if (imageIndex-1 < 0)
        imageIndex = images.length-1
    else 
        imageIndex--

    updateCurrImage()
}

// update current image "src" attribute
function updateCurrImage() {
    currImage.src = images[imageIndex]
}

/*
 *  handle responsive behavior
 */

// mobile devices
let mediaQueryXS = window.matchMedia('(max-width: 567px)')
mediaQueryXS.addEventListener("change", xs)

function xs(e) {
    if (e.matches) {
        sliderImage.style = "width: 100%"
        currImage.style = "border-radius: 0"
    }
}

xs(mediaQueryXS)

// tablets
let mediaQueryMedium = window.matchMedia('(min-width: 567px) and (max-width: 768px)')
mediaQueryMedium.addEventListener("change", medium)

function medium(e) {
    if (e.matches) {
        sliderImage.style = "width: 75%"
        currImage.style = "border-radius: 1rem"
    }
}

medium(mediaQueryMedium)
 

// large devices
let mediaQueryLarge = window.matchMedia('(min-width: 768px)')
mediaQueryLarge.addEventListener("change", large)

function large(e) {
    if (e.matches)
        sliderImage.style = "width: 50%"
}

large(mediaQueryLarge)
