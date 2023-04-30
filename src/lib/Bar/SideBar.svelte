<script>
	import Icon from '$lib/Icon.svelte';
</script>

<div class="w-16 h-full bg-gray-950 flex flex-col items-center py-3">
	<button
		class="hover:bg-gray-500/20 h-fit w-fit p-2 rounded-md mb-3 active:scale-90 transition-all"
	>
		<img class="w-[24px] h-[24px]" src="/logo.svg" alt="" />
	</button>
	<div class="h-[2px] w-[calc(100%-20px)] bg-gray-500/50" />
	<div class="w-full space-y-3 flex flex-col items-center py-3">
		<button
			class="hover:bg-gray-500/20 h-fit w-fit p-2 rounded-md group active:scale-90 transition-all"
		>
			<Icon name="home" />
		</button>
		<button
			class="hover:bg-gray-500/20 h-fit w-fit p-2 rounded-md group active:scale-90 transition-all"
		>
			<Icon name="global-search" />
		</button>
		<button
			class="hover:bg-gray-500/20 h-fit w-fit p-2 rounded-md group active:scale-90 transition-all"
		>
			<Icon name="folder" />
		</button>
	</div>
	<div class="w-full space-y-3 flex flex-col items-center mt-auto mb-0">
		<button
			class="hover:bg-gray-500/20 h-fit w-fit p-2 rounded-md group active:scale-90 transition-all"
		>
			<Icon name="settings" />
		</button>
	</div>
</div>
