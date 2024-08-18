<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
</script>

<div class="info">
	<h2>
		<SparklingHighlight color="secondary">Remind Patients of their Resources</SparklingHighlight>
	</h2>
	<p>
		Remind patients of their resources with this feature! This feature is an invaluable tool for
		ensuring patients remain aware of the resources available to them, even several days or weeks
		after their visit.
	</p>
	<p>
		To use this feature, simply input the patient’s phone number, select the appropriate resources
		from the list (you can also search for specific resources using the search functionality), and
		send a reminder text directly to the patient.
	</p>
	<p>
		For those interested in gathering feedback, you can easily include a survey link within the
		reminder text. Create a survey using Qualtrics or Google Forms, then paste the link into the
		"Survey Link" section. This step is optional, but it can provide valuable insights into the
		effectiveness of the resources provided. The link can be a maximum of 50 characters long.
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
