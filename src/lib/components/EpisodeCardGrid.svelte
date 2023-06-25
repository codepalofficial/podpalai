<script lang="ts">
  

    import type EpisodeData from "../types/EpisodeDate";
    import PodcastEpisode from "./PodcastEpisode.svelte";
    import {episodeStore, selectedEpisodeStore } from "../stores/episodeStore"
    
    let episodes: EpisodeData[] = []; 
    episodeStore.subscribe(data => {
        episodes = data;
    });
</script>


<div class="episode-card-list">
    {#each episodes as episode}
        <PodcastEpisode {episode} />
    {/each}
  </div>

<style lang="postcss">
</style>