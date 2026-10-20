import { mangaMock } from "./mock-data";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getManga() {
    await delay(800);
    return mangaMock;
}