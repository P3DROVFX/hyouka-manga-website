export type ChapterStatus = "draft" | "published"
export type Chapter = { id: number; number: number; title: string | null; status: ChapterStatus; publishedAt: Date | null };
export type Page = { id: number; chapterId: number; pageNumber: number; imageKey: string; width: number; height: number; };
