<script>
	export let link;
	export let textLink;
</script>

<a href={link} class="link">
	<span class="mask">
		<div class="link-container">
			<span class="link-title1 title">{textLink}</span>
		</div>
	</span>
	<div class="link-icon">
		<svg
			class="icon"
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
		>
			<path
				d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
			/>
		</svg>
		<svg
			class="icon"
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
		>
			<path
				d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
			/>
		</svg>
	</div>
</a>

<style>
	.link {
		height: 30px;
		align-items: center;
		text-decoration: none;
		display: flex;
		margin: auto;
	}

	/* Hide extra text */
	.mask {
		position: relative;
		padding: 0;
		height: 20px;
		margin-right: 0.5em;

		/*  Remove overflow to see how it works　:) */
		overflow: hidden;
	}

	.link-container {
		transition: transform 0.4s ease;
	}

	.title {
		display: block;

		/*  Set same font-size and line height  */
		font-size: 20px;
		line-height: 20px;

		transition: transform 0.4s ease;
	}

	.link-title1 {
		transform-origin: right center;
	}

	.link-icon {
		position: relative;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: var(--color--text-shade);

		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10px;

		/*  Remove overflow to see how it works　:) */
		overflow: hidden;
	}

	.icon {
		display: block;
		position: absolute;
		fill: var(--color--text-inverse);
		transition: transform 0.4s ease;
	}

	.icon:nth-child(2) {
		transform: translate(-40px);
	}

	/* Hover Action*/

	/* Move arrows to right */
	.link:hover .icon:first-child {
		transform: translate(40px);
	}

	.link:hover .icon:nth-child(2) {
		transform: translate(0px);
	}
</style>
