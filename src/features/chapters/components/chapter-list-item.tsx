import Link from "next/link";
import { Chapter } from "../types";

export function ChapterListItem({ chapter }: { chapter: Chapter }) {
    return (
        <li key={chapter.id}>
            <Link href={'/chapters/${chapter.id}'}>
                Capítulo {chapter.number} {chapter.title ? `- ${chapter.title}` : ""}
            </Link>
        </li>
    )
}