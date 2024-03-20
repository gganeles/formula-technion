<script>
	import { page } from "$app/stores";
	import "./styles.css";
	import "../app.css";
	import NavEl from "./NavEl.svelte";
	import { slide, fade } from "svelte/transition";
	import HamburgerIcon from "../lib/HamburgerIcon.svelte";

	const navbar_items = [
		{ text: "News", href: "/news" },
		{ text: "Meet the Team", href: "/meet_the_team" },
		{ text: "Cars", href: "/cars" },
		{ text: "Our Sponsors", href: "/sponsors" },
		{ text: "The Competition", href: "/competition" },
	];

	let y;
	let w;
	let toggle = false;
	let navbar_colored;
	let smallScreen;
	$: smallScreen = w < 800 ? true : false;
	$: navbar_colored = smallScreen | (y > 1) ? true : false;
</script>

<svelte:window bind:scrollY={y} />

<div class="app w-full bg-color" bind:clientWidth={w}>
	<ul
		class="flex z-20 navbar {navbar_colored &&
			'bg-formula'} text-white text-lg fixed items-center w-full {toggle &&
		smallScreen
			? ''
			: 'flex-row'} h-14 {smallScreen && 'flex-col'}"
	>
		{#if !smallScreen}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="flex h-full p-2 justify-center items-center hover:cursor-pointer"
				on:click={() => {
					window.location = "/";
				}}
			>
				<img
					class="h-full"
					src="/FT22_Logo_white.png"
					alt="formula logo"
				/>
			</div>
			{#each navbar_items as nav, ind (ind)}
				<NavEl
					text={nav.text}
					href={nav.href}
					bind:scrolled={navbar_colored}
				/>
			{/each}
			<button
				class="md:absolute right-8 bg-yellow-500 py-1 px-3 rounded-full"
				on:click={() => (window.location = "/contactus")}
			>
				Contact Us
			</button>
		{:else}
			<div
				class="flex h-full {smallScreen &&
					'flex-row w-full justify-between items-center bg-formula bg-opacity-50'}"
				transition:fade={{ duration: 100 }}
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex h-full p-2 px-6 justify-center items-center hover:cursor-pointer"
					on:click={() => {
						window.location = "/";
					}}
				>
					<img
						class="h-full"
						src="/FT22_Logo_white.png"
						alt="formula logo"
					/>
				</div>
				<button class="" on:click={() => (toggle = !toggle)}>
					<HamburgerIcon width={60} />
				</button>
			</div>
			{#if toggle}
				<div class="flex flex-col w-full bg-formula">

					{#each navbar_items as nav}
						<div transition:slide|global={{duration:smallScreen?300:0}}>
						<NavEl
							text={nav.text}
							href={nav.href}
							bind:scrolled={navbar_colored}
							{smallScreen}
						/>
					</div>
					{/each}
					<button
					transition:slide|global
					class="p-8 text-left w-full bg-yellow-500"
					on:click={() => (window.location = "/contactus")}
				>
					Contact Us
				</button>
				</div>
			{/if}
		{/if}
	</ul>
	<main class="h-full text-white z-1">
		<slot />
	</main>
	{#if $page.route.id != "/cars"}
		<footer
			class="z-10 text-white text-lg flex flex-col items-center bg-darkgrey py-10"
		>
			<div class="pb-8">
				Feel free to reach out to us via our social media:
			</div>
			<div class="flex flex-row p-4 w-full justify-evenly">
				<a href="mailto:formula@technion.ac.il">
					<img src="/email.png" alt="email" class="w-14 h-14" />
				</a>
				<a href="https://il.linkedin.com/company/formulatechnion"
					><img src="/in_1.png" alt="linkedin" class="w-14 h-14" />
				</a>
				<a href="https://www.facebook.com/TechnionFSAE">
					<img
						src="/facebook-logo-2019_1.png"
						alt="facebook"
						class="w-14 h-14"
					/>
				</a>
				<a href="https://www.instagram.com/formulatechnion/">
					<img
						src="/instagram-logo-2016-svg_1.png"
						alt="instagram"
						class="w-14 h-14"
					/>
				</a>
			</div>
		</footer>
	{/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(.bg-formula) {
		background-color: #076093;
	}

	:global(.bg-formula-dark) {
		background-color: #065786;
	}

	:global(.text-formula) {
		color: #076093;
	}

	.navbar {
		transition: all 0.3s ease-in-out;
	}

	.bg-color {
		background: #1b1b1b;
	}

	.gap-custom {
		gap: max(5vw, 4px);
	}

	.bg-darkgrey {
		background: #2a2a2c;
	}
</style>
