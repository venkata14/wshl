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
	<Hero />
	<About />
	{#if posts && posts.length > 0}
		<Engine {posts} {compPosts} {resourceSummary} />
		<br />
		<RecentPosts {posts} />
	{/if}
	<Features {features} />
</div>
