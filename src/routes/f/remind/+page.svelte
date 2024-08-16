<script lang="ts">
	import TelephoneInput from '$lib/components/atoms/TelephoneInput.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import ListItems from '$lib/components/organisms/ListItems.svelte';
	import type { BlogPost, ListObj } from '$lib/utils/types';
	import type { DetailedValue } from 'svelte-tel-input/types';

	export let data: {
		posts: BlogPost[];
	};

	let selectedDataTracker: ListObj[] = [];
	let searchText: string;
	let surveyLink: string;

	let valid = true;
	let detailedValue: DetailedValue | null = null;

	let errorMessage: string = '';
	let successMessage: string = '';

	function isValidURL(url: string): boolean {
		try {
			new URL(url);
			return true;
		} catch (_) {
			return false;
		}
	}

	async function handleSubmit(e: any) {
		e.preventDefault();

		// set filters and display errors

		// check Link
		const validUrl = isValidURL(surveyLink);
		if (surveyLink && surveyLink != '' && !validUrl) {
			console.error('Invalid Link');
			errorMessage = 'Invalid Survey Link';
			return;
		}
		if (surveyLink && surveyLink.length > 50) {
			console.error('Link too long. Max 50 characters.');
			errorMessage = 'Link too long. Max 50 characters.';
			return;
		}
		// check phone number
		if (!(valid && detailedValue && detailedValue?.phoneNumber !== '')) {
			console.error('Invalid Phone Number/Typing');
			errorMessage = 'Invalid Phone Number/Typing';
			return;
		}
		// check that there is atleast one resource selected
		if (selectedDataTracker.length < 1) {
			console.error('You need to choose a resource to remind the patient of.');
			errorMessage = 'Please choose a resource to send!';
			return;
		}

		const response = await fetch('/a/remind', {
			method: 'POST',
			body: JSON.stringify({
				phoneNumber: detailedValue?.phoneNumber,
				surveyLink,
				selectedDataTracker
			})
		});

		// Instructions on after POST request
		if (response.ok) {
			console.log('Form submitted successfully!');
			successMessage = 'Message Sent!';
			errorMessage = '';

			// reset to prevent spam
			detailedValue = null;
		} else {
			console.error('Error submitting form:', await response.text());
			successMessage = '';
			errorMessage = 'There was an error, your message was unable to go through.';
		}
	}

	/**
	 * searchTerm: search term
	 * resources: list of resources in BlogPost format
	 *
	 * This function takes a search term and returns a filtered list
	 */
	function filterResources(searchTerm: string, resources: BlogPost[]): BlogPost[] {
		if (searchTerm && !(searchTerm === '')) {
			const searchQuery = searchTerm.toLowerCase();
			const filteredResources = resources.filter((item) =>
				item.title.toLowerCase().includes(searchQuery)
			);
			return filteredResources;
		}

		return resources;
	}

	$: filteredResources = filterResources(searchText, data.posts);
</script>

<div class="container">
	<About aboutMessage={'remind'} />

	<form on:submit={handleSubmit}>
		<div class="left">
			<div class="left-container">
				<span>
					<div class="title">Phone Number</div>
					<TelephoneInput bind:valid bind:detailedValue />
				</span>

				<div class="break"></div>

				<label for="search"
					>Search/Select Resources
					<input
						type="text"
						id="search"
						name="search"
						placeholder="Resource name ..."
						bind:value={searchText}
					/>
				</label>

				<div class="break"></div>

				<label for="survey"
					>Survey Link <div style="font-size: smaller;">(50 chars max)</div>
					<input
						type="text"
						name="survey"
						id="survey"
						placeholder="https:// ..."
						bind:value={surveyLink}
					/>
				</label>

				<div class="break"></div>

				<button type="submit">Send Reminder!</button>

				<div class="break"></div>

				<div class="success center">
					{successMessage}
				</div>

				<div class="error center">
					{errorMessage}
				</div>
			</div>
		</div>
		<div class="right">
			<ListItems bind:selectedDataTracker iterData={filteredResources} />
		</div>
	</form>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	form {
		display: flex;
		position: relative;
		align-items: stretch;

		@include for-phone-only {
			padding-left: 0;
			padding-right: 0;
			flex-direction: column;
		}

		@include for-tablet-portrait-up {
			height: 500px;
			padding-right: 30px;
			padding-left: 30px;
		}

		@include for-tablet-landscape-up {
			height: 500px;
			// padding-right: 150px;
			// padding-left: 150px;
		}
	}

	.left {
		// height: fit-content;
		width: 50%;
		flex-grow: 1;
		width: auto;
		border: 2px solid gray;
		border-radius: 20px;

		margin: 0.5em;
		padding: 0.5em;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.left-container {
		display: block;
		position: relative;
		width: min-content;
		margin-left: auto;
		margin-right: auto;

		@include for-phone-only {
			margin: 30px 0;
		}

		* {
			width: 100%;
		}

		.break {
			display: block;
			width: 100%;
			height: 1.2rem;
		}
	}

	input {
		height: 32px;
		background-color: transparent;
		border: 1px solid;
		border-radius: 6px;
		outline: none;
		padding: 0 12px;
	}

	.right {
		width: 50%;
		flex-grow: 1;
		border: 2px solid gray;
		border-radius: 20px;

		margin: 0.5rem;
		padding: 0.5em;

		overflow: scroll;

		@include for-phone-only {
			width: auto;
		}
	}

	.center {
		text-align: center;
	}

	.success {
		color: rgb(12, 98, 12);
	}

	.error {
		color: rgb(169, 13, 13);
	}
</style>
