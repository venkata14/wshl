<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
</script>

<div class="info">
	<h2>
		<SparklingHighlight color="secondary">Remind Patients of their Resources</SparklingHighlight>
	</h2>
	<p>Explaining what this feature is</p>
	<p>Explaining more of what this feature is.</p>
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
