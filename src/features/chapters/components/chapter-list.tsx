import { ChapterListItem } from "./chapter-list-item";
import { Chapter } from "../types";

export function ChapterList({ chapters }: { chapters: Chapter[] }) {
    if (chapters.length === 0) {
        return <p>Sem capítulos disponíveis.</p>;
    }
    return (
        <ul>
            {chapters.map((ch) => (
                <ChapterListItem key={ch.id} chapter={ch} />
            ))}
        </ul>
    )
}