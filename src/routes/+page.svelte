<script lang="ts">
	// import { onMount } from "svelte";
	// import { getPodcasts } from "../lib/server/FireStoreCalls";
	import type PodcastCardData from "../lib/types/PodcastCardData";
	import { podcastStore, selectedPodcastStore } from "../lib/stores/podcastStore";
	import ProfileCardGrid from "../lib/components/ProfileCardGrid.svelte"
	
    let selectedPodcast: PodcastCardData | undefined;

    selectedPodcastStore.subscribe(data => {
      selectedPodcast = data;
    })
	// console.log($podcastStore)
</script>

<div class="bg-primary">
	<h1 class="text-center text-5xl font-bold text-white">
	Welcome to the Podpal.AI. <br>
	Find your next favorite podcast!</h1>
	<ProfileCardGrid/>
</div>