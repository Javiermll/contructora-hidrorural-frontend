import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const targets = [
  {
    input: "public/assets/Proyecto1.jpeg",
    output: "public/assets/Proyecto1.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/Proyecto2.png",
    output: "public/assets/Proyecto2.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/Proyecto3.png",
    output: "public/assets/Proyecto3.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/8vaRegion.png",
    output: "public/assets/8vaRegion.webp",
    webp: { lossless: true, effort: 6 },
  },
  {
    input: "public/assets/ÑubleRegion.png",
    output: "public/assets/ÑubleRegion.webp",
    webp: { lossless: true, effort: 6 },
  },
  {
    input: "public/assets/image2.jpeg",
    output: "public/assets/image2.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/imagen1.jpg",
    output: "public/assets/imagen1.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/ImagenDescriptiva1.jpg",
    output: "public/assets/ImagenDescriptiva1.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/perforacion_de_pozos.jpg",
    output: "public/assets/perforacion_de_pozos.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/prueba_de_bombeo.jpg",
    output: "public/assets/prueba_de_bombeo.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/Tratamiento_Aguas_Servidas.jpeg",
    output: "public/assets/Tratamiento_Aguas_Servidas.webp",
    webp: { quality: 80, effort: 6 },
  },
  {
    input: "public/assets/Aguas_lluvia.JPG",
    output: "public/assets/Aguas_lluvia.webp",
    webp: { quality: 80, effort: 6 },
  },
];

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

let converted = 0;
let skipped = 0;

for (const t of targets) {
  const inputPath = path.resolve(t.input);
  const outputPath = path.resolve(t.output);

  try {
    await fs.access(inputPath);
  } catch {
    console.warn(`SKIP (no existe): ${t.input}`);
    skipped += 1;
    continue;
  }

  const inStat = await fs.stat(inputPath);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(inputPath).webp(t.webp).toFile(outputPath);

  const outStat = await fs.stat(outputPath);

  const saved = inStat.size - outStat.size;
  const pct = inStat.size ? (saved / inStat.size) * 100 : 0;
  console.log(
    `${t.input} -> ${t.output} | ${formatKb(inStat.size)} -> ${formatKb(outStat.size)} | ahorro ${formatKb(saved)} (${pct.toFixed(1)}%)`,
  );

  converted += 1;
}

console.log(`\nListo. Convertidos: ${converted}. Omitidos: ${skipped}.`);
