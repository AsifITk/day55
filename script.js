let circle = document.querySelector(".circle")
let left = document.querySelector(".left")
let slider = document.querySelector(".slider")
let num = document.querySelector(".num")

circle.addEventListener("drag", (e) => {
  const width = slider.getBoundingClientRect().left;
  const x = e.clientX - width
  if (x >= 0 && x <= width) {
    circle.style.left = `${x}px`
    left.style.width = `${x}px`
    num.textContent = `Value: ${Math.ceil(x / width * 100)}`
  }
})





