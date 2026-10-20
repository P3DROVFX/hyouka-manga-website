import { getPublishedChaptersWithPages } from "@/src/features/chapters/queries";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ numero: string }>;
    searchParams: Promise<{ page?: string }>;
};

export default async function ChapterPage({ params, searchParams }: Props) {
    const { numero } = await params;
    const { page = "1" } = await searchParams;

    const number = Number(numero);
    if (!Number.isInteger(number) || number < 1) notFound();
    const chapter = await getPublishedChaptersWithPages(number);
    if (!chapter) notFound();

    return (
        <div>
            <h1>Chapter {chapter.number}, pages: {chapter.pages.length}</h1>
        </div>
    )
}