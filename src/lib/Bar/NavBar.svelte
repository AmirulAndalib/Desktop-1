<script lang="ts">
	import Icon from "$lib/Icon.svelte";
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from "@rgossiaux/svelte-headlessui";

	export let config: any;
	let categories = config.categories;
	let selectedCategory = categories[0];

	$: searchActive = false;
</script>

<div class="w-full h-16 bg-gray-950 flex justify-between items-center px-3 space-x-3">
	<div class="flex space-x-3 w-full">
		<div class="w-full max-w-[200px]">
			<Listbox
				class="relative w-full"
				value={selectedCategory}
				on:change={(e) => (selectedCategory = e.detail)}
			>
				<ListboxButton
					class="px-4 py-2 bg-gray-500/20 active:bg-gray-500/40 rounded-lg text-gray-300 capitalize w-full"
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
		<div class="w-full md:w-1/2 relative">
			<div class="absolute top-0 bottom-0 flex items-center h-full px-2">
				<Icon name="search" />
			</div>
			<input
				on:mousedown={() => (searchActive = true)}
				on:blur={() => (searchActive = false)}
				class="w-full rounded-lg bg-gray-500/20 text-gray-400 outline-none p-2 indent-8"
				type="text"
			/>
			{#if searchActive}
				<div
					class="absolute top-12 w-full rounded-lg overflow-hidden bg-gray-500/20 backdrop-blur-md divide-y divide-gray-500/20"
				>
					<a href="/" class="flex space-x-2 p-2 hover:bg-gray-500/20 active:bg-gray-500/40 w-full">
						<div class="aspect-square w-12 rounded-md overflow-hidden">
							<img
								class="w-full h-full object-cover"
								src="https://www.themoviedb.org/t/p/w1280/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg"
								alt=""
							/>
						</div>
						<div class="flex flex-col justify-between">
							<div class="text-gray-200 font-semibold">Peter Pan & Wendy (2023)</div>
							<div class="flex space-x-2 items-center">
								<div class="text-yellow-400 text-xs rounded-full bg-yellow-500/20 px-2 w-fit">
									Movie
								</div>
								<span class="h-2 w-[1px] bg-gray-500/40" />
								<div class="text-xs w-fit text-gray-400">Family, Fantasy, Action, Adventure</div>
							</div>
						</div>
					</a>
					<a href="/" class="flex space-x-2 p-2 hover:bg-gray-500/20 active:bg-gray-500/40 w-full">
						<div class="aspect-square w-12 rounded-md overflow-hidden">
							<img
								class="w-full h-full object-cover"
								src="https://www.themoviedb.org/t/p/w1280/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"
								alt=""
							/>
						</div>
						<div class="flex flex-col justify-between">
							<div class="text-gray-200 font-semibold">Demon Slayer: Kimetsu no Yaiba (2019)</div>
							<div class="flex space-x-2 items-center">
								<div class="text-blue-400 text-xs rounded-full bg-blue-500/20 px-2 w-fit">
									Series
								</div>
								<span class="h-2 w-[1px] bg-gray-500/40" />
								<div class="text-xs w-fit text-gray-400">
									Animation, Action & Adventure, Sci-Fi & Fantasy
								</div>
							</div>
						</div>
					</a>
					<a href="/" class="flex space-x-2 p-2 hover:bg-gray-500/20 active:bg-gray-500/40 w-full">
						<div class="aspect-square w-12 rounded-md overflow-hidden">
							<img
								class="w-full h-full object-cover"
								src="https://www.themoviedb.org/t/p/w1280/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
								alt=""
							/>
						</div>
						<div class="flex flex-col justify-between">
							<div class="text-gray-200 font-semibold">Breaking Bad (2008)</div>
							<div class="flex space-x-2 items-center">
								<div class="text-blue-400 text-xs rounded-full bg-blue-500/20 px-2 w-fit">
									Series
								</div>
								<span class="h-2 w-[1px] bg-gray-500/40" />
								<div class="text-xs w-fit text-gray-400">Drama, Crime</div>
							</div>
						</div>
					</a>
				</div>
			{/if}
		</div>
	</div>

	<div class="w-10 aspect-square rounded-full overflow-hidden bg-gray-500/20 ml-auto mr-0">
		<img
			class="object-cover w-full h-full p-1 rounded-full"
			src="https://rukminim1.flixcart.com/image/416/416/kvlaaa80/poster/b/z/b/medium-anime-boy-aesthetic-aesthetic-anime-aesthetic-anime-boy-original-imag8gayqv2dfv9g.jpeg?q=70"
			alt=""
		/>
	</div>
</div>
