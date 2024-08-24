<script lang="ts">
	// @ts-nocheck

	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import SurveyBuilder from '$lib/components/organisms/SurveyBuilder.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import { capitalizeFirstLetter } from '$lib/utils/utils';
	import simple from '$lib/data/survey/simple.json';
	import type { BlogPost, ScreenSchema } from '$lib/utils/types';

	export let data;

	const resources: BlogPost[] = data.posts;
	let filteredResources: BlogPost[];
	let resourcesObj: any = {};

	function recommender(screen: ScreenSchema[], results) {
        // reset the filtered resources
        resourcesObj = {}
        filteredResources = []
		// First find the questions that screened positive
		const positiveScreen = screen.filter((ele) => {
			if ((ele.type = 'radio')) {
				return results[ele.question] === ele.positiveAnswer;
			}
		});

		// extract the keywords from above
		const keywords = positiveScreen.map((item) => item.keywords).reduce((a, l) => a.concat(l), []);

        // set resources for each keyword
		keywords.forEach((key) => {
			const r = resources.filter((resource) => {
				return resource.tags.includes(key);
			});
			resourcesObj[key] = r;
		});

        console.log(resourcesObj)

		// combined filtered list of resources that have the keywords extracted from above
		filteredResources = resources.filter((resource) =>
			resource.tags.some((tag) => keywords.includes(tag))
		);
	}
</script>

<div class="container">
	<SurveyBuilder
		screenQuestions={simple.screen}
		on:results={(e) => recommender(simple.screen, e.detail.results)}
	/>

	{#if Object.keys(resourcesObj).length > 0 && filteredResources.length > 0}
		<div>
			{#each Object.keys(resourcesObj) as resourceType}
				<!-- copied this and the style from /resouces page -->
				<ContentSection title={`${capitalizeFirstLetter(resourceType)} Resources`}>
					<div class="grid">
						{#each resourcesObj[resourceType] as post}
							<BlogPostCard
								title={post.title}
								coverImage={post.coverImage}
								excerpt={post.excerpt}
								showImage={false}
								slug={post.slug}
								tags={post.tags}
							/>
						{/each}
					</div>
				</ContentSection>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

		@include for-tablet-landscape-up {
			// Select every 6 elements, starting from position 1
			// And make it take up 6 columns
			> :global(:nth-child(6n + 1)) {
				grid-column: span 6;
			}
			// Select every 6 elements, starting from position 2
			// And make it take up 3 columns
			> :global(:nth-child(6n + 2)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 3
			// And make it take up 3 columns
			> :global(:nth-child(6n + 3)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 4, 5 and 6
			// And make it take up 2 columns
			> :global(:nth-child(6n + 4)),
			:global(:nth-child(6n + 5)),
			:global(:nth-child(6n + 6)) {
				grid-column: span 2;
			}
		}
	}
</style>
