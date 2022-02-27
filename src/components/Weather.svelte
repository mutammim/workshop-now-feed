<script>
	export let data;
</script>

<div
	class="rounded-lg bg-white shadow-sm hover:shadow-md p-4 flex flex-col gap-4 transition-shadow ease-in-out"
>
	<div class="flex gap-2 justify-between px-2">
		<div class="font-extrabold text-4xl">
			{Math.round(data.main.temp)}°
		</div>
		<div class="text-slate-800 text-right">
			<p>{data.name}</p>
			<p class="font-bold">
				{data.weather[0].main}
			</p>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div class="rounded-lg flex justify-between bg-slate-50 p-4">
			<div>
				{Math.round(data.main.temp_min)}°
			</div>
			<div class="font-bold">
				{Math.round(data.main.temp_max)}°
			</div>
		</div>
		<div class="rounded-lg bg-slate-50 p-4">
			Feels like <span class="font-bold">
				{Math.round(data.main.feels_like)}°
			</span>
		</div>
	</div>
</div>
