/**
 * A class that represents a number value that can be animated
 */
export class AnimatedValue {
	value: number
	target: number
	speed: number

	static threshold = 1e-10

	constructor(value: number) {
		this.value = value
		this.target = value
		this.speed = 0.1
	}

	/**
     Updates the target to the given value
     */

	animate_to(target: number) {
		this.target = target
	}

	/**
	 * Gradually updates the value towards the target
	 */
	update() {
		const delta = this.target - this.value
		if (delta === 0) return
		if (Math.abs(delta) < AnimatedValue.threshold) {
			this.value = this.target
		} else {
			this.value += delta * this.speed
		}
	}
}
