<script lang="ts">
	import QRIcon from '$lib/icons/qr.svelte';
	import PrintIcon from '$lib/icons/print.svelte';
	import { createEventDispatcher } from 'svelte';

	export let buttonType: 'qr' | 'print' | null = null;

	const dispatch = createEventDispatcher();

	function dispatchFunc(): undefined {
		dispatch('customButtonClick', {
			type: buttonType
		});
	}
</script>

{#if buttonType}
	<div on:click={dispatchFunc} on:keypress class="border">
		<div class="icon">
			{#if buttonType == 'qr'}
				<QRIcon />
			{:else if buttonType == 'print'}
				<PrintIcon />
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.border {
		border: 1px solid var(--color--text);
		border-radius: 3px;

		&:hover {
			border: 1px solid var(--color--primary);
		}
	}

	.icon {
		margin: 2px;
		transition: all 0.2s ease-in-out;
		width: 24px;
		color: var(--color--text);
		fill: var(--color--text);

		&:hover {
			cursor: pointer;
			color: var(--color--primary);
			fill: var(--color--primary);
			filter: drop-shadow(0px 0px 3px var(--color--primary));
		}
	}
</style>
