<script lang="ts">
    import type PodcastCardData from "../types/PodcastCardData";
    import ProfileCard from "../components/ProfileCard.svelte";
    import { podcastStore, selectedPodcastStore } from "../stores/podcastStore"; 
</script>



<div class="p-[100px]">
  {#each $podcastStore as podcast}
    <a href="/{podcast.id}">
      <button class="p-20" on:click={ () => {selectedPodcastStore.set(podcast)}}>
        <ProfileCard {podcast} />
      </button>
    </a>
  {/each}
</div>
