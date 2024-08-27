<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost, Feature, ResourceMasterOrg } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let compPosts: ResourceMasterOrg;
	export let resourceSummary: Feature[];
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	let resourcePosts: BlogPost[] | undefined = undefined;

	let switchView: boolean = false;

	// When open the float portion, this is the variable to show what Resource is currently being displayed
	let resourceRender: string = '';

	function handleCardClick(
		resourceType:
			| 'food'
			| 'transportation'
			| 'healthcare'
			| 'supplies'
			| 'jobIncome'
			| 'utilities'
			| 'mental'
			| 'safety'
			| 'physical'
			| 'housing'
			| 'pharmacy'
	): undefined {
		switchView = true;
		resourcePosts = compPosts[resourceType];

		resourceRender = resourceType;
		if (resourceType == 'jobIncome') resourceRender = 'Job/Income';

		// this scrolling is useful on the phone
		if (switchView) {
			const ele = document.getElementById('engine');
			if (ele) {
				ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}

	function closeSwitch(): undefined {
		switchView = false;
	}

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
</script>

<ContentSection
	id="engine"
	title={title || 'Finding Resources'}
	description={description || 'General Category of Resources. Click them to access more Resources!'}
	align="top"
>
	<div style:position="relative" style:width="100%">
		<div
			class="grid"
			style:transform={switchView ? 'translateX(0%)' : ''}
			style:--grid-webpage={switchView ? '1fr' : '1fr 1fr 1fr'}
			style:--grid-phone={switchView ? '0fr' : '1fr'}
			style:width={switchView ? '33%' : '100%'}
		>
			{#each resourceSummary as p}
				<BlogPostCard
					on:cardClick={() => {
						handleCardClick(p.resourceType);
					}}
					slug={undefined}
					title={p.name}
					excerpt={p.description}
					tags={p.tags}
					showImage={false}
				/>
			{/each}
		</div>
		{#if switchView && resourcePosts != undefined}
			<div class="float">
				<div class="close">
					<div>
						<Button on:click={closeSwitch} color="secondary">Close</Button>
					</div>
					<h2 class="float-left">{capitalizeFirstLetter(resourceRender)} Resource</h2>
				</div>
				{#each resourcePosts as post}
					<BlogPostCard
						slug={post.slug}
						title={post.title}
						excerpt={post.excerpt}
						tags={post.tags}
						showImage={true}
						coverImage={post.coverImage}
					/>
					<br />
				{/each}
			</div>
		{/if}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	button {
		margin: 0.5rem 0;
	}
	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: var(--grid-webpage);
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: var(--grid-phone);
			width: 97vw !important;
		}
	}
	.float {
		position: absolute;
		width: 67%;
		height: 100%;
		right: 0;
		top: 0;
		padding: 0 20px;
		overflow: scroll;

		@include for-phone-only {
			width: 100%;
			// height: fit-content;
		}
	}
	.float-left {
		float: left !important;
	}
	.close {
		position: relative;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.1);
	}
	.close > * {
		float: right;
		padding: 10px;
	}
</style>
