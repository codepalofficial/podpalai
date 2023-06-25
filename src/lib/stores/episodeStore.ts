import { writable } from 'svelte/store';
import type EpisodeData from "../types/EpisodeDate";

export const episodeStore = writable([] as EpisodeData[]);
export const selectedEpisodeStore = writable(undefined as EpisodeData | undefined);
