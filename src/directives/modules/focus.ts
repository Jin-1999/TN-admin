import type { Directive, DirectiveBinding } from "vue";
const focus: Directive = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		console.log("mounted");
	},
	updated(el: HTMLElement, binding: DirectiveBinding) {
		console.log("updated");
	}
};

export default focus;
