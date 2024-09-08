import { clear_canvas } from "./canvas"
import { draw_all_orbits, draw_planets } from "./planet"

/**
 * Scale for drawing
 */
let scale = 0.000001

/**
 * Offset for drawing
 */
const offset = { x: 0, y: 0 }

/**
 * Speed for planets to move
 */
const speed = 10

/**
 * Increases the scale for drawing
 */
function increase_scale() {
	scale *= 1.1
}

/**
 * Decreases the scale for drawing
 */
function decrease_scale() {
	scale /= 1.1
}

/**
 * Handles key presses
 */
document.addEventListener("keydown", (event) => {
	if (event.key === "+") {
		increase_scale()
	} else if (event.key === "-") {
		decrease_scale()
	} else if (event.key === "ArrowUp") {
		offset.y += 40
	} else if (event.key === "ArrowDown") {
		offset.y -= 40
	} else if (event.key === "ArrowLeft") {
		offset.x += 40
	} else if (event.key === "ArrowRight") {
		offset.x -= 40
	}
})

/**
 * Main draw loop
 */
function draw() {
	clear_canvas()
	draw_all_orbits(offset, scale)
	const time = performance.now() / 1000
	draw_planets(speed * time, offset, scale)
	requestAnimationFrame(draw)
}

draw()
