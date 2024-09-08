export function is_mobile() {
	return "ontouchstart" in document.documentElement
}
