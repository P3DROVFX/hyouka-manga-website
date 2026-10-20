type ChapterProps = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page?: string }>;
};

export default async function ChapterPage({ params, searchParams }: ChapterProps) {
    const { id } = await params;
    const { page = "1" } = await searchParams;

    return (
        <>
            <h1>Chapter {id}</h1>
            <p>Page: {page}</p>
        </>
    )
}
