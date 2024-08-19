<script>
	import Search from '$lib/components/organisms/Search.svelte';
	import { onMount } from 'svelte';
	let showSearch = false;

	onMount(() => {
		showSearch = true;
	});
</script>

<div style="height: 100vh;"></div>

{#if showSearch}
	<Search on:outsideClickEvent />
{/if}
