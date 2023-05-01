let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".images-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100

slideBtnLeft.addEventListener("click", handleLeftBtn)
function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
slideBtnRight.addEventListener("click", handleRightBtn)
function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

// render function

function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
    handleRightBtn()
    }
    else (startSlider=0)


}
setInterval(renderSlideAuto, 3000)



// section-3 furniture section

const leftBtn = document.querySelector(".sec3-l-btn")
const rightBtn = document.querySelector(".sec3-r-btn")

rightBtn.addEventListener('click',function(event) {
    console.log('done');
    const conent =document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefault();
})


leftBtn.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();
})


