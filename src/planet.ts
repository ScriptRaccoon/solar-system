// @ts-check

import { ctx } from "./canvas"
import { PLANETS } from "./data"
import { Planet, Position } from "./types"

/**
 * Gets the position of a planet at a given time
 */
function get_position(planet: Planet, time: number): Position {
	if (planet.period === 0) {
		return { x: 0, y: 0 }
	}
	const x = planet.distance * Math.cos(-(2 * Math.PI * time) / planet.period)
	const y = planet.distance * Math.sin(-(2 * Math.PI * time) / planet.period)

	return { x, y }
}

/**
 * Draws the orbit of a planet
 */
function draw_orbit(planet: Planet, offset: Position, scale: number) {
	ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
	ctx.beginPath()
	ctx.arc(offset.x, offset.y, planet.distance * scale, 0, 2 * Math.PI)
	ctx.stroke()
	ctx.closePath()
}

/**
 * Draws all orbits of the planets
 */
export function draw_all_orbits(offset: Position, scale: number) {
	for (const planet of PLANETS) {
		draw_orbit(planet, offset, scale)
	}
}

/**
 * Draws a planet on the screen at the correct position for the given time
 */
function draw_planet(planet: Planet, time: number, offset: Position, scale: number) {
	ctx.fillStyle = planet.color
	const { x, y } = get_position(planet, time)
	ctx.beginPath()
	ctx.arc(
		offset.x + x * scale,
		offset.y + y * scale,
		planet.draw_scale * (planet.diameter / 2) * scale,
		0,
		2 * Math.PI
	)

	ctx.fill()
	ctx.closePath()

	ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
	ctx.fillText(
		planet.name,
		offset.x + x * scale,
		offset.y + y * scale + planet.draw_scale * (planet.diameter / 2) * scale + 5
	)
}

/**
 * Draws all planets
 */
export function draw_planets(time: number, offset: Position, scale: number) {
	for (const planet of PLANETS) {
		draw_planet(planet, time, offset, scale)
	}
}
