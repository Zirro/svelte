/* generated by Svelte vX.Y.Z */
import { create_ssr_component } from "svelte/internal.js";
import { onDestroy, onMount } from "svelte";

function preload(input) {
	return output;
}

function foo() {
	console.log('foo');
}

function swipe(node, callback) {
	// TODO implement
}

const SvelteComponent = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	onMount(() => {
		console.log('onMount');
	});

	onDestroy(() => {
		console.log('onDestroy');
	});

	return ``;
});

export default SvelteComponent;
export { preload };