<script>
	import { page } from "$app/stores";
	import "./styles.css";
	import "../app.css";
	import NavEl from "./NavEl.svelte";
	import { slide, fade } from "svelte/transition";
	import HamburgerIcon from "../lib/HamburgerIcon.svelte";

	const navbar_items = [
		{ text: "NEWS", href: "/news" },
		{ text: "MEET THE TEAM", href: "/meet_the_team" },
		{ text: "CARS", href: "/cars" },
		{ text: "OUR SPONSORS", href: "/sponsors" },
		{ text: "THE COMPETITION", href: "/competition" },
	];

	let y;
	let w;
	let toggle = false;
	let navbar_colored;
	let smallScreen;
	$: smallScreen = w < 1300 ? true : false;
	$: navbar_colored =
		smallScreen | ($page.route.id == "/meet_the_team") | (y > 1)
			? true
			: false;
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
			<div
				class="flex flex-row divide-x-2 md:absolute right-8 bg-yellow-500 py-1 px-3 rounded-full"
			>
				<button
					class="px-2 pt-1"
					on:click={() => (window.location = "/contactus")}
				>
					CONTACT US
				</button>
				<button
					class="px-2 pt-1"
					on:click={() => (window.location = "/apply")}
				>
					APPLY
				</button>
			</div>
		{:else}
			<div
				class="flex h-full {smallScreen &&
					'flex-row w-full justify-between items-center bg-formula bg-opacity-50'}"
				transition:fade={{ duration: 100 }}
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex h-full p-1 px-2.5 justify-center items-center hover:cursor-pointer"
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
						<div
							transition:slide|global={{
								duration: smallScreen ? 300 : 0,
							}}
						>
							<NavEl
								text={nav.text}
								href={nav.href}
								bind:scrolled={navbar_colored}
								{smallScreen}
							/>
						</div>
					{/each}
					<div
						transition:slide|global
						class="flex flex-row divide-x-2 divide-white"
					>
						<button
							class="p-8 text-center w-full bg-yellow-500"
							on:click={() => (window.location = "/contactus")}
						>
							CONTACT US
						</button>
						<button
							transition:slide|global
							class="p-8 text-center w-full bg-yellow-500"
							on:click={() => (window.location = "/apply")}
						>
							APPLY
						</button>
					</div>
				</div>
			{/if}
		{/if}
	</ul>
	<main class="h-full text-white z-1">
		<slot />
	</main>
	{#if $page.route.id != "/cars" && $page.route.id != "/meet_the_team"}
		<footer
			class="z-10 text-white text-lg flex flex-col items-center bg-darkgrey py-10"
		>
			<div class="pb-8">Get in touch with us via social media:</div>
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
