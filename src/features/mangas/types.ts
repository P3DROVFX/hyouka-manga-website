export type MangaStatus = "ongoing" | "completed" | "hiatus" | "cancelled";
export type Manga = { 
    id: number;
    title: string;
    synopsis: string;
    author: string;
    status: MangaStatus;
    genres: string[];
    coverKey: string | null;
    updatedAt: Date;
}