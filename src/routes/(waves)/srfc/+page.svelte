<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost, ResourceMasterOrg } from '$lib/utils/types';
	import Engine from '$lib/components/organisms/Engine.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
		compPosts: ResourceMasterOrg;
		resourceSummary: Feature[];
	};

	let { features, posts, compPosts, resourceSummary } = data;
</script>

<div class="container">
	<Hero
		title={'Robert R. Frank Student Run Free Clinic'}
		left={' '}
		right={' '}
		getStarted={'/srfc/#engine'}
		about={'/srfc/#about'}
	/>
	<br />
	<br />
	<About aboutMessage={'SRFC'} imageMessage={'SRFC Image'} />
	{#if posts && posts.length > 0}
		<Engine
			title={'SRFC Resources'}
			description={'Click on the categories to access these resources!'}
			{compPosts}
			{resourceSummary}
		/>
		<br />
	{/if}
	<Features {features} />
</div>
