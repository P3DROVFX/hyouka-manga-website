import { getPublishedChapters } from "@/src/features/chapters/queries";
import { getManga } from "@/src/features/mangas/queries";

export default async function Home() {
  const [chapters, manga] = await Promise.all([
    getPublishedChapters(),
    getManga(),
  ]);

  console.log("Capítulos publicados:", chapters.length);
  console.log("Manga:", manga);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{manga?.title ?? "Hyouka"}</h1>
      <p>Total de capítulos publicados: {chapters.length}</p>

      <ul>
        {chapters.map((ch) => (
          <li key={ch.id}>
            Capítulo {ch.number} {ch.title ? `- ${ch.title}` : ""}
          </li>
        ))}
      </ul>
    </main>
  );
}