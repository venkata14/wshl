<script>
	export let links;

	let isOpen = false;

	// Toggle the dropdown menu
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// Close the dropdown menu when clicked outside
	// @ts-ignore
	function closeDropdown(event) {
		if (!event.target.closest('.dropdown-container')) {
			isOpen = false;
		}
	}
</script>

<div class="dropdown-container">
	<button class="dropdown-button" on:click={toggleDropdown}> Menu </button>
	<div class="dropdown-content" style:--dropdown-display={isOpen ? 'block' : 'none'}>
		{#each links as l}
			<a on:click={toggleDropdown} href={l.href}>{l.title}</a>
		{/each}
	</div>
</div>

<style>
	.dropdown-container {
		position: relative;
		display: inline-block;
	}

	.dropdown-button {
		background-color: inherit;
		color: var(--color--text);
		border: none;
		cursor: pointer;
	}

	.dropdown-content {
		background-color: var(--color--page-background);
		display: var(--dropdown-display);
		position: absolute;
		/* background-color: white; */
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		width: max-content;
		margin-top: 10px;
	}

	.dropdown-content a {
		color: var(--color--text);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: var(--color--secondary);
	}
</style>
