
type PodcastCardData = {
    id: string,
    name: string,
    description: string,
    explicit: boolean,
    href: string,
    image_300_url: string,
    image_640_url: string,
    image_64_url: string,
    language: string[],
    publisher: string,
    total_episodes: number,
    uri: string,
}

export default PodcastCardData