type Props = {
    params: Promise<{ chapter: string }>;
    searchParams: Promise<{ page?: string }>;
};

export default async function ChapterPage({ params, searchParams }: Props) {
    const { chapter } = await params;
    const { page = "1" } = await searchParams;
    return (
        <div>
            <h1>Chapter {chapter}, page {page}</h1>
        </div>
    )
}