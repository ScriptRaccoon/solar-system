import { AnimatedValue } from "./animated"
import { clear_canvas } from "./canvas"
import { draw_all_orbits, draw_planets } from "./planet"
import { is_mobile } from "./utils"

/**
 * Scale for drawing
 */
const scale = new AnimatedValue(0.000001)

/**
 * x Offset for drawing
 */
const offset_x = new AnimatedValue(0)

/**
 * y Offset for drawing
 */
const offset_y = new AnimatedValue(0)

/**
 * Speed for planets to move
 */
const speed = 10

/**
 * Handles key presses
 */
document.addEventListener("keydown", (event) => {
	if (event.key === "+") {
		scale.animate_to(scale.value * 1.5)
	} else if (event.key === "-") {
		scale.animate_to(scale.value / 1.5)
	} else if (event.key === "ArrowUp") {
		offset_y.animate_to(offset_y.value + 120)
	} else if (event.key === "ArrowDown") {
		offset_y.animate_to(offset_y.value - 120)
	} else if (event.key === "ArrowLeft") {
		offset_x.animate_to(offset_x.value + 120)
	} else if (event.key === "ArrowRight") {
		offset_x.animate_to(offset_x.value - 120)
	}
})

/**
 * Main draw loop
 */
function draw() {
	clear_canvas()
	scale.update()
	offset_x.update()
	offset_y.update()
	const offset_value = { x: offset_x.value, y: offset_y.value }
	draw_all_orbits(offset_value, scale.value)
	const time = performance.now() / 1000
	draw_planets(speed * time, offset_value, scale.value)
	requestAnimationFrame(draw)
}

draw()

if (is_mobile()) {
	window.alert("You need a keyboard to control this application.")
}
