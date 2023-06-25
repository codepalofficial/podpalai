type EpisodeData = {
    id: string,
    name: string,
    podcast_id: string,
    description: string,
    uri: string,
    release_date: string,
    duration_ms: number,
    html_description: string,
    explicit: boolean,
    audio_preview_url: string,
    spotify_url: string
}

export default EpisodeData;
