import { getPodcasts } from "../lib/calls/FireStoreCalls";
import { podcastStore, selectedPodcastStore } from "../lib/stores/podcastStore"
export const prerender = 'auto';

/** @type {import('./$types').PageLoad} */
export async function load() {
    // const res = await fetch('/my-server-route.json');
    getPodcasts().then(values =>  {
        podcastStore.set(values)
        selectedPodcastStore.set(undefined);
    })
}
