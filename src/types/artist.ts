export interface Artist{
    artist_name : string
    genres : string[]
    followers : number
    popularity : number
    top_tracks : Track[],
    image_url : string
}

export type SearchArtist = Omit<Artist, 'top_tracks' & 'genres'>;
export interface Track{
    name : string
    duration_ms : number
    preview_url : string
}

type EmotionType = 'joy' | 'sadness' | 'surprise' | 'anger' | 'disgust' | 'neutral' | 'fear';

interface EmotionEntry {
    title: string;
    emotion: EmotionType;
}

export interface KpopEmotionData {
    artist_name: string;
    emotion_list: EmotionEntry[];
    emotion_count: Record<EmotionType, number>;
}