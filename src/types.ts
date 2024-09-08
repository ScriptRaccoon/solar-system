export interface Planet {
	name: string
	distance: number // in km (from the sun)
	diameter: number // in km
	period: number // in days
	color: string
	draw_scale: number
}

export interface Position {
	x: number
	y: number
}
