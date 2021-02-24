//only slide one carousel...
var carousel = $(".mycarousel")[0]
var items = carousel.getElementsByClassName("carousel-item")
var activeIdx = 0
var maxIdx = items.length


function slideOne() {
    lastIdx = activeIdx
    items[activeIdx].setAttribute("class", "carousel-item active animate__animated animate__fadeOut animate__faster")
    activeIdx += 1
    if (activeIdx >= maxIdx)
        activeIdx = 0    
    
    function fadeOut(){items[lastIdx].setAttribute("class", "carousel-item")
    items[activeIdx].setAttribute("class", "carousel-item active animate__animated animate__slideInRight")
}
    setTimeout(fadeOut, 300)

}

items[0].setAttribute("class", "carousel-item active")
setInterval(slideOne, 5000)