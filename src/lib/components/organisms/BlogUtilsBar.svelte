<script>
	import CustomButtons from '../atoms/CustomButtons.svelte';
	import QRious from '../atoms/QRious.svelte';
	import { siteBaseUrl } from '$lib/data/meta';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let showQRCode = false;
	let siteURL = ''; // updates onMount

	const toggleQRCode = () => {
		showQRCode = !showQRCode;
	};

    function printPage() {
        window.print()
    }

	// @ts-ignore
	function handleDispatchEvent(e) {
		switch (e.detail.type) {
			case 'qr':
				toggleQRCode();
				break;
			case 'print':
				console.log('print');
                printPage()
				break;
		}
	}

	onMount(() => {
		const pathname = $page.url.pathname;
		siteURL = siteBaseUrl + pathname.substring(1, pathname.length);
	});
</script>

<div class="blog-utils">
	<CustomButtons on:customButtonClick={handleDispatchEvent} buttonType={'qr'} />
	<CustomButtons on:customButtonClick={handleDispatchEvent} buttonType={'print'} />
</div>

{#if showQRCode}
	<div class="qr-code" transition:blur>
		<p>Scan this QR Code to view this resource on you phone.</p>
		<QRious value={siteURL} size={250} />
		<br />
	</div>
{/if}

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.blog-utils {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	.qr-code {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--color--card-background);
		border-radius: 10px;

		p {
			text-align: center;
		}
	}
</style>
