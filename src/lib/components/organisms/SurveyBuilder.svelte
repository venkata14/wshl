<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { capitalizeFirstLetter } from '$lib/utils/utils';

	import simple from '$lib/data/survey/simple.json';
	import Button from '../atoms/Button.svelte';

	export let screenQuestions;
	let results = {};

	function buildResult(ans, ques, type, defaultAns) {
		if (type === 'radio') {
			results[ques] = ans;
		}
	}

	function completeResults() {
		// For questions that were not answered, this autofill the results var with the default answer for each unanswered question

		for (let i = 0; i < screenQuestions.length; i++) {
			const ele = screenQuestions[i];

			// setting the default answer if no question in the "results" variable
			if (!Object.keys(results).includes(ele.question)) {
				results[ele.question] = ele.defaultAnswer;
			}
		}
	}

	const dispatch = createEventDispatcher();

	function handleSubmit() {
		completeResults();
		dispatch('results', {
			results
		});
	}
</script>

{#if screenQuestions && screenQuestions.length > 0}
	<div>
		{#each screenQuestions as screenItem}
			<form>
				<fieldset class="">
					<legend>{screenItem.question}</legend>
					{#if screenItem.type === 'radio'}
						{#each screenItem.answers as answer}
							<div class="">
								<input
									type="radio"
									name="radio"
									id={screenItem.question + answer}
									on:change={(e) =>
										buildResult(
											answer,
											screenItem.question,
											screenItem.type,
											screenItem.defaultAnswer
										)}
								/>
								<label for={screenItem.question + answer}>{capitalizeFirstLetter(answer)}</label>
							</div>
						{/each}
					{/if}
				</fieldset>
			</form>
		{/each}
		<Button type="button" on:click={handleSubmit}>Submit</Button>
		<br />
	</div>
{/if}

<style lang="scss">
	fieldset {
		padding: 1em;
		margin: 1em;
	}
</style>
