<script lang="ts">
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from "@rgossiaux/svelte-headlessui";

	export let config: any;
	let categories = config.categories;
	let selectedCategory = categories[0];
	console.log(selectedCategory);
</script>

<div class="w-full h-16 bg-gray-950 flex justify-between items-center px-3 space-x-3">
	<div class="w-full max-w-[200px]">
		<Listbox
			class="relative w-full"
			value={selectedCategory}
			on:change={(e) => (selectedCategory = e.detail)}
		>
			<ListboxButton
				class="px-4 py-2 bg-gray-500/20 active:bg-gray-500/40 rounded-md text-gray-300 capitalize w-full"
			>
				{selectedCategory}
			</ListboxButton>
			<ListboxOptions class="absolute p-1 bg-gray-900/60 backdrop-blur-md rounded-md mt-2 w-full">
				{#each categories as category}
					<ListboxOption
						class="px-4 py-1 cursor-pointer text-sm hover:bg-gray-500/20 active:bg-gray-500/40 rounded-md text-gray-300 capitalize hover:text-primary-light"
						value={category}
					>
						{category}
					</ListboxOption>
				{/each}
			</ListboxOptions>
		</Listbox>
	</div>
	<div class="w-full md:w-1/2">
		<input class="w-full rounded-md bg-gray-500/20 text-gray-400 outline-none p-2" type="text" />
	</div>
	<div class="w-10 aspect-square rounded-full overflow-hidden bg-gray-500/20">
		<img
			class="object-cover w-full h-full p-1 rounded-full"
			src="https://rukminim1.flixcart.com/image/416/416/kvlaaa80/poster/b/z/b/medium-anime-boy-aesthetic-aesthetic-anime-aesthetic-anime-boy-original-imag8gayqv2dfv9g.jpeg?q=70"
			alt=""
		/>
	</div>
</div>
