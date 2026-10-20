import { chaptersMock, pagesMock } from "./mock-data";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getPublishedChapters() {
    await delay(800);
    return chaptersMock.filter((chapter) => chapter.status === "published").sort((a, b) => b.number - a.number);
}

export async function getPublishedChaptersWithPages(chapterNumber: number) {
    await delay(800);
    const chapter = chaptersMock.find((chapter) => chapter.number === chapterNumber && chapter.status === "published");
    if (!chapter) return null;
    const pages = pagesMock.filter((page) => page.chapterId === chapter.id).sort((a, b) => a.pageNumber - b.pageNumber);
    return { ...chapter, pages };
}
