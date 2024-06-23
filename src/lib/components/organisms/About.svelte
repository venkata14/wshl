<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Image from '../atoms/Image.svelte';
	import { theme } from '$lib/stores/theme';

	function changeImage(t) {
		if (t === 'auto') {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// dark mode
				return "/images/wshl-original-i.webp"
			}
			// light mode
			return "/images/wshl-original.webp"
		} else if (t === 'dark') {
			return '/images/wshl-original-i.webp';
		} else {
			return '/images/wshl-original.webp';
		}
	}

	$: imagePath = changeImage($theme)
</script>

<section id="about">
	<div class="info">
		<h2>
			What is the
			<SparklingHighlight color="secondary">WSHL Resource Bank?</SparklingHighlight>
		</h2>
		<p>
			WSHL Resource Bank is a comprehensive collection of resources available for residents of
			Detroit. Each resource page includes detailed instructions on how to access the resource. If
			you find a resource useful, you can easily send the information to your phone via text!
		</p>
		<p>
			Start by selecting a resource category that interests you. Choose a specific resource, and if
			it meets your needs, simply enter your phone number to text the information to yourself!
		</p>
	</div>
	<div class="image">
		<Image src={imagePath} alt="WSHL Logo" borderRadius={true} />
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
