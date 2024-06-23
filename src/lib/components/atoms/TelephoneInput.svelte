<script lang="ts">
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
	import type { DetailedValue, CountryCode, E164Number } from 'svelte-tel-input/types';

	// Any Country Code Alpha-2 (ISO 3166)
	let selectedCountry: CountryCode | null = 'US';

	// You must use E164 number format. It's guarantee the parsing and storing consistency.
	let value: E164Number | null = '';

	// Validity
	export let valid = true;

	// Optional - Extended details about the parsed phone number
	export let detailedValue: DetailedValue | null = null;
</script>

<div class="wrapper">
	<TelInput
		country={selectedCountry}
		bind:value
		bind:valid
		bind:detailedValue
		class="basic-tel-input {!valid ? 'invalid' : ''}"
	/>
</div>

<style>
	.wrapper :global(.basic-tel-input) {
		height: 32px;
		padding-left: 12px;
		padding-right: 12px;
		border-radius: 6px;
		border: 1px solid;
		outline: none;
	}

	.wrapper :global(.country-select) {
		height: 36px;
		padding-left: 12px;
		padding-right: 12px;
		border-radius: 6px;
		border: 1px solid;
		outline: none;
	}

	.wrapper :global(.invalid) {
		border-color: red;
	}
</style>
