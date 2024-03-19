<script>
	import "./styles.css";
	import "../app.css";
	import NavEl from "./NavEl.svelte";
	import clickOutside from "./clickOutside";
	import { slide, fade } from "svelte/transition";
	import HamburgerIcon from "../lib/HamburgerIcon.svelte"
	let y = 0;
	let w = 0;
	let toggle = false;
	let navbar_colored = false;
	$: navbar_colored = (y > 1) | smallScreen ? true : false;

	const navbar_items = [
		{ text: "News", href: "/news" },
		{ text: "Meet the Team", href: "/meet_the_team" },
		{ text: "Cars", href: "/cars" },
		{ text: "Our Sponsors", href: "/sponsors" },
		{ text: "The Competition", href: "/competition" },
	];

	let smallScreen=false
	$: smallScreen = w < 500 ? true : false;
</script>

<svelte:window bind:scrollY={y} />

<div class="app w-full bg-color" bind:clientWidth={w}>
	<ul
		class="flex z-20 navbar {navbar_colored &&
			'bg-formula'} text-white text-lg fixed items-center w-full {toggle &&
		smallScreen
			? 'flex-col'
			: 'flex-row'} h-14 {smallScreen && 'flex-col'}"
	>
		{#if smallScreen}
			
				<div
					class="flex h-full {smallScreen &&
						'flex-row w-full justify-between items-center bg-formula bg-opacity-50'}"
					transition:fade={{ duration: 100 }}
				>
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
					<button class='' on:click={() => (toggle = !toggle)}>
						<HamburgerIcon width={60}/>
					</button>
				</div>
			
			{#if toggle}
				<div class="flex flex-col w-full bg-formula">
					{#each navbar_items as nav}
						<NavEl
							text={nav.text}
							href={nav.href}
							bind:scrolled={navbar_colored}
							{smallScreen}
						/>
					{/each}
				</div>
			{/if}
		{:else}
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
		{/if}
	</ul>
	<main class="h-full text-white z-1">
		<slot />
	</main>
	<footer
		class="z-10 text-white text-lg flex flex-col items-center bg-darkgrey py-10"
	>
		<div class="pb-8">
			Feel free to reach out to us via our social media:
		</div>
		<div class="flex flex-row p-4 w-full justify-evenly">
			<a href="mailto:formula@technion.ac.il">Email</a>
			<a href="https://il.linkedin.com/company/formulatechnion"
				>LinkedIn</a
			>
			<a href="https://www.facebook.com/TechnionFSAE">Facebook</a>
			<a href="https://www.instagram.com/formulatechnion/">Instagram</a>
		</div>
	</footer>
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
