export const canvas = document.querySelector("canvas")!
export const ctx = canvas.getContext("2d")!

/**
 * Prepares the canvas for drawing
 */
function prepare_canvas() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	ctx.translate(canvas.width / 2, canvas.height / 2)
	ctx.lineWidth = 2
	ctx.textAlign = "center"
	ctx.textBaseline = "top"
	ctx.font = "12px Arial"
}

window.addEventListener("resize", prepare_canvas)
prepare_canvas()

/**
 * Clears the canvas
 */
export function clear_canvas() {
	ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
}
