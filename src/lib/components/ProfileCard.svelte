
<script lang="ts">
	import { Card } from "flowbite-svelte";
	import { AccordionItem, Accordion } from 'flowbite-svelte'
    import type PodcastCardData from "../types/PodcastCardData";
	export let podcast: PodcastCardData;


</script>

<div>
	<Card img={podcast.image_300_url}>
		<h5 class="p-5">{podcast.name}</h5>
		<p class="text-left line-clamp-3">
			{podcast.description}
		</p>
	</Card>
</div>


<style lang="postcss">
</style>
