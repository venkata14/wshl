<script lang="ts">
	import InstallAsApp from '../atoms/InstallAsApp.svelte';
	import ArrowLink from '../atoms/ArrowLink.svelte';
	import SurveyDescription from '../atoms/SurveyDescription.svelte';

	export let aboutMessage: 'install_as_app' | 'survey' | string;
	export let orientation: 'right' | 'left' = 'right';

	function getLink() {
		if (aboutMessage === 'install_as_app') {
			return '/f/info/download_app';
		} else if (aboutMessage === 'survey') {
			return '/f/screen';
		}
	}

	const outwardLink = getLink();
</script>

<section
	style={orientation === 'right'
		? 'border-radius: 1em 4em 4em 1em'
		: 'border-radius: 4em 1em 1em 4em; '}
	style:--grid-size={orientation === 'right' ? '500px 250px' : '250px 500px'}
>
	{#if aboutMessage === 'install_as_app'}
		<svelte:component this={InstallAsApp} />
	{:else if aboutMessage === 'survey'}
		<svelte:component this={SurveyDescription} />
	{/if}
	<div class="link" style:--link-order={orientation === 'left' ? '-1' : '1'}>
		<ArrowLink link={outwardLink} textLink={'Learn more'} />
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	section {
		position: relative;
		display: grid;
		grid-template-columns: var(--grid-size);
		align-items: center;
		justify-content: space-around;

		border: 5px solid var(--color--card-background);
		border-radius: 1em 4em 4em 1em;
		box-shadow: 0 5px 10px var(--card-shadow);

		padding: 2em;
		margin: 1em;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.link {
			order: var(--link-order);

			padding: 1em;

			border: 3px solid var(--color--card-background);
			border-radius: 0.5em;
			box-shadow: 0 5px 10px var(--card-shadow);

			display: flex;
			justify-content: center;

			@include for-phone-only {
				order: 1;
				margin-top: 1em;
				padding: 0.5em;
			}

			@include for-tablet-portrait-down {
				order: 1;
				margin-top: 1.5em;
				padding: 0.5em;
			}
		}
	}
</style>
