<script>
	export let data;

	let currentIndex = 0;
	$: canGoBack = currentIndex != 0;
	$: canGoForward = currentIndex != data.length - 1;
</script>

<a href={data[currentIndex].link} target="_blank">
	<div
		class="rounded-lg bg-white shadow-sm hover:shadow-md p-4 flex flex-col gap-4 transition-shadow ease-in-out"
	>
		<div class="h-36 overflow-auto">
			<p class="font-bold">
				{data[currentIndex].title}
			</p>
			<p class="text-ellipsis">
				{data[currentIndex].description}
			</p>
		</div>
	</div>
</a>

<div class="flex justify-end gap-2">
	<button
		class={'px-6 py-3 rounded-lg ' + (canGoBack ? 'bg-slate-300' : 'bg-slate-200 text-slate-500')}
		disabled={!canGoBack}
		on:click={() => {
			currentIndex -= 1;
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<button
		class={'px-6 py-3 rounded-lg ' +
			(canGoForward ? 'bg-slate-300' : 'bg-slate-200 text-slate-500')}
		disabled={!canGoForward}
		on:click={() => {
			currentIndex += 1;
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
</div>
