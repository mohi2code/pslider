let slider = document.querySelector("#slider")
let currImage = document.currImage
let larrow = document.querySelector(".larrow")
let rarrow = document.querySelector(".rarrow")

images = ["/images/ape1.jpeg", "/images/ape2.jpeg"]
let imageIndex = 0

currImage.src = images[imageIndex]

rarrow.onclick = ()=>{
    if (imageIndex+1 > images.length-1)
        imageIndex = 0
    else 
        imageIndex++

    updateCurrImage()
}

larrow.onclick = ()=>{
    if (imageIndex-1 < 0)
        imageIndex = images.length-1
    else 
        imageIndex--

    updateCurrImage()
}

function updateCurrImage() {
    currImage.src = images[imageIndex]
}
