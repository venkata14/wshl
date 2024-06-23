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
	export let resourceTextDescription: string = "";

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

		const response = await fetch('/api', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			console.log('Form submitted successfully!');
			responceFromServer = 'success';
			// Update UI or redirect as needed
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
				<div class="small warning">Please enter a valid phone number!</div>
			{:else if responceFromServer === 'before'}{:else if responceFromServer === 'success'}
				<div class="small">Message Sent!</div>
			{:else if responceFromServer === 'error'}
				<div class="small warning">
					There was an error, sorry for the inconvenience, please try again at another time.
				</div>
			{:else if responceFromServer === 'invalid'}
				<div class="small warning">Invalid Phone Number/Typing.</div>
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
		align-items: center;
		justify-content: center;
	}
	.small {
		font-size: small;
	}
	.warning {
		color: red;
	}
</style>
