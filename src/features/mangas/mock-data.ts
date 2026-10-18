import type { Manga } from './types';

export const mangaMock: Manga = {
    id: 1,
    title: "Hyouka",
    synopsis: "A história segue Houtarou Oreki, um estudante do ensino médio que é conhecido por sua natureza preguiçosa e aversão a gastar energia desnecessária. No entanto, sua vida muda quando ele se junta ao Clube de Literatura Clássica da escola, onde conhece a curiosa e energética Eru Chitanda. Juntos, eles começam a resolver mistérios e desvendar segredos escondidos na vida cotidiana.",
    author: "Kakifly",
    status: "ongoing",
    genres: ["Comédia", "Drama", "Romance"],
    coverKey: null,
    updatedAt: new Date(),
}