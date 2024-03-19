<script>
	const img_src = "/images/IMG_7751.png";
	let h;
</script>

<svelte:head>
	<title>FORMULA TECHNION</title>
</svelte:head>

<div class="relative">
	<div class="h-screen picture"></div>
	<div
		class="absolute p-4 h-fit w-fit bottom-10 left-5 text-3xl font-thin text-white rounded-lg"
	>
		<div class="text-5xl md:text-8xl">Formula Technion</div>
		<div class="text-slate-400 md:text-4xl">
			Building Israel's Automotive Future
		</div>
	</div>
</div>
<section class="main text-xl p-8">
	<h1 class="text-left text-2xl">Who we are:</h1>
	<div class="main-p">
		Each year, a group of around 40 students get together and change the
		course of history.
	</div>
	<div class="main-p">
		Formula Technion is the Formula Student team associated with the
		Technion - Israel Institute of Technology. The team was formed at the
		beginning of 2012 comprising of 20 Mechanical Engineering students. The
		first competition the team participated in was in the Summer of 2013.
	</div>
	<div class='main-p'>
		Since the formation of the team in 2012, the team has participated in
		yearly competitions held in Europe, with a race-car designed and built
		by an entirely student run team. Between 2012 and 2020, the team
		constructed race-cars powered by combustion engines, transitioning to
		electric combined autonomous vehicles in 2021. The current team consists
		of 55 students from different faculties at the Technion, namely:
		Mechanical engineering, Aeronautical engineering, Computer science, Data
		Science, Electrical engineering, Biomedical engineering, Physics,
		Architecture & Material engineering. 
	</div>
	<div class='main-p'>
		Each year, our goal is to create a
		new race car by adhering to competition regulations, implementing Good
		Engineering Practices, employing various engineering methods, and
		conducting thorough testing. This vehicle is intended for participation
		in the Formula Student Competitions held in Europe.
	</div>
</section>

<style>
	.picture {
		background-image: url("/images/img_7751.webp");
		background-size: cover;
		background-position: center;
	}
	.main-p {
		padding: 12px;
	}
</style>
