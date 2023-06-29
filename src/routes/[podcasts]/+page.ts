import { getEpisodesById } from "$lib/calls/FireStoreCalls";
import { selectedPodcastStore } from "$lib/stores/podcastStore"
import { podcastStore } from "$lib/stores/podcastStore";
import { episodeStore } from "$lib/stores/episodeStore";
import type PodcastCardData from "$lib/types/PodcastCardData";

// import { pod } from 'svelte/store';

export const prerender = 'auto';

/** @type {import('./$types').PageLoad} */
export async function load() {
//     const value = get(selectedPodcastStore);
//     console.log(value);
//     const unsubscribe = selectedPodcastStore.subscribe((value) => {
//         // getEpisodesById(value.id).then((values) => {
//         //     if (values !== undefined) {
//         //         // episodeStore.set(values);r
//         //     }
//         // })
//         console.log(value)
//     }); 
//     onDestroy(unsubscribe);
// }

    podcastStore.subscribe(podcasts => {
        podcasts.forEach((podcast) => {
            if (podcast.id == "") {
                selectedPodcastStore.set(podcast)
            }
        })
    })
}


