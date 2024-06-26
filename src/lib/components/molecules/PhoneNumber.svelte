<script lang="ts">
	import TelephoneInput from '../atoms/TelephoneInput.svelte';
	import type { DetailedValue } from 'svelte-tel-input/types';

	let valid = true;
	let detailedValue: DetailedValue | null = null;
	let responceFromServer: 'before' | 'success' | 'error' | 'invalid' = 'before';

	// This is to reset the responeFromServer variable
	$: if (!valid) {
		responceFromServer = 'before';
	}

	export let resourceToSend: 'food' | 'transportation';
	export let resourceTextDescription: string = '';

	async function submitForm(e) {
		e.preventDefault();

		// Filter
		if (!(valid && detailedValue && detailedValue?.phoneNumber !== '')) {
			console.error('Invalid Phone Number/Typing');
			// responceFromServer = 'invalid';
			return;
		}

		const formData = new FormData(e.target);
		formData.append('phoneNumber', detailedValue?.phoneNumber);
		formData.append('resourceToSend', resourceToSend);
		formData.append('resourceTextDescription', resourceTextDescription);

		const response = await fetch('/api1', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			console.log('Form submitted successfully!');
			responceFromServer = 'success';

			// reset to prevent spam
			detailedValue = null
		} else {
			console.error('Error submitting form:', await response.text());
			responceFromServer = 'error';
		}
	}
</script>

<form on:submit={(e) => submitForm(e)}>
	<div>Put in your Phone Number to recieve this Resource over Text!</div>
	<br />
	<div class="container">
		<div>
			<TelephoneInput bind:valid bind:detailedValue />
			{#if !valid}
				<div class="spacing small warning">Please enter a valid phone number!</div>
			{:else if responceFromServer === 'before'}
				<div class="spacing smaller small-width">
					By entering your phone number, you consent to a one time message to receive this resource
					over SMS.
				</div>
			{:else if responceFromServer === 'success'}
				<div class="spacing small">Message Sent!</div>
			{:else if responceFromServer === 'error'}
				<div class="spacing smaller small-width warning">
					There was an error, sorry for the inconvenience, please try again at another time.
				</div>
			{:else if responceFromServer === 'invalid'}
				<div class="spacing small warning">Invalid Phone Number/Typing.</div>
			{/if}

			{#if valid && detailedValue}
				<div class="spacing smaller small-width">
					By Clicking "Submit" you agree to our <a href="/consent-clause" target="_blank" >Consent Clause</a>
				</div>
			{/if}
		</div>
		{#if valid && detailedValue}
			<button>Submit</button>
		{/if}
	</div>
</form>

<style>
	form {
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	button {
		margin-left: 10px;
	}
	.container {
		display: flex;
		align-items: start;
		justify-content: center;
	}
	.small {
		font-size: small;
	}
	.spacing {
		margin-top: 5px;
	}
	.smaller {
		font-size: 8.8pt;
	}
	.small-width {
		width: 250px;
	}
	.warning {
		color: red;
	}
</style>
