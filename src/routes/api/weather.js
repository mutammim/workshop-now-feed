export async function get() {
	const weatherResponse = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=${
			import.meta.env.VITE_WEATHER_KEY
		}`
	);

	if (weatherResponse.ok) {
		return {
			body: await weatherResponse.json()
		};
	}
}
