<script context="module">
	export async function load({ fetch }) {
		const weatherResponse = await fetch('/api/weather');
		const newsResponse = await fetch('/api/news');

		if (weatherResponse.ok && newsResponse.ok) {
			return {
				props: {
					weather: await weatherResponse.json(),
					news: await newsResponse.json()
				}
			};
		}
	}
</script>

<script>
	import Todo from '../components/Todo.svelte';
	import Search from '../components/Search.svelte';
	import Weather from '../components/Weather.svelte';
	import News from '../components/News.svelte';

	export let weather;
	export let news;
</script>

<div class="h-screen w-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
	<main class="flex flex-col max-w-xl h-screen mx-auto p-4 gap-4">
		<Search />
		<Todo />
		<Weather data={weather} />
		<News data={news} />
	</main>
</div>
