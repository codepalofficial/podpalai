<script lang="ts">
    import { Card } from "flowbite-svelte";
    import type PodcastCardData from "../types/PodcastCardData";
    import PodcastEpisode from "../components/PodcastEpisode.svelte";
    import { getEpisodesById } from "../calls/FireStoreCalls";
    import { episodeStore } from "../stores/episodeStore";
    import EpisodeCardGrid from "./EpisodeCardGrid.svelte";
  
    let podcast: PodcastCardData = { 
         // Replace with the actual podcast ID
    };
  
    async function fetchEpisodes() {
      try {
        const values = await getEpisodesById(podcast.id);
        if (values !== undefined) {
          episodeStore.set(values);
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    }
  
    fetchEpisodes();
  </script>

<div>
     <div class="flex justify-center w-full"> 
        <Card class="text-left" size="lg" padding="xl" img={podcast.image_300_url}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{podcast.name}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{podcast.description}</p>
        </Card>
    </div> 

    {#each $episodeStore as episode}
        <div class="flex justify-center p-5">
            <PodcastEpisode {episode}/>
        </div>
    {/each}

    <EpisodeCardGrid/>

</div>
