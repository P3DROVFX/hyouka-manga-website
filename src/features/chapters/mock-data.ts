import type { Chapter, Page } from "./types";

export const chaptersMock: Chapter[] = [
    {
        id: 100,
        number: 1,
        title: "O Renascimento do Clube de Literatura Clássica",
        status: "published",
        publishedAt: new Date("2023-01-01T12:00:00"),
    },
    {
        id: 101,
        number: 2,
        title: "As Atividades do Clube Tradicional",
        status: "published",
        publishedAt: new Date("2023-01-15T12:00:00"),
    },
    {
        id: 102,
        number: 3,
        title: null,
        status: "published",
        publishedAt: new Date("2023-02-01T12:00:00"),
    },
    {
        id: 103,
        number: 4,
        title: "A Herdeira da Antologia Hyouka",
        status: "published",
        publishedAt: new Date("2023-02-15T12:00:00"),
    },
    {
        id: 104,
        number: 5,
        title: "O Segredo de 33 Anos Atrás",
        status: "published",
        publishedAt: new Date("2023-03-01T12:00:00"),
    },
    {
        id: 105,
        number: 6,
        title: "O Grito de Sekitani Jun",
        status: "published",
        publishedAt: new Date("2023-03-20T12:00:00"),
    },
    {
        id: 106,
        number: 7,
        title: "A Sombra da Semana Dourada",
        status: "published",
        publishedAt: new Date("2023-04-05T12:00:00"),
    },
    {
        id: 107,
        number: 8,
        title: null,
        status: "published",
        publishedAt: new Date("2023-04-20T12:00:00"),
    },
    {
        id: 108,
        number: 9,
        title: "O Mistério da Estalagem das Termas",
        status: "published",
        publishedAt: new Date("2023-05-10T12:00:00"),
    },
    {
        id: 109,
        number: 10,
        title: "A Aparição no Quarto 7",
        status: "published",
        publishedAt: new Date("2023-05-25T12:00:00"),
    },
    {
        id: 110,
        number: 11,
        title: "A Chegada do Festival Kanya",
        status: "published",
        publishedAt: new Date("2023-06-15T12:00:00"),
    },
    {
        id: 111,
        number: 12,
        title: "O Incidente das 200 Cópias",
        status: "published",
        publishedAt: new Date("2023-07-01T12:00:00"),
    },
    {
        id: 112,
        number: 13,
        title: null,
        status: "published",
        publishedAt: new Date("2023-07-20T12:00:00"),
    },
    {
        id: 113,
        number: 14,
        title: "O Desafio do Ladrão Juumonji",
        status: "published",
        publishedAt: new Date("2023-08-05T12:00:00"),
    },
    {
        id: 114,
        number: 15,
        title: "Itens Roubados em Ordem Alfabética",
        status: "published",
        publishedAt: new Date("2023-08-25T12:00:00"),
    },
    {
        id: 115,
        number: 16,
        title: "A Batalha do Clube de Culinária",
        status: "published",
        publishedAt: new Date("2023-09-10T12:00:00"),
    },
    {
        id: 116,
        number: 17,
        title: null,
        status: "published",
        publishedAt: new Date("2023-09-28T12:00:00"),
    },
    {
        id: 117,
        number: 18,
        title: "A Ordem de Kudryavka",
        status: "published",
        publishedAt: new Date("2023-10-15T12:00:00"),
    },
    {
        id: 118,
        number: 19,
        title: "O Fechamento das Cortinas do Festival",
        status: "published",
        publishedAt: new Date("2023-11-01T12:00:00"),
    },
    {
        id: 119,
        number: 20,
        title: "O Enigma do Chocolate Artesanal",
        status: "published",
        publishedAt: new Date("2023-12-01T12:00:00"),
    },
    {
        id: 120,
        number: 21,
        title: null,
        status: "published",
        publishedAt: new Date("2023-12-20T12:00:00"),
    },
    {
        id: 121,
        number: 22,
        title: "Corações Feridos no Dia dos Namorados",
        status: "published",
        publishedAt: new Date("2024-01-10T12:00:00"),
    },
    {
        id: 122,
        number: 23,
        title: "O Longo Caminho ao Redor",
        status: "published",
        publishedAt: new Date("2024-02-14T12:00:00"),
    },
    {
        id: 123,
        number: 24,
        title: "O Desfile das Bonecas Hina Sob as Cerejeiras",
        status: "draft",
        publishedAt: null,
    },
    {
        id: 124,
        number: 25,
        title: "Prelúdio do Novo Ano Escolar",
        status: "draft",
        publishedAt: null,
    },
    {
        id: 125,
        number: 26,
        title: null,
        status: "draft",
        publishedAt: null,
    },
];

interface ChapterPageSpec {
    count: number;
    spreads?: number[];
    width?: number;
    height?: number;
}

const chapterPageSpecs: Record<number, ChapterPageSpec> = {
    1: { count: 18, spreads: [6], width: 1080, height: 1620 },
    2: { count: 12, width: 1080, height: 1620 },
    3: { count: 10, width: 800, height: 1200 },
    4: { count: 16, spreads: [8], width: 1200, height: 1800 },
    5: { count: 20, spreads: [10], width: 1080, height: 1620 },
    6: { count: 14, width: 1080, height: 1620 },
    7: { count: 8, width: 800, height: 1200 },
    8: { count: 12, spreads: [4], width: 1080, height: 1620 },
    9: { count: 15, width: 1080, height: 1620 },
    10: { count: 18, spreads: [7], width: 1200, height: 1800 },
    11: { count: 10, width: 800, height: 1200 },
    12: { count: 16, spreads: [9], width: 1080, height: 1620 },
    13: { count: 8, width: 800, height: 1200 },
    14: { count: 14, width: 1080, height: 1620 },
    15: { count: 22, spreads: [12], width: 1200, height: 1800 },
    16: { count: 12, width: 1080, height: 1620 },
    17: { count: 10, width: 800, height: 1200 },
    18: { count: 18, spreads: [8], width: 1080, height: 1620 },
    19: { count: 14, width: 1080, height: 1620 },
    20: { count: 12, width: 800, height: 1200 },
    21: { count: 8, width: 800, height: 1200 },
    22: { count: 16, spreads: [6], width: 1080, height: 1620 },
    23: { count: 20, spreads: [11], width: 1200, height: 1800 },
    24: { count: 14, width: 1080, height: 1620 },
    25: { count: 10, width: 800, height: 1200 },
    26: { count: 8, width: 800, height: 1200 },
};

function createMockPages(chapters: Chapter[]): Page[] {
    const pages: Page[] = [];

    for (const chapter of chapters) {
        const spec = chapterPageSpecs[chapter.number] ?? { count: 12, width: 1080, height: 1620 };
        const defaultWidth = spec.width ?? 1080;
        const defaultHeight = spec.height ?? 1620;
        const chapterPad = String(chapter.number).padStart(2, "0");

        for (let pageNum = 1; pageNum <= spec.count; pageNum++) {
            const pagePad = String(pageNum).padStart(3, "0");
            const isSpread = spec.spreads?.includes(pageNum) ?? false;

            // Página 1 geralmente é capa / página colorida (1200x1800), spreads têm largura dobrada
            const width = isSpread ? defaultHeight * 1.33 : pageNum === 1 ? 1200 : defaultWidth;
            const height = isSpread ? defaultHeight : pageNum === 1 ? 1800 : defaultHeight;

            pages.push({
                id: chapter.id * 100 + pageNum,
                chapterId: chapter.id,
                pageNumber: pageNum,
                imageKey: `chapters/c${chapterPad}/page-${pagePad}.jpg`,
                width: Math.round(width),
                height: Math.round(height),
            });
        }
    }

    return pages;
}

export const pagesMock: Page[] = createMockPages(chaptersMock);