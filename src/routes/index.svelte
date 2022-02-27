<script context="module">
	export async function load({ fetch }) {
		const weatherResponse = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=${
				import.meta.env.VITE_WEATHER_KEY
			}`
		);

		if (weatherResponse.ok) {
			return {
				props: {
					weather: await weatherResponse.json()
				}
			};
		}
	}
</script>

<script>
	import Todo from '../components/Todo.svelte';
	import Search from '../components/Search.svelte';

	export let weather;
</script>

<div class="h-screen w-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
	<main class="flex flex-col max-w-xl h-screen mx-auto p-4 gap-4">
		<Search />
		<Todo />

		{JSON.stringify(weather)}
	</main>
</div>
