<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import SurveyLineOrg from '../atoms/SurveyLineOrg.svelte';
</script>

<footer>
	<div class="wave">
		<FooterWave />
	</div>
	<div class="content">
		<div class="copyright">Webpage created by Venkata Patchigolla.</div>
		<div class="credits">
			Credits: This webpage was built on top of a template created by <a
				href="https://github.com/MatFantinel"
				target="_blank"
				rel="noopener noreferrer">Matheus Fantinel</a
			>.
		</div>
		<SurveyLineOrg />
	</div>
</footer>

<style lang="scss">
	footer {
		height: 340px;
		width: 100%;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		display: grid;
		grid-template-rows: 120px 1fr;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 600;
			text-align: center;

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--text-shade);
			}

			.socials {
				display: flex;
				align-items: center;
				gap: 20px;
			}
		}

		a {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	@media print {
		footer {
			display: none;
		}
	}
</style>
