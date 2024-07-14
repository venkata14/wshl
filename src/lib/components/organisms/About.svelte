<script lang="ts">
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import AboutWSHL from '../atoms/AboutWSHL.svelte';
	import AboutSRFC from '../atoms/AboutSRFC.svelte';
	import Image from '../atoms/Image.svelte';
	import { theme } from '$lib/stores/theme';

	export let aboutMessage: 'WSHL' | 'SRFC' = 'WSHL';
	export let imageMessage: string | undefined = undefined;

	function changeImage(t: string): string {
		switch (aboutMessage) {
			case 'WSHL':
				if (t === 'auto') {
					if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
						// dark mode
						return '/images/wshl-original-i.webp';
					}
					// light mode
					return '/images/wshl-original.webp';
				} else if (t === 'dark') {
					return '/images/wshl-original-i.webp';
				} else {
					return '/images/wshl-original.webp';
				}
				break;
			case 'SRFC':
				return '/images/pages/srfc.png';
				break;
		}
	}

	let imagePath;
	$: imagePath = changeImage($theme);
</script>

<section id="about">
	{#if aboutMessage === 'WSHL'}
		<svelte:component this={AboutWSHL} />
	{:else if aboutMessage === 'SRFC'}
		<svelte:component this={AboutSRFC} />
	{/if}
	<div class="image">
		<Image src={imagePath} alt={imageMessage || 'WSHL Logo'} borderRadius={true} />
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			width: 220px;
			height: 220px;
			border-radius: 30%;
		}
	}
</style>
