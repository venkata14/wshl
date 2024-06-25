<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
</script>

<div class="container">
	<section id="hero">
		<h1 class="hello">WSHL Resource Bank Messaging Consent Clause</h1>
		<br />
		<br />
		<br />
		<br />
	</section>
	<section id="about">
		<div class="info">
			<p>
				<strong>Mobile Messaging:</strong> By providing your mobile phone number to us, you agree to receive a one
				time text messages (SMS) from WSHL Resource Bank at the mobile number you provided along
				with a feedback request text message (SMS). You will not receive anymore messages from us,
				as such there is no unsubscribe policy as you will not be receiving future messages.You
				acknowledge that message and data rates may apply.
			</p>
				<ul>
                    <li>
                        <strong>Who will receive the messages:</strong> Users who input their phone number.
                    </li>
                    <li>
                        <strong>Types of messages:</strong> A one time text message (SMS) with information/detail about the requested resource and a feedback request message.
                    </li>
                    <li>
                        <strong>Frequency of messages:</strong> Once.
                    </li>
                    <li>
                        <strong>Opt-out instructions:</strong> None, you will not be receiving future messages from WSHL.
                    </li>
                    <li>
                        <strong>Data rates:</strong> Note that users might incur charges from their mobile carrier for receiving messages.
                    </li>
                </ul>
		</div>
	</section>
</div>

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
	}

	#about {
		position: relative;
		display: grid;
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
	}
</style>
