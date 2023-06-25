import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy, limit} from 'firebase/firestore/lite';
import type EpisodeData from "../types/EpisodeDate";
import type PodcastCardData from "../types/PodcastCardData";
import { firebaseConfig } from "../../config/FirebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
export async function getPodcastById(id: string) {
    const docRef = doc(db, 'podcasts', id);
    const podcastSnapshot = await getDoc(docRef);
    if (!podcastSnapshot.exists()) {
        throw new Error(`Could not find podcast with id ${id}`);
    }
    const podcastData = podcastSnapshot.data() as PodcastCardData;
    return podcastData;
}

export async function getEpisodesById(id: string) {
    const colRef = collection(db, "episodes")
    try {
        // console.log("id: ", id)
        const first = await query(colRef, where("podcast_id", "==", id), orderBy("release_date", "desc"), limit(25))
        const episodeSnapshots = await getDocs(first);
        const episodeList = episodeSnapshots.docs.map(doc => doc.data() as EpisodeData);
        return episodeList;
    } catch (e) {
        console.log(e);
    }
}

export async function getPodcasts(): Promise<PodcastCardData[]> {
    const podcastCol = collection(db, 'podcasts');
    const podcastSnapshot = await getDocs(podcastCol);
    const podcastList: PodcastCardData[] = podcastSnapshot.docs.map(doc => doc.data() as PodcastCardData);
    return podcastList;
}