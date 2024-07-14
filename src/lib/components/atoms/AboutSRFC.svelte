<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
</script>

<div class="info">
	<h2>
		What is the
		<SparklingHighlight color="secondary"
			>Robert R. Frank Student Run Free Clinic?</SparklingHighlight
		>
	</h2>
	<p>
		The Robert R. Frank Student-Run Free Clinic (SRFC) is a fully functional, not-for-profit primary
		care clinic that provides completely free care to the uninsured people of Metro Detroit, and is
		entirely run by students from the Wayne State University School of Medicine.
	</p>
	<p>
		"To put it simply, it is our duty as medical students to help those in need to the best of our
		abilities. Medicine is not only about treating medical conditions, it is about educating our
		community and fostering a trusting relationship. Accessible healthcare is a basic human right
		and depriving people of it is unjust. At SRFC, we help people curb addiction, provide regular
		check-ups and medications, and improve their overall quality of care." ​-Zara Sragi, SRFC
		President
	</p>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

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
</style>
