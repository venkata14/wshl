<script lang="ts">
	import FeaturesIcon from '$lib/icons/features.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';

	export let title: string | undefined = undefined;
	export let left: string | undefined = undefined;
	export let right: string | undefined = undefined;
	export let getStarted: string | undefined = undefined;
	export let about: string | undefined = undefined;
</script>

<section id="hero">
	<h1 class="hello">{title || 'WSHL Resource Bank'}</h1>
	<p class="intro">
		<span class="left">{left || 'Find Resources ...'}</span>
		<span class="right">{right || 'and send to patients'}</span>
	</p>
	<div class="ctas">
		<Sparkles>
			<Button href={getStarted || '/#engine'}>
				<!-- <GitHubIcon slot="icon" /> -->
				Get started
			</Button>
		</Sparkles>
		<Button color="primary" href={about || '/#about'}>
			<FeaturesIcon slot="icon" />
			About
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
