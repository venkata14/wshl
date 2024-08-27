<script>
</script>

<div class="info">
	<h4>Patient Screener/Survey</h4>
	<p>
		Screen patients for Social Determinants of Health and connect them with local resources. Perfect
		for those needing quick access to community support.
	</p>
	<p>
		<span>1) Screen Patients with a Built-In Survey</span>
		<span>2) Get Recommended Resources</span>
		<span>3) Connect Patients to Resources</span>
	</p>
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

		p {
			span {
				display: block;
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
		}
	}

	.image {
		width: 220px;
		height: 220px;
		border-radius: 30%;
	}
</style>
