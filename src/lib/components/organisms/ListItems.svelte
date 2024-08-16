<script lang="ts">
	import Card2 from '../atoms/Card2.svelte';
	import type { BlogPost, ListObj } from '$lib/utils/types';

	export let iterData: BlogPost[] | undefined = undefined;
	// This is a var that updates to keep track of what cards were selected
	export let selectedDataTracker: ListObj[] = [];

	function updateTracker(d: ListObj): undefined {
		if (d.selected) {
			// if true, add to list
			selectedDataTracker.push(d);
			// this is so that everytime this updates, svelte sees this as a variable update and rerenders the UI
			selectedDataTracker = selectedDataTracker;
		} else {
			// if false, remove from list
			selectedDataTracker = selectedDataTracker.filter((item) => item.cardSlug != d.cardSlug);
		}
	}
</script>

{#if iterData}
	{#each iterData as d}
		<Card2
			selected={// selected will be true if the find function was able to find something
			selectedDataTracker.find((item) => item.cardSlug === d.slug) !== undefined}
			on:updateSelected={(e) => updateTracker(e.detail)}
			cardTitle={d.title}
			cardSlug={d.slug}
		>
			<div slot="content">{d.title}</div>
		</Card2>
	{/each}
{/if}
