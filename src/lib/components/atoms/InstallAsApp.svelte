<script>
</script>

<div class="info">
	<h4>Install this Page as an App!</h4>
	<p>For easier access, download this Website as an App on your iPhone or Android Device!</p>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.info {
		display: flex;
		flex-direction: column;
		text-align: center;
		gap: 10px;

		h4 {
			text-decoration: underline;

			@include for-phone-only {
				text-align: center;
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
