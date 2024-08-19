<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/data/search/search';
	import type { Result } from '$lib/utils/types';

	const dispatch = createEventDispatcher();

	let search: 'loading' | 'ready' = 'loading';
	let searchTerm: string = '';
	let results: Result[] = [];

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
	}

	let element: Element; // Reference to the element

	function dispatchEvent() {
		dispatch('outsideClickEvent');
	}

	function handleClickOutside(event: any) {
		if (element && !element.contains(event.target)) {
			// Detect Outside element click
			dispatchEvent();
		}
	}

	onMount(async () => {
		const posts = await fetch('/a/searchData').then((res) => res.json());
		createPostsIndex(posts);
		search = 'ready';
		// setTimeout to load element
		setTimeout(() => {
			// @ts-ignore
			element.childNodes[0].focus();
		});

		document.addEventListener('click', handleClickOutside);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>

{#if search === 'ready'}
	<div class="search" bind:this={element}>
		<input
			bind:value={searchTerm}
			placeholder="Search"
			autocomplete="off"
			spellcheck="false"
			type="search"
			id="searchTerm"
			name="searchTerm"
		/>

		<div class="results">
			{#if results}
				<ul>
					{#each results as result}
						<li>
							<a href="/{result.slug}" on:click={() => dispatchEvent()}>
								{@html result.title}
							</a>
							<p>{@html result.content}</p>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}

<style>
	.search {
		z-index: 3;
		width: 90vw;
		max-width: 600px;
		position: fixed;
		left: 50%;
		top: 20%;
		translate: -50% -0%;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 30px var(--color--search-border-hue);
		overflow: hidden;

		& input {
			width: 100%;
			padding: 1.5rem;
			color: var(--color--text);
			background-color: var(--color--text-inverse);
			font: inherit;
			border: none;
			outline: none;
		}
	}

	.results {
		max-height: 48vh;
		padding: 1.5rem;
		background-color: var(--color--post-page-background);
		overflow-y: auto;
		scrollbar-width: thin;

		& ul {
			display: grid;
			gap: 1rem;
			padding: 0px;
			margin: 0px;
			list-style: none;

			& li:not(:last-child) {
				padding-block: 0.5rem;
				border-bottom: 1px solid hsl(220 10% 20%);
			}
		}

		& a {
			display: block;
			font-size: 1.5rem;
			color: var(--color--primary);
			text-decoration: none;
			transition: color 0.3s ease;

			&:hover {
				color: var(--color--secondary);
			}
		}
	}
</style>
