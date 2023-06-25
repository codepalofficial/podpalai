import { get, writable } from 'svelte/store';
import type PodcastCardData from "../types/PodcastCardData"


export const podcastStore = writable([] as PodcastCardData[]);
export const selectedPodcastStore = writable(undefined as PodcastCardData | undefined);
export const selectedPodcastValue = get(selectedPodcastStore);
