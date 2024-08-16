<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let additionalClass: string | undefined = undefined;
	export let cardTitle: string;
	export let cardSlug: string;
	export let selected: boolean = false;

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('updateSelected', {
			message: 'selected',
			selected: selected,
			cardTitle,
			cardSlug
		});
	}
</script>

<div class="card {additionalClass}" data-sveltekit-preload-data>
	<div class="checkbox">
		<label class="checkbox-wrapper">
			<input
				type="checkbox"
				class="checkbox-input"
				bind:checked={selected}
				on:change={handleClick}
			/>
			<span class="checkbox-tile">
				<span class="checkbox-icon">
					<div class="body">
						<div class="content">
							<slot name="content" />
						</div>
						{#if $$slots.footer}
							<div class="footer">
								<slot name="footer" />
							</div>
						{/if}
					</div>
				</span>
				<span class="checkbox-label"></span>
			</span>
		</label>
	</div>
</div>

<style lang="scss">
	.card {
		// border: 3px solid var(--color--card-background);
		margin: 1rem;
		box-shadow: var(--card-shadow);
		color: var(--color--text);
		border-radius: 10px;
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
		width: auto;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		text-decoration: none;

		&[href],
		&[onclick] {
			cursor: pointer;
			&:hover {
				box-shadow: var(--card-shadow-hover);
				transform: scale(1.01);
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		padding: 20px 20px;
		flex: 1 0 50%;
		width: 100%;

		.content {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
	}

	.image {
		position: relative;
		flex: 1 0 max(50%, 330px);
		// height: min(100%, 300px);
		min-height: 280px;
		max-height: 350px;
	}

	:global(.card [slot='image']) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}

	.checkbox {
		width: 100%;
	}

	.checkbox-wrapper {
		width: 100%;
	}

	.checkbox-input {
		// Code to hide the input
		clip: rect(0 0 0 0);
		clip-path: inset(100%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;

		&:checked + .checkbox-tile {
			border-color: #2260ff;
			box-shadow: 0 5px 10px rgba(#000, 0.1);
			color: #2260ff;
			&:before {
				transform: scale(1);
				opacity: 1;
				background-color: #2260ff;
				border-color: #2260ff;
			}

			.checkbox-icon,
			.checkbox-label {
				color: #2260ff;
			}
		}

		&:focus + .checkbox-tile {
			border-color: #2260ff;
			box-shadow:
				0 5px 10px rgba(#000, 0.1),
				0 0 0 4px #b5c9fc;
			&:before {
				transform: scale(1);
				opacity: 1;
			}
		}
	}

	.checkbox-tile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		// min-height: 7rem;
		border-radius: 0.5rem;
		border: 2px solid var(--color--card-background);
		// background-color: #fff;
		box-shadow: 0 5px 10px var(--card-shadow);
		transition: 0.15s ease;
		cursor: pointer;
		position: relative;

		&:before {
			content: '';
			position: absolute;
			display: block;
			width: 1.25rem;
			height: 1.25rem;
			border: 2px solid var(--color--card-background);
			// background-color: #fff;
			border-radius: 50%;
			top: 0.25rem;
			left: 0.25rem;
			opacity: 0;
			transform: scale(0);
			transition: 0.25s ease;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
			background-size: 12px;
			background-repeat: no-repeat;
			background-position: 50% 50%;
		}

		&:hover {
			border-color: #2260ff;
			&:before {
				transform: scale(1);
				opacity: 1;
			}
		}
	}

	.checkbox-icon {
		transition: 0.375s ease;
		svg {
			width: 3rem;
			height: 3rem;
		}
	}

	.checkbox-label {
		color: #707070;
		transition: 0.375s ease;
		text-align: center;
	}
</style>
