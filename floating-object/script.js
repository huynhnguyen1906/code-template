const floatingArrow = document.querySelector(".floating-obj")
let floating = false
function floatDiv() {
	const currentTop = parseFloat(getComputedStyle(floatingArrow).top) || 0
	const offset = floating ? -20 : 20
	const newTop = currentTop + offset
	floatingArrow.style.top = newTop + "px"
	floating = !floating
}
setInterval(floatDiv, 1500)
