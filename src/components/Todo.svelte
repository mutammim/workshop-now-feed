<script>
	let todoInput = '';

	let allTodos = [
		{
			id: 1,
			content: 'Finish homework',
			isDone: false
		},
		{
			id: 2,
			content: 'Drink water',
			isDone: true
		}
	];
</script>

<div
	class="rounded-lg bg-white shadow-sm hover:shadow-md p-4 flex flex-col gap-4 transition-shadow ease-in-out"
>
	{#each allTodos as todo (todo.id)}
		<div class="flex items-center gap-2">
			<input
				type="checkbox"
				class="rounded-full w-5 h-5 focus:ring-transparent text-sky-500 border-2 border-slate-300 transition-colors ease-in-out"
				bind:checked={todo.isDone}
			/>
			<span class={todo.isDone ? 'line-through text-gray-700' : ''}>{todo.content}</span>
		</div>
	{/each}

	<div class="flex flex-col items-center gap-2">
		<input
			type="text"
			class="mt-0 block w-full p-2 border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-slate-900 transition-colors ease-in-out"
			bind:value={todoInput}
		/>
	</div>
	<div class="flex justify-end">
		<button
			class="bg-slate-300 px-6 py-2 rounded-lg transition-colors ease-in-out"
			on:click={() => {
				if (todoInput != '') {
					allTodos = [...allTodos, { id: +Date.now(), content: todoInput, isDone: false }];
					todoInput = '';
				}
			}}>Add</button
		>
	</div>
</div>
