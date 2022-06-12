/*
 * Initializing html elements and their styles
 */

let container = document.createElement("div")
let header = document.createElement('h1')
let slider = document.createElement('div')
let larrow = document.createElement('span')
let rarrow = document.createElement('span')
let currImage   = document.createElement('img')

container.style = `
    height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`
header.style = `
    text-align: center;
    padding: 2.5rem 0;
    text-transform: uppercase;
    letter-spacing: .25em;
    font-size: .95em;
`
slider.style = `
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
`
larrow.style = `
    cursor: pointer;
    font-size: 5em;
    padding: .5rem;
    background-color: #444;
    color: #f8f9ff;
    border-radius: .5rem;
    position: absolute;
    top: 45%;
    left: 1rem;
`
rarrow.style = `
    cursor: pointer;
    font-size: 5em;
    padding: .5rem;
    background-color: #444;
    color: #f8f9ff;
    border-radius: .5rem;
    position: absolute;
    top: 45%;
    right: 1rem;
`
currImage.style = `
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: 500px;
    border-radius: 1rem;

    transition: opacity .25s; 
`
document.body.onload = () => {
    header.appendChild(document.createTextNode("Plain javascript slider"))

    larrow.appendChild(document.createTextNode("<"))
    rarrow.appendChild(document.createTextNode(">"))

    currImage.src="/images/ape1.jpeg"

    container.appendChild(header)
    container.appendChild(currImage)
    container.appendChild(larrow)
    container.appendChild(rarrow)

    document.getElementById("root").appendChild(container)
}


/*
 * slider functionality 
 */

images = ["/images/ape1.jpeg", "/images/ape2.jpeg", "/images/ape3.jpeg"]
let imageIndex = 0

currImage.src = images[imageIndex]  // set initial image

rarrow.onclick = ()=>{  // right arrow onclick listener 
    if (imageIndex+1 > images.length-1) 
        imageIndex = 0
    else 
        imageIndex++

    currImage.style.opacity = 0
    setTimeout(() => {
        updateCurrImage()
        currImage.style.opacity = 1
    }, 250)
    
}

larrow.onclick = ()=>{  // left arrow onclick listener
    if (imageIndex-1 < 0)
        imageIndex = images.length-1
    else 
        imageIndex--

    currImage.style.opacity = 0
    setTimeout(() => {
        updateCurrImage()
        currImage.style.opacity = 1
    }, 250)
}


function updateCurrImage() {    // update current image "src" attribute
    currImage.src = images[imageIndex]
}

updateCurrImage()


/*
 * responsive behavior
 */

// mobile devices
let mediaQueryXS = window.matchMedia('(max-width: 567px)')
mediaQueryXS.addEventListener("change", xs)

function xs(e) {
    if (e.matches) {
        container.style['padding'] = 0
        currImage.style['border-radius'] =  0
        currImage.style['width'] = "100%"
    }
}

xs(mediaQueryXS)

// tablets
let mediaQueryMedium = window.matchMedia('(min-width: 567px) and (max-width: 768px)')
mediaQueryMedium.addEventListener("change", medium)

function medium(e) {
    if (e.matches) {
        currImage.style["width"] = "75%"
        currImage.style["border-radius"] = "1rem"
    }
}

medium(mediaQueryMedium)
 

// large devices
let mediaQueryLarge = window.matchMedia('(min-width: 768px)')
mediaQueryLarge.addEventListener("change", large)

function large(e) {
    if (e.matches)
        currImage.style["width"] = "50%"
}

large(mediaQueryLarge)
