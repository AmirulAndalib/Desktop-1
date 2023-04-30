<script lang="ts">
	import Navbar from "$lib/Bar/NavBar.svelte";
	import SideBar from "$lib/Bar/SideBar.svelte";
	import "../app.css";

	import type { LayoutData } from "./$types";
	export let data: LayoutData;
</script>

<div class="w-full h-screen flex">
	<SideBar />
	<div class="w-full">
		<Navbar config={data} />
		<slot />
	</div>
</div>
