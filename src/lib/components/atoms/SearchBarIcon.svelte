<script>
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<div class="searchBox">
	<div class="searchInput">Search Resources</div>
	<div class="searchButton">
		<i class="material-icons"> search </i>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.searchBox {
		background: var(--color--text-inverse);
		height: 50px;
		border-radius: 40px;
		padding: 10px;
		cursor: pointer;
	}

	.searchButton {
		color: var(--color--text-inverse);
		float: right;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: var(--color--text-shade);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.searchInput {
		border: none;
		background: none;
		outline: none;
		float: left;
		color: var(--color--text-shade);
		font-size: 16px;
		transition: 0.4s;
		line-height: 30px;
		width: 155px;
		padding: 0 6px;
	}

	@include for-phone-only {
		.searchInput {
			display: none;
		}
	}
</style>
